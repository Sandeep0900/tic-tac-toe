let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#newset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true ; //playerX, playerO
 
const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
    if(turnO){  //playerO
        box.innerText="O";
        turnO = false;
    }else{   //playerX
        box.innerText="X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    
     });
   
});
const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
 msg.innerText = `congratulations, winner is ${winner}`;
 msgContainer.classList.remove("hide");
 resetBtn.classList.add("hide");

  disableBtn();
}
const checkWinner = () =>{
    for(let patten of winPatterns){
            let pos1val = boxes[patten[0]].innerText
            let pos2val = boxes[patten[1]].innerText
            let pos3val = boxes[patten[2]].innerText
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val == pos2val && pos2val == pos3val){
                    console.log("winner", pos1val);

                    showWinner(pos1val);
                }
            }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


