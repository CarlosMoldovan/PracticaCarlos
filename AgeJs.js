function verifyAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 18) {
        window.location.href = 'Home.html';
    } else {
        alert('You must be at least 18 years old to enter this site.');
    }
}
