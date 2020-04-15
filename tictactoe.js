alert("press single click for x and double click for 0 ")
//restart game button
var restart = document.querySelector('#butn');

//grab all the squares
var squares = document.querySelectorAll('td');

//clear all squares
function clearBoard(){
  for(var i = 0; i < squares.length; i++){
    squares[i].innerHTML = '';
  }
}
restart.addEventListener('click', clearBoard);
//check the square marker
function changeMarker() {
  if(this.innerHTML === ''){
    this.innerHTML = 'x';
  }else if (this.innerHTML === 'x') {
    this.innerHTML = 'O';
  }else {
    this.innerHTML = '';
  }
}
//for loop to add event listener to all the squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
