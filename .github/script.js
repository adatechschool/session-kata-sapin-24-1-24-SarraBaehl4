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
    const rectangle = afficherEtoiles(largeur)+ '\n'
    //console.log(rectangle)
    return rectangle.repeat(hauteur)
   
}
//console.log(afficherRectangle(5,5))
//console.log(afficherRectangle(3,4))

//1.3 Triangle d’étoiles
function afficherTriangleDroite(nbslash){
    console.log(afficherRectangle)

}