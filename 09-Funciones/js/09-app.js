const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    borrar: function(id){
    console.log(`Borrando canción ${id}...`);
    },
    crearPlaylist: function(list){
        console.log(`Creando playlist ${list}`);
    },
    reproducirPlaylist: function(list){
        console.log(`Reproduciendo playlist ${list}`);
    }
}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('D&D');
reproductor.crearPlaylist('31 Minutos');
reproductor.reproducirPlaylist('D&D');