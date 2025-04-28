import React, { useState } from 'react';
import UploadResume from './components/UploadResume';
import JobRecommendations from './components/JobRecommendations';

function App() {
    const [jobSuggestions, setJobSuggestions] = useState([]);

    return (
        <div>
            <h1>AI Resume Screening and Job Recommendation</h1>
            <UploadResume setJobSuggestions={setJobSuggestions} />
            <JobRecommendations jobSuggestions={jobSuggestions} />
        </div>
    );
}

export default App;