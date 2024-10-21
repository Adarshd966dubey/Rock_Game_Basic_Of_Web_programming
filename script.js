let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
     const options = ["Rock" , "Paper" , "Scissor"];
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}


const drawGame = () => {
    msg.innerText = "Game was draw play again !";
    msg.style.backgroundColor = "#081b31 ";
}

const showWinner = (userWin , userChoice, compChoice) => {
   if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green ";
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red ";
   }
}
// to take input from computer (random input)
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true ;
    if(userChoice === "Rock"){
        userWin = compChoice === "Paper" ? false : true ;
        
        
    }else if (userChoice === "Paper"){
        userWin = compChoice === "Scissor" ? false: true;
    
    }else{
        userWin = compChoice ==="Rock" ? false: true;
    }
    showWinner(userWin , userChoice , compChoice);

}

};
// In this peace of code here we select select indivisible choices from the div means we get the information about which one choice is clicked 
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
