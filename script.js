function submitVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (!selectedCandidate) {
        alert("Please select a candidate.");
        return;
    }

    const vote = selectedCandidate.value;
    let votes = JSON.parse(localStorage.getItem('votes')) || { "Candidate A": 0, "Candidate B": 0 };

    // Increment the selected candidate's vote count
    votes[vote]++;

    // Save updated votes to local storage
    localStorage.setItem('votes', JSON.stringify(votes));

    document.getElementById('responseMessage').innerText = `${vote} has been voted! Current vote count for Candidate A: ${votes["Candidate A"]}, Candidate B: ${votes["Candidate B"]}`;
}
