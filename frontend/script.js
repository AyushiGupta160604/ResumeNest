document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const data = {
        name: name,
        experience: experience,
        education: education,
        skills: skills
    };

    fetch('http://localhost:5000/api/resume/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const resumeOutput = document.getElementById('resume-output');
        resumeOutput.innerHTML = '<h2>Generated Resume</h2><pre>' + data.resume + '</pre>';
    })
    .catch(error => console.error('Error:', error));
});
