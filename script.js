const container = document.querySelector('.container');

for(let i =0; i < 256; i++){
    let cells = document.createElement('div');
    cells.classList.add('grid-item');
    cells.textContent = (i + 1);

    cells.addEventListener('mouseover', function(e){
            e.target.classList.add('myColor')  
    })
    container.appendChild(cells)
}







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