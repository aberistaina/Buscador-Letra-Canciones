
let boton = document.getElementById("boton")

boton.addEventListener("click", mostrarData)



function mostrarData(){

let artista = document.getElementById("artist")
let cancion = document.getElementById("song")    
let url = "https://lyrist.vercel.app/api/:" + cancion.value + "/:"  + artista.value 



fetch(url)
        .then(response => {
            if (response.status === 404){
                throw new Error("Cancion No Encontrada")
            }
            return response.json()
            
        })
        .then((data) => {
            fetch(`https://api.mymemory.translated.net/get?q=dog&langpair=en|es`)
                .then(response => response.json())
                .then(result => traducir(result.matches[1].translation))
                .catch(error => console.log('error', error));

            leerCancion(data.lyrics)
            
            
                
        })
        .catch((error) => {
            document.getElementById("block_content").innerText = error
        })

}

function leerCancion (datos) {
    document.getElementById("block_content").innerText = datos
    
}
function traducir(data){
    document.getElementById("block_content_traducido").innerText = data
}

