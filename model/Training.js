const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    subjects: {
        type: Array,
        required: true
    },
    type: {
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

module.exports = mongoose.model('Training', TrainingSchema);