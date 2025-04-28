const Resume = require('../models/resumeModel');

exports.uploadResume = (req, res) => {
    // Simulate resume processing
    const resume = req.body;
    const processedResume = {
        name: resume.name,
        skills: resume.skills,
        experience: resume.experience,
        education: resume.education
    };
    res.json(processedResume);
};