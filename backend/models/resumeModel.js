const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: String,
    skills: [String],
    experience: String,
    education: String
});

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;