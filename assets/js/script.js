const ele = document.getElementById("ele1");
const pintar = function(ele, color = 'green'){
    ele.style.backgroundColor = color;
}
ele.addEventListener('click', function(){
    pintar(ele, 'yellow');
})