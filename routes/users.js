const express = require('express');
const router = express.Router();
const { userRegister, userLogin, userAuth, checkRole, updateUser, updateUserPassword } = require('../utils/Auth');

router.post("/register", async(req, res) => {
    await userRegister(req.body, res);
});


router.post("/login", async(req, res) => {
    await userLogin(req.body, res);
});

router.get("/profile", userAuth, checkRole(['admin', 'user']), async(req, res) => {
    let user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        username: req.user.user,
        role: req.user.role
    }
    return res.json({user, message: 'success'})
});

router.patch("/profile", userAuth, checkRole(['admin', 'user']), async(req, res) => {
    let userData = {
        user_id: req.user._id,
        ... req.body
    }
    await updateUser(userData, res);
});

router.patch("/password", userAuth, checkRole(['admin', 'user']), async(req, res) => {
    let userData = {
        user_id: req.user._id,
        ... req.body
    }
    await updateUserPassword(userData, res);
});

module.exports = router;