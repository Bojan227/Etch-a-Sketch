const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');
const newGrid = document.querySelector('.makeGrid');



newGrid.addEventListener('click', makeGrid);

function makeGrid(){
    let input = prompt('Enter your squares here?', '')
    let num = parseInt(input); 

    

    for(let i =0; i < num*num; i++){
        let divs = document.createElement('div');
        divs.classList.add('items');
        
    
        divs.addEventListener('mouseover', function(e){
                e.target.classList.add('myColor')  
        })
        container.appendChild(divs) 
}
        
}
clearButton.addEventListener('click', function(){
        container.innerHTML = ''
});



