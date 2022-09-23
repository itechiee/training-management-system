const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const passport = require('passport');
require('dotenv/config');

const userRegister = async (userData, res) => {
    try {
        let usernameNotTaken = await validateUsername(userData.username);
        if(!usernameNotTaken) {
            return res.status(400).json({
                message: `Username is already taken`,
                success: false
            });
        }

        let emailNotTaken = await validateEmail(userData.email);
        if(!emailNotTaken) {
            return res.status(400).json({
                message: `Email is already taken`,
                success: false
            });
        }

        const password = await bcrypt.hash(userData.password, 12);
        
        const newUser = new User({
            ...userData,
            password
        });

        await newUser.save();
        return res.status(201).json({
            message: "User is registered successfully",
            success: true
        });
    } catch(err) {
        res.status(500).json({message: err, success: false})
    }
    
}

const userLogin = async (userData, res) => {
    let { username, password } = userData;
    const user = await User.findOne({username});

    if(!user) {
        return res.status(404).json({
            message: "Username is not found",
            success: false
        });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(403).json({
            message: "incorrect password",
            success: false
        });
    }

    console.log('user._id::', user._id);
    let token = jwt.sign({
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
    }, process.env.APP_SECRET, {
        expiresIn: "7 days"
    });

    let result = {
        username: user.username,
        role: user.role,
        email: user.email,
        token: `Bearer ${token}`
    };

    return res.status(200).json({
        ...result,
        message: "Login success",
        success: true
    });

}

const validateUsername = async username => {
    let user =  await User.findOne({ username });
    return user ? false : true;
}

const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
}

const userAuth = passport.authenticate('jwt', {session: false});

const checkRole = roles => (req, res, next) => roles.includes(req.user.role) ? next() : res.status(401).json("Unauthorize");

const updateUser = async (userData, res) => {
    try {
        
        const updateUser = {
            name: userData.name,
            updatedAt: Date.now(),
        }

        await User.updateMany(
            { _id: userData.user_id },
            updateUser
        );
        return res.status(201).json({
            message: "User is updated successfully",
            success: true
        });
    } catch(err) {
        res.status(500).json({message: err, success: false})
    }
}

const updateUserPassword = async (userData, res) => {
    try {
        
        const password = await bcrypt.hash(userData.password, 12);

        const updateUser = {
            password,
            updatedAt: Date.now(),
        }

        await User.updateMany(
            { _id: userData.user_id },
            updateUser
        );
        return res.status(201).json({
            message: "User password is updated successfully",
            success: true
        });
    } catch(err) {
        res.status(500).json({message: err, success: false})
    }
}

module.exports = {
    updateUser,
    userAuth,
    userRegister,
    userLogin,
    checkRole,
    updateUserPassword
}