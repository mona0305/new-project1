import React, { useState } from 'react';

function UploadResume({ setJobSuggestions }) {
    const [file, setFile] = useState(null);

    const handleFileUpload = (e) => {
        const formData = new FormData();
        formData.append('resume', file);
        // Make an API call to upload the resume
        fetch('/api/resumes/upload', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            // Get job suggestions based on the uploaded resume
            setJobSuggestions([{ title: "Software Engineer", skills: ["JavaScript", "React"] }]);
        });
    };

    return (
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleFileUpload}>Upload Resume</button>
        </div>
    );
}

export default UploadResume;