function produit(x, y) {
  return x * y;
}

function afficheImg(src) {
  document.getElementById('image').innerHTML = '<img src="'+src+'" alt="papillon">';
}

var a = parseInt(prompt('entrer un nombre :'));
var b = parseInt(prompt('entrer un multiplicateur :'));

afficheImg('assets/img/papillon.jpg');

document.getElementById('cube').innerHTML = 'Le cube de ' + a;
document.getElementById('cuberesult').innerHTML = ' est égal à ' + (a*a*a);

document.getElementById('produit').innerHTML = 'Le produit de ' + a + ' x ' + b;
document.getElementById('produitresult').innerHTML = ' est égal à ' + produit(a, b);

