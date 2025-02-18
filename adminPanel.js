function clearVotes() {
    localStorage.removeItem('votes'); // Clear the stored votes
    document.getElementById('clearMessage').innerText = "Votes have been cleared!";
    
    // Show the 'Go Back to Home' button after clearing votes
    document.getElementById('homeButton').style.display = 'block';
}
