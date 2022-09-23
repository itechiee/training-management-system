const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    lastModifiedUserId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Subject', SubjectSchema);