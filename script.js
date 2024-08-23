let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count =0;

const winPattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
        
    ];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
       
        checkWinner();
        
       
    }

    );
}
);


    let checkWinner = () => {
        for (let pattern of winPattern) {

            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            
            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                   
                    showWinner(pos1);
                
                    disableBoxes();
                }
                else if(count === 9 && pos1 != pos2 && pos2 != pos3){
                    showDraw();
                    disableBoxes();


                }
                
            };
        };
    };
    const showWinner = (winner) => {
        msg.innerText = `Congratulation! Winner is ${winner} `;
        msgContainer.classList.remove("hide");
    };
    const showDraw =()=>{
   
        msg.innerText = `The GAME IS DRAW `;
        msgContainer.classList.remove("hide");
    
};

    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    
    };

    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
        count=0;
    }

    newBtn.addEventListener("click", resetGame) ;
    resetBtn.addEventListener("click", resetGame);
     
   
