const films = [
  { title: "Godzilla", year: 1954, era: "Showa", rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gojira_1954_film_poster.jpg/220px-Gojira_1954_film_poster.jpg" },
  { title: "Godzilla Raids Again", year: 1955, era: "Showa", rating: 6.2, poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godzilla_raids_again_poster.jpg/220px-Godzilla_raids_again_poster.jpg" },
  { title: "King Kong vs. Godzilla", year: 1962, era: "Showa", rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/King_Kong_vs._Godzilla_poster.jpg/220px-King_Kong_vs._Godzilla_poster.jpg" },
  { title: "Mothra vs. Godzilla", year: 1964, era: "Showa", rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/Mothra_vs_Godzilla_poster.jpg" },
  { title: "Ghidorah, the Three-Headed Monster", year: 1964, era: "Showa", rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/en/5/5b/Ghidorah_the_Three-Headed_Monster_poster.jpg" },
  { title: "Invasion of Astro-Monster", year: 1965, era: "Showa", rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Invasion_of_Astro-Monster_poster.jpg" },
  { title: "Ebirah, Horror of the Deep", year: 1966, era: "Showa", rating: 5.9, poster: "https://upload.wikimedia.org/wikipedia/en/9/9e/Godzilla_vs_the_sea_monster_poster.jpg" },
  { title: "Destroy All Monsters", year: 1968, era: "Showa", rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/en/b/b9/Destroy_all_monsters_poster.jpg" },
  { title: "Godzilla vs. Hedorah", year: 1971, era: "Showa", rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/Godzilla_vs_Hedorah_poster.jpg" },
  { title: "Terror of Mechagodzilla", year: 1975, era: "Showa", rating: 6.5, poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Terror_of_mechagodzilla_poster.jpg" },
  { title: "The Return of Godzilla", year: 1984, era: "Heisei", rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Return_of_Godzilla_poster.jpg" },
  { title: "Godzilla vs. Biollante", year: 1989, era: "Heisei", rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/en/2/28/Godzilla_vs._Biollante_poster.jpg" },
  { title: "Godzilla vs. King Ghidorah", year: 1991, era: "Heisei", rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Godzilla_vs_King_Ghidorah_poster.jpg" },
  { title: "Godzilla vs. Mothra", year: 1992, era: "Heisei", rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/en/b/b7/Godzilla_and_Mothra_The_Battle_for_Earth.jpg" },
  { title: "Godzilla vs. Mechagodzilla II", year: 1993, era: "Heisei", rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/en/2/2d/Godzilla_vs_Mechagodzilla_2_poster.jpg" },
  { title: "Godzilla vs. Destoroyah", year: 1995, era: "Heisei", rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/en/9/92/Godzilla_vs_Destoroyah_poster.jpg" },
  { title: "Godzilla 2000: Millennium", year: 1999, era: "Millennium", rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Godzilla_2000_poster.jpg" },
  { title: "Godzilla vs. Megaguirus", year: 2000, era: "Millennium", rating: 6.0, poster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Godzilla_vs_Megaguirus_poster.jpg" },
  { title: "Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack", year: 2001, era: "Millennium", rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/en/3/32/GMKposter.jpg" },
  { title: "Godzilla Against Mechagodzilla", year: 2002, era: "Millennium", rating: 6.6, poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godzilla_Against_MechaGodzilla_poster.jpg" },
  { title: "Godzilla: Final Wars", year: 2004, era: "Millennium", rating: 6.5, poster: "https://upload.wikimedia.org/wikipedia/en/f/f4/Godzilla_Final_Wars_poster.jpg" },
  { title: "Shin Godzilla", year: 2016, era: "Reiwa", rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Shin_Godzilla_poster.jpg" },
  { title: "Godzilla: Planet of the Monsters", year: 2017, era: "Reiwa", rating: 5.7, poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Godzilla_Planet_of_the_Monsters_poster.jpg" },
  { title: "Godzilla (1998)", year: 1998, era: "Hollywood", rating: 5.4, poster: "https://upload.wikimedia.org/wikipedia/en/6/6b/Godzilla_1998_poster.jpg" },
  { title: "Godzilla (2014)", year: 2014, era: "Monsterverse", rating: 6.4, poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Godzilla_2014_film_poster.jpg" },
  { title: "Godzilla: King of the Monsters", year: 2019, era: "Monsterverse", rating: 6.0, poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/Godzilla_King_of_the_Monsters_%282019%29_poster.jpg" },
  { title: "Godzilla vs. Kong", year: 2021, era: "Monsterverse", rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/en/e/e5/Godzilla_vs._Kong_poster.jpg" },
  { title: "Godzilla Minus One", year: 2023, era: "Reiwa", rating: 8.1, poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Godzilla_Minus_One_poster.jpg" },
  { title: "Godzilla x Kong: The New Empire", year: 2024, era: "Monsterverse", rating: 5.8, poster: "https://upload.wikimedia.org/wikipedia/en/3/37/Godzilla_x_Kong_-_The_New_Empire_poster.jpg" },
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
}