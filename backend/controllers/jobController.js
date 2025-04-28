const Job = require('../models/jobModel');

exports.getJobs = (req, res) => {
    // Simulating fetching jobs from the database
    const jobs = [
        { title: "Software Engineer", skills: ["JavaScript", "React", "Node.js"], location: "New York" },
        { title: "Data Scientist", skills: ["Python", "Machine Learning", "SQL"], location: "San Francisco" }
    ];
    res.json(jobs);
};