const input = document.querySelector('input');
const image = document.querySelector('img');
const form = document.querySelector('form');

const container = document.querySelector('#root')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;
    fetchData(value);
})
function fetchData(title) {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=c56acfa5`)
    .then(data =>   {
        return data.json()
    })
    .then(data =>{
        console.log(data)
        showData(data);
    })
}

function showData(movie) {
    container.style.display = 'flex'
    if (movie.Title) {
        container.innerHTML = `
        <div class="icon" onclick="hideData()">
            <i class="uil uil-times"></i>
         </div>
        
        <div class="image">
            <img src="${movie.Poster}" />
        </div>
        <div class="dicription">
            <h2 class="title">
                ${movie.Title}
            </h2>
            <p><b>The Actors are : </b>${movie.Actors}</p>
            <p><b>The language is : </b>${movie.Language}</p>
            <p><b>Plot of the film : </b>${movie.Plot}</p>
        </div>
        `;
    } else {
        container.innerHTML = `<p class="sorry">Sorry, We have no data about this Film</p>`
    }

}

function hideData() {
    container.style.display = 'none'
    input.value = '';
}