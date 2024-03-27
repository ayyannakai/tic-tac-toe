let btn = document.querySelectorAll(".btn")
let heading = document.querySelector("h1")
let winHead = document.querySelector(".winner")
let newGames = document.querySelector(".newGame")
let restartGames = document.querySelector(".restartGame")
let turn0 = true
let count = 0

newGames.style.border = 'none'

let winAlgo = [
    [0,1,2],
    [1,4,7],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [2,5,8],
    [2,4,6],
    [6,7,8]

]

const showWinner = (winner)=>{
    
    setTimeout(() => {
        
        btn.forEach(element => {
           element.style.display = 'none' 
           heading.style.display = 'none'
           restartGames.style.display = 'none'
           
        });
        winHead.style.display = 'flex'
        winHead.innerText = `Winner is ${winner}`
        newGames.style.display = 'flex'


    }, 500);
    
}

newGames.addEventListener('click', (e) => {
   restart()
});


const disabled = ()=>{
    btn.forEach(el=>{
        el.disabled = true
    })
}

function enabled(){
    
    btn.forEach(el=>{
        el.disabled = false
    })
}

const newBox = ()=>{
    for (button of btn){
        button.innerText = ''
    }
}

const restart = ()=>{
    
    btn.forEach(button=>{
        button.style.display = 'flex'
        
    })
    heading.style.display = 'flex'
    heading.style.margin = 'auto'
    winHead.style.display = 'none'
    // winHead.innerText = `Winner is ${winner}`
    newGames.style.display = 'none'
    restartGames.style.display = 'flex'

    turn0 = true
    newBox()
    enabled()
    count = 0

}
restartGames.addEventListener('click',()=>{
    newBox()
    turn0 = true
    enabled()
    count = 0
    
   

})

const draw = ()=>{
    
    setTimeout(() => {
        
        btn.forEach(element => {
           element.style.display = 'none' 
           heading.style.display = 'none'
           restartGames.style.display = 'none'
           
        });
        winHead.style.display = 'flex'
        winHead.innerText = `It's a draw`
        newGames.style.display = 'flex'


    }, 500);
    
}


const checkWinner= ()=>{
    
    for (let pattern of winAlgo){
        const pos1Val  = btn[pattern[0]].innerText
        const pos2Val  = btn[pattern[1]].innerText
        const pos3Val  = btn[pattern[2]].innerText
        
        if (pos1Val!='' && pos2Val != '' && pos3Val != '' ){
            if (pos1Val===pos2Val  && pos2Val === pos3Val){
                showWinner(pos1Val)
                
                
            }
        }
        
        
    }
}

btn.forEach(button=>{
    button.addEventListener('click',()=>{
        
        if (turn0){
            button.innerText = 'X'
            turn0 = false
        }else{
            button.innerText = 'O'
            turn0 = true
        }
        
        button.disabled = true
        let isWinner = checkWinner()
        count++
        if (count===9 && !isWinner){
            draw()
        }
})
    
    
})


newGames.addEventListener('click',restart)