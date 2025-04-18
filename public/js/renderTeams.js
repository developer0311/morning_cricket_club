const teamsContainer = document.getElementById("teamsContainer");

Object.keys(teams).forEach((team, index) => {
  const players = teams[team];
  const teamId = `carouselTeam${index}`;
  const cards = players
    .map(
      (player) => `
    <div class="col">
      <div class="card text-center">
      <div class="card-img">
        <img src="${player.image}" class="card-img-top" alt="${player.name}">
      </div>
        <div class="card-body">
          <h5 class="card-title">${player.name}</h5>
        </div>
      </div>
    </div>`
    )
    .join("");

  teamsContainer.innerHTML += `
    <h4 class="mt-5">${team}</h4>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
      ${cards}
    </div>
    <hr>`;
});
