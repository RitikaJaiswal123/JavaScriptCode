function validateForm() {
    const input = document.getElementById('name').value;
    if (input.trim() === '') {
    alert('Name cannot be empty!');
    return false;
    }
    return true;
    }