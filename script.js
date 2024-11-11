document.getElementById('resumeForm').addEventListener('input', updateResume);

function updateResume() {
    document.getElementById('displayName').textContent = document.getElementById('name').value;
    document.getElementById('displayEmail').textContent = document.getElementById('email').value;
    document.getElementById('displayPhone').textContent = document.getElementById('phone').value;
    document.getElementById('displayExperience').textContent = document.getElementById('experience').value;
    document.getElementById('displaySkills').textContent = document.getElementById('skills').value;
}

document.getElementById('generateResume').addEventListener('click', function() {
    document.getElementById('resumeDisplay').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('downloadResume').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Resume", 10, 10);
    doc.text("Name: " + document.getElementById('displayName').textContent, 10, 20);
    doc.text("Email: " + document.getElementById('displayEmail').textContent, 10, 30);
    doc.text("Phone: " + document.getElementById('displayPhone').textContent, 10, 40);
    doc.text("Experience: " + document.getElementById('displayExperience').textContent, 10, 50);
    doc.text("Skills: " + document.getElementById('displaySkills').textContent, 10, 60);

    doc.save("Resume.pdf");
});
