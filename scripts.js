const films = [
  { title: "Godzilla", year: 1954, era: "Showa", rating: 7.6, poster: "posters/godzilla-1954.jpg" },
  { title: "Godzilla Raids Again", year: 1955, era: "Showa", rating: 6.2, poster: "posters/godzilla-raids-again.jpg" },
  { title: "King Kong vs. Godzilla", year: 1962, era: "Showa", rating: 6.3, poster: "posters/king-kong-vs-godzilla.jpg" },
  { title: "Mothra vs. Godzilla", year: 1964, era: "Showa", rating: 7.0, poster: "posters/mothra-vs-godzilla.jpg" },
  { title: "Ghidorah, the Three-Headed Monster", year: 1964, era: "Showa", rating: 6.8, poster: "posters/ghidorah.jpg" },
  { title: "Invasion of Astro-Monster", year: 1965, era: "Showa", rating: 6.9, poster: "posters/invasion-astro-monster.jpg" },
  { title: "Ebirah, Horror of the Deep", year: 1966, era: "Showa", rating: 5.9, poster: "posters/ebirah.jpg" },
  { title: "Destroy All Monsters", year: 1968, era: "Showa", rating: 6.9, poster: "posters/destroy-all-monsters.jpg" },
  { title: "Godzilla vs. Hedorah", year: 1971, era: "Showa", rating: 6.3, poster: "posters/godzilla-vs-hedorah.jpg" },
  { title: "Terror of Mechagodzilla", year: 1975, era: "Showa", rating: 6.5, poster: "posters/terror-of-mechagodzilla.jpg" },
  { title: "The Return of Godzilla", year: 1984, era: "Heisei", rating: 6.3, poster: "posters/return-of-godzilla.jpg" },
  { title: "Godzilla vs. Biollante", year: 1989, era: "Heisei", rating: 6.9, poster: "posters/godzilla-vs-biollante.jpg" },
  { title: "Godzilla vs. King Ghidorah", year: 1991, era: "Heisei", rating: 7.1, poster: "posters/godzilla-vs-king-ghidorah.jpg" },
  { title: "Godzilla vs. Mothra", year: 1992, era: "Heisei", rating: 6.7, poster: "posters/godzilla-vs-mothra.jpg" },
  { title: "Godzilla vs. Mechagodzilla II", year: 1993, era: "Heisei", rating: 6.8, poster: "posters/godzilla-vs-mechagodzilla-2.jpg" },
  { title: "Godzilla vs. Destoroyah", year: 1995, era: "Heisei", rating: 7.4, poster: "posters/godzilla-vs-destoroyah.jpg" },
  { title: "Godzilla 2000: Millennium", year: 1999, era: "Millennium", rating: 6.3, poster: "posters/godzilla-2000.jpg" },
  { title: "Godzilla vs. Megaguirus", year: 2000, era: "Millennium", rating: 6.0, poster: "posters/godzilla-vs-megaguirus.jpg" },
  { title: "Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack", year: 2001, era: "Millennium", rating: 7.0, poster: "posters/gmk.jpg" },
  { title: "Godzilla Against Mechagodzilla", year: 2002, era: "Millennium", rating: 6.6, poster: "posters/godzilla-against-mechagodzilla.jpg" },
  { title: "Godzilla: Final Wars", year: 2004, era: "Millennium", rating: 6.5, poster: "posters/godzilla-final-wars.jpg" },
  { title: "Shin Godzilla", year: 2016, era: "Reiwa", rating: 7.4, poster: "posters/shin-godzilla.jpg" },
  { title: "Godzilla: Planet of the Monsters", year: 2017, era: "Reiwa", rating: 5.7, poster: "posters/godzilla-planet-of-monsters.jpg" },
  { title: "Godzilla (1998)", year: 1998, era: "Hollywood", rating: 5.4, poster: "posters/godzilla-1998.jpg" },
  { title: "Godzilla (2014)", year: 2014, era: "Monsterverse", rating: 6.4, poster: "posters/godzilla-2014.jpg" },
  { title: "Godzilla: King of the Monsters", year: 2019, era: "Monsterverse", rating: 6.0, poster: "posters/godzilla-king-of-monsters.jpg" },
  { title: "Godzilla vs. Kong", year: 2021, era: "Monsterverse", rating: 6.3, poster: "posters/godzilla-vs-kong.jpg" },
  { title: "Godzilla Minus One", year: 2023, era: "Reiwa", rating: 8.1, poster: "posters/godzilla-minus-one.jpg" },
  { title: "Godzilla x Kong: The New Empire", year: 2024, era: "Monsterverse", rating: 5.8, poster: "posters/godzilla-x-kong.jpg" },
];

let filteredFilms = [...films]; // This holds the current filtered/searched results

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filteredFilms.length; i++) {
    let film = filteredFilms[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, film);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, film) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = film.title;

  const cardImage = card.querySelector("img");
  cardImage.src = film.poster;
  cardImage.alt = film.title + " Poster";

  const cardDesc = card.querySelector("p");
  cardDesc.textContent = `${film.year} · ${film.era} · ⭐ ${film.rating}`;

  cardImage.onerror = function() {
  this.src = "https://placehold.co/200x280/1a1a1a/00ff88?text=No+Poster";};
}

function handleSearch() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const eraFilter = document.getElementById("era-filter").value;

  filteredFilms = films.filter(film => {
    const matchesSearch = film.title.toLowerCase().includes(query);
    const matchesEra = eraFilter === "All" || film.era === eraFilter;
    return matchesSearch && matchesEra;
  });

  showCards();
}

function handleFilter() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const eraFilter = document.getElementById("era-filter").value;

  filteredFilms = films.filter(film => {
    const matchesSearch = film.title.toLowerCase().includes(query);
    const matchesEra = eraFilter === "All" || film.era === eraFilter;
    return matchesSearch && matchesEra;
  });

  showCards();
}

document.addEventListener("DOMContentLoaded", showCards);