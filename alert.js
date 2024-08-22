function showAlert(type, title, message) {
    Swal.fire({
        icon: type,
        title: title,
        text: message,
        confirmButtonText: 'OK'
    });
}

// Example usage:
showAlert('success', 'Welcome!', 'You have successfully logged in.');
