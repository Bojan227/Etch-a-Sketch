const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');
const newGrid = document.querySelector('.makeGrid');
const randomButton = document.querySelector('.random');
const redButton = document.querySelector('.red');
const eraserButton = document.querySelector('.eraser')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')

function randomRgb(){
        let x = Math.round(0xffffff * Math.random());
        let r = x >> 16;
        var g = x >> 8 & 255;
        var b = x & 255;
        return ('rgb(' + r + ', ' + g + ', ' + b + ')')
}

function makeGrid(){
    let input = prompt('Enter your squares here?', '')
    let num = parseInt(input); 
        if(num < 0 || num > 100 ){
                alert("Please enter number between 0 and 100");
        }else{
                container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
                container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
                
                for(let i =0; i < num*num; i++){
                    let divs = document.createElement('div');
                    divs.classList.add('items');

                    redButton.addEventListener('click', function(){
                            divs.addEventListener('mouseover', function(){
                                    divs.style.backgroundColor = 'red';
                            })
                    })
                    blueButton.addEventListener('click', function(){
                        divs.addEventListener('mouseover', function(){
                                divs.style.backgroundColor = 'blue';
                        })
                })
                    yellowButton.addEventListener('click', function(){
                        divs.addEventListener('mouseover', function(){
                                divs.style.backgroundColor = 'yellow';
                        })
                })

                    eraserButton.addEventListener('click', function(){
                        divs.addEventListener('mouseover', function(){
                                divs.style.backgroundColor = 'white';
                        })
                })

                    randomButton.addEventListener('click', function(){
                        divs.addEventListener('mouseover', function(){
                        divs.style.backgroundColor = randomRgb();
                    })
                    
                    })
                    container.appendChild(divs) 
            }
        }      
}

clearButton.addEventListener('click', function(){
        container.innerHTML = ''
});

newGrid.addEventListener('click', makeGrid);
