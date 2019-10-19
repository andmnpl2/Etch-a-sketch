
/* Create a webpage with a 16x16 grid of square divs*/
  const container = document.getElementById("container");
  let sqrsSide = 16;

  function createGrid() {
    for (let i = 0; i < (sqrsSide*sqrsSide); i++) {
      const cell = document.createElement('div');
      cell.setAttribute('class','cell');
      cell.setAttribute('id', 'cell');
      container.appendChild(cell);
    }
    let cell = document.getElementsByClassName('cell');
      
    /* Set up a “hover” effect */
    for ( let i = 0; i < cell.length; i++) {
      cell[i].addEventListener('mouseover', function changeColor() {

        cell[i].style.backgroundColor = randomColor();
        })
    }
  }
  createGrid();

  /* Random Color */

    function randomColor() {
      let x = Math.floor(Math.random()*255);
      let y = Math.floor(Math.random()*255);
      let z = Math.floor(Math.random()*255);

      return 'rgb('+ x + ',' + y + ',' + z +')';
    }

/*   Add a button to the top of the screen which will clear the current grid and send the user
  a popup asking for how many squares per side to make the new grid */

let clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', function clear() {  

  let contain = document.getElementById('container')
  while(contain.firstChild){
    contain.removeChild(contain.firstChild);
  }

  let gridSize = prompt('How many squares per side to make the new grid? Max. 25.');
  sqrsSide = parseInt(gridSize);
  if (sqrsSide > 30 ) {
    alert('Sorry! Max. 30 squares per side.')
    sqrsSide = 30;
  }
  document.documentElement.style.setProperty('--grid-rows', sqrsSide);
  document.documentElement.style.setProperty('--grid-cols', sqrsSide);
  createGrid(sqrsSide);
  
})


