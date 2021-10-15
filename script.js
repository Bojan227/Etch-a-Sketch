const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');
const newGrid = document.querySelector('.makeGrid');



newGrid.addEventListener('click', makeGrid);

function makeGrid(){
      
       
    for(let i =0; i < 256; i++){
        let divs = document.createElement('div');
        divs.classList.add('items');
        divs.textContent = (i + 1);
    
        divs.addEventListener('mouseover', function(e){
                e.target.classList.add('myColor')  
        })
        container.appendChild(divs) 
}
        
}


clearButton.addEventListener('click', function(){
        container.innerHTML = ''
});



// function makeRows(rows, cols) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     for (c = 0; c < (rows * cols); c++) {
//       let cell = document.createElement("div");
//       cell.innerText = (c + 1);
//       cell.addEventListener('mouseover', function(){
//         cell.classList.add('backgroundColor');

//       })
        
//       container.appendChild(cell).className = "grid-item";
//     };
//   };

//   makeRows(16, 16);