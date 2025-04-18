const scoreBody = document.getElementById('scoreboardBody');

matches.forEach(match => {
  const scoreText = match.scores.length ? `${match.scores[0]} / ${match.scores[1]}` : 'Not yet';
  const wonByText = match.won_by.length ? `${match.won_by[1]} ${match.won_by[0]}` : 'N/A';
  const winnerText = match.winner || 'Not decided';

  scoreBody.innerHTML += `
    <tr>
      <td>${match.match_no}</td>
      <td>${match.teams.join(" vs ")}</td>
      <td>${scoreText}</td>
      <td>${winnerText}</td>
      <td>${wonByText}</td>
      <td>${match.net_run_rate}</td>
    </tr>
  `;
});
