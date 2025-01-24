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
  let rectangle = "";
  for (let i = 0; i < hauteur; i++) {
    rectangle += afficherEtoiles(largeur) + "\n";
  }
  return rectangle;
}
//console.log(afficherRectangle(5,5))
//console.log(afficherRectangle(3,4))

//1.3 Triangle d’étoiles
function afficherTriangleDroite(nbSlash) {
  let triangleDroite = "";
  for (let i = 0; i < nbSlash; i++) {
    triangleDroite += afficherEtoiles(i) + "\\" + "\n";
  }
  return triangleDroite;
}
//console.log(afficherTriangleDroite(5));

//1.4 Seconde moitié du sapin et espaces: coté gauche du triangle
function afficherTriangleGauche(nbSlash){
  let triangleGauche="";
  for (let i=0; i< nbSlash;i++){
    const espaceAvantSlash = " ".repeat(nbSlash-i)
    triangleGauche += (espaceAvantSlash + "/" +afficherEtoiles(i)+"\n")
  }
  return triangleGauche
}
console.log(afficherTriangleGauche(5))