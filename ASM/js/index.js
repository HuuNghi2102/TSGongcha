var arr = [`img/banner1.jpg`,`img/cover-web-Hồng-scaled.jpg`];
var i = 0;

function slideshow() {
    i++;
    if(i == arr.length){
        i = 0;
    }
    document.getElementById('slide-show').src = arr[i];
}
setInterval(slideshow, 3000);
/////////////////////////////////////
document.getElementById('title-menu').style.display = 'block';
function showtitle() {
    var title = document.getElementById('title-menu');
    if (title.style.display == 'none') {
        title.style.display = 'block';
    }else{
        title.style.display = 'none';
    }
}
document.getElementById('title-menu1').style.display = 'none';
function showtitle1() {
    var title = document.getElementById('title-menu1');
    if (title.style.display == 'none') {
        title.style.display = 'block';
    }else{
        title.style.display = 'none';
    }
}
document.getElementById('title-menu2').style.display = 'none';
function showtitle2() {
    var title = document.getElementById('title-menu2');
    if (title.style.display == 'none') {
        title.style.display = 'block';
    }else{
        title.style.display = 'none';
    }
}
document.getElementById('title-menu3').style.display = 'none';
function showtitle3() {
    var title = document.getElementById('title-menu3');
    if (title.style.display == 'none') {
        title.style.display = 'block';
    }else{
        title.style.display = 'none';
    }
}
document.getElementById('title-menu4').style.display = 'none';
function showtitle4() {
    var title = document.getElementById('title-menu4');
    if (title.style.display == 'none') {
        title.style.display = 'block';
    }else{
        title.style.display = 'none';
    }
}

////////////////////////////////////////////
function incrementQuantity() {
    let quantityInput = document.getElementById('quantity');
    quantityInput.value++;
}

function decrementQuantity() {
    let quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }else if (quantityInput.value  < 0) {
        alert('Số lượng sản phẩm không âm')
    }
}
///////////////////////////////////////////////////