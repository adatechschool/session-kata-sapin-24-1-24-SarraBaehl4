//Etape 1: Un triangle d’étoiles
//1.1 Une ligne d’étoiles:
function afficherEtoiles(nbEtoiles){
    const etoile = '*'
    return(`${etoile.repeat(nbEtoiles)}`)
}
//afficherEtoiles(2)
//afficherEtoiles(5)

//1.2 Carré d’étoiles
function afficherRectangle(hauteur, largeur){
    const rectangle = afficherEtoiles(largeur)
    //console.log(rectangle)
    for (let i=0; i< hauteur; i++){
    console.log(rectangle)
   }
}

afficherRectangle(5,5)