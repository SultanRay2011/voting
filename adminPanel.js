function clearVotes() {
    localStorage.removeItem('votes'); // Clear the stored votes
    document.getElementById('clearMessage').innerText = "Votes have been cleared!";
}
