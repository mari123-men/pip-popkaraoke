//coneccion con html (seleccionar el enlace)
const songForm = document.getElementById("song_form");
const playList = document.getElementById("play_list");

// Función para agrgar una canción a la lista
function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li')
    listSong.innerHTML = `
            <strong> ${songName} </strong>
            -${artistName}
            <a href="${songUrl}" target = "_blank">Reproducir</a>
            <botton class = "delete-btn" >Eliminar</button>
        `;

    //Agragar al html
    playList.appendChild(listSong);
}

//Manejo de envio de formulario (Eventos)

songForm.addEventListener('submit',(event) => {
    event.preventDefault();

    //obtener el formulario
    const songName = document.getElementById("song_form").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl= document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);

    songForm.request();
})