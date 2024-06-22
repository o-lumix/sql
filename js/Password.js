function validatePassword() {
    const passwordInput = document.getElementById('password');
    const warningText = document.getElementById('passwordWarning');
    
    if (passwordInput.value.includes('=')) {
        warningText.style.display = 'block';
    } else {
        warningText.style.display = 'none';
    }
}