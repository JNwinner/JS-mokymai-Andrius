// let joke = document.getElementById('joke');
// let deletContent = document.getElementById('delete')

// async function fetchJokes() {
//     try {
//         const response = await fetch('https://icanhazdadjoke.com/', {
//             headers: { Accept: 'application/json' }

//         })
//         const joke = await response.json()
//         return joke
//     } catch (e) {
//         throw (e)
//     }
// }




// joke.addEventListener('click', (e) => {

//     fetchJokes()
//         .then(data => {

//             const jokeelement = document.createElement('p');
//             jokeelement.textContent = data.joke;
//             document.querySelector('body').appendChild(jokeelement);
//         })
//         .catch(e => console.log('Error: Failed to fetch joke', e))

// }) 

// deletContent.addEventListener('click', (e) => {
//     document.querySelectorAll('p').forEach(p => p.remove())
//     // let content = document.querySelector('p')
//     // content.remove()
// })







// async function fetchMovie() {
//     const response  = await  fetch('https://api.tvmaze.com/search/shows?q=spiderman')
//     const data  = await response.json()
//     console.log(data[0])

//     let year = data[0].show.premiered
//     document.getElementById('movie').innerHTML = `
//     <img src="${data[0].show.image.medium}" alt="${data[0].show.name}">
//     <h3>${data[0].show.name} (${year})</h3>
//     <p>Genres: ${data[0].show.genres}</p>
//     ${data[0].show.summary}
//     `
// }


// fetchMovie()



// async function fetchMovie() {
//     const response = await fetch('https://api.tvmaze.com/search/shows?q=spiderman')
//     const data =  await response.json()
//     return data
// }

// fetchMovie()
// .then(data => {
//     const moviesContainer = document.createElement('div')
//     moviesContainer.className = 'movies-container'
//     console.log(moviesContainer)
//     console.log(data)

//     for(const item of data) {
//         const title = item.show.name;
//         const year = item.show.premiered.slice(0, -6);
//         const imgLink = item.show.image.medium;
//         const genres = item.show.genres;
//         const sumary = item.show.summary;

//         const movieDiv = document.createElement('div')
//         movieDiv.className = 'movie'
//         movieDiv.innerHTML = `
//                 <img src="${imgLink}" alt="${title}">
//                 <h3>${title} (${year})</h3>
//                 <p>Genres: ${genres.join(', ')}</p>
//                 <p>${sumary}</p>
//         `
//         moviesContainer.appendChild(movieDiv)
//     }
//     document.body.appendChild(moviesContainer)
// })
// .catch(err => console.log(err))




async function fetchMovie(query) {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    return data;
}

function displayMovies(data) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    for (const item of data) {
        const title = item.show.name;
        const year = item.show.premiered ? item.show.premiered.slice(0, 4) : 'N/A';
        const imgLink = item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image';
        const genres = item.show.genres.join(', ') || 'N/A';
        const summary = item.show.summary ? item.show.summary.replace(/<[^>]*>/g, '') : 'No summary available';

        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${imgLink}" alt="${title}">
            <h3>${title} (${year})</h3>
            <p><strong>Genres:</strong> ${genres}</p>
            <p>${summary}</p>
        `;
        moviesContainer.appendChild(movieDiv);
    }
}

document.querySelector('.search button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar').value;
    fetchMovie(query)
        .then(data => displayMovies(data))
        .catch(err => console.log(err));
});

document.querySelector('.search-bar').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('.search button').click();
    }
});

