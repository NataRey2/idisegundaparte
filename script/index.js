function TraerCaracteres(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data=>{
        done(data)
    });
}

TraerCaracteres(data=>{
    data.results.forEach(personaje =>{
        const article = document.createRange().createContextualFragment(`
            <article>
            <div class= "imagen-container">
                <img src="${personaje.image}" alt="foto rick and morty">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
            <p>${personaje.species}</p>
            <p>${personaje.gender}</p>
        </article>`);

            // ahora para mostrarlo
            const main = document.querySelector("main");


            main.append(article);

    });
});