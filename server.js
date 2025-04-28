const express = require('express');
const app = express();
const resumeRoutes = require('./routes/resumeRoutes');
const jobRoutes = require('./routes/jobRoutes');

app.use('/api/resumes', resumeRoutes);
app.use('/api/jobs', jobRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});