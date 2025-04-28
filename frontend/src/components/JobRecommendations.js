import React from 'react';

function JobRecommendations({ jobSuggestions }) {
    return (
        <div>
            <h2>Job Recommendations</h2>
            <ul>
                {jobSuggestions.map((job, index) => (
                    <li key={index}>{job.title} - {job.skills.join(', ')}</li>
                ))}
            </ul>
        </div>
    );
}

export default JobRecommendations;