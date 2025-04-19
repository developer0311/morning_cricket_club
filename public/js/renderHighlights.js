// renderHighlights.js
document.addEventListener("DOMContentLoaded", () => {
  const highlightContainer = document.getElementById("highlightContainer");

  // Loop through the highlights object
  for (const key in highlights) {
    if (highlights.hasOwnProperty(key)) {
      const highlight = highlights[key];
      const highlightCard = document.createElement("div");
      highlightCard.classList.add("card", "mb-4", "highlight-card", "shadow");

      // Card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Title for each section
      const title = document.createElement("h5");
      title.classList.add("card-title", "highlight-title");
      title.innerText = key;

      cardBody.appendChild(title);

      // Champion team info
      if (key === "🎊 Champion Team Name 🎊") {
        const teamInfo = document.createElement("p");
        teamInfo.classList.add("card-text");
        teamInfo.innerHTML = `Champion: ${highlight.name}`;
        cardBody.appendChild(teamInfo);
      } else if (highlight.players) {
        // Display for players list (team prizes)
        const playerList = document.createElement("ul");
        playerList.classList.add("list-group", "list-group-flush");
        highlight.players.forEach((player) => {
          const listItem = document.createElement("li");
          listItem.classList.add("list-group-item");
          listItem.innerText = player;
          playerList.appendChild(listItem);
        });
        cardBody.appendChild(playerList);
      } else {
        // Display individual player awards
        const playerName = document.createElement("h6");
        playerName.classList.add("card-subtitle", "mb-2", "text-muted");
        playerName.innerText = `Player: ${highlight.name}`;

        const teamName = document.createElement("p");
        teamName.classList.add("card-text");
        teamName.innerHTML = `Team: ${highlight.team || "N/A"}`;

        const playerImage = document.createElement("img");
        playerImage.src = highlight.image || "";
        playerImage.classList.add("img-fluid", "rounded-circle", "mb-2");

        cardBody.appendChild(playerName);
        cardBody.appendChild(teamName);
        cardBody.appendChild(playerImage);
      }

      highlightCard.appendChild(cardBody);
      highlightContainer.appendChild(highlightCard);
    }
  }
});
