const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')
var newcolor = 'white';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        return newcolor = 'gold';
        /* Cambiar a color 1 */
    } else if (event.key === 's') {
        return newcolor = 'silver';
        /* Cambiar a color 2 */

    } else if (event.key === 'd') {
        return newcolor = 'blueviolet';
        /* Cambiar a color 2 */
    }

})


function cambiarColor(elementId) {
    elemento = document.querySelector('#' + elementId);
    elemento.style.backgroundColor = newcolor;
}

block1.addEventListener('click', function () {
    cambiarColor('block1');
})

block2.addEventListener('click', function () {
    cambiarColor('block2');
})

block3.addEventListener('click', function () {
    cambiarColor('block3');
})

block4.addEventListener('click', function () {
    cambiarColor('block4');
})


