document.addEventListener("DOMContentLoaded", function () {
  const btnPokemon = document.getElementById("btn-pokemon");

  if (btnPokemon) {
    btnPokemon.addEventListener("click", function () {
      window.location.href = "categories-pokemon.html";
    });
  }
});