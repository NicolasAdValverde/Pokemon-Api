const numRandom = () => {
    return Math.floor(Math.random() * 150);
};

let id = 1;

$("#sigPoke").on("click", () => {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (res) => {
        $(".pokemones").html(
            `
          <div class="card">
          <H1> ${res.name} </H1>
          <div class="card__img">
          <img src=${res.sprites.other.dream_world.front_default} alt=""/>
          </div>
          <h3> EXP: ${res.base_experience} </h3>
          <h3> ATAQUE: ${res.stats[1].base_stat} </h3>
          <h3> DEFENSA: ${res.stats[2].base_stat} </h3>
          </div>
        `
        );
    });
    id = numRandom();
});

$("#boton-busqueda").on("click", () => {
    const busqueda = $("#busqueda").val();
    $.get(`https://pokeapi.co/api/v2/pokemon/${busqueda}`, (res) => {
        $(".pokemones").html(
            `
          <H1> ${res.name} </H1>
          <img src=${res.sprites.other.dream_world.front_default} alt=""/>
          <h3> EXP: ${res.base_experience} </h3>
          <h3> ATAQUE: ${res.stats[1].base_stat} </h3>
          <h3> DEFENSA: ${res.stats[2].base_stat} </h3>
        `
        );
    });
});
