window.onload = function() {
    // Check if the alert has already been shown
    if (!localStorage.getItem('alertShown')) {
        alert("Welcome to my portfolio!");
        // Set the flag in localStorage so the alert won't show again
        localStorage.setItem('alertShown', 'true');
    }
};

