//Etape 1: Un triangle d’étoiles
//1.1 Une ligne d’étoiles:
function afficherEtoiles(nbEtoiles) {
  const etoile = "*";
  return `${etoile.repeat(nbEtoiles)}`;
}
//afficherEtoiles(2)
//afficherEtoiles(5)

//1.2 Carré d’étoiles
function afficherRectangle(hauteur, largeur) {
  let rectangle ='';
  for (let i =0; i< hauteur;i++){
  rectangle += (afficherEtoiles(largeur) + "\n");
  }
  return rectangle;
}
//console.log(afficherRectangle(5,5))
//console.log(afficherRectangle(3,4))

//1.3 Triangle d’étoiles
function afficherTriangleDroite(nbslash) {
  let triangleDroite= ''
  for (let i = 0; i < nbslash; i++) {
    triangleDroite += (afficherEtoiles(i) + "\\" +'\n')
  }
  return triangleDroite

}
console.log(afficherTriangleDroite(5));
