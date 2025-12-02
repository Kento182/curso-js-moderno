const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción ${id}...`),
    crearPlaylist: list => console.log(`Creando playlist ${list}`),
    reproducirPlaylist: list => console.log(`Reproduciendo playlist ${list}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Intro';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('D&D');
reproductor.crearPlaylist('31 Minutos');
reproductor.reproducirPlaylist('D&D');