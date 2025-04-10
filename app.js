let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");

// defining computer can choose from three choices

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};


const gameDraw= () =>{
  console.log("game was drawn.");
  msg.innerText = "game was drawn. Play again."
  msg.style.backgroundColor = "#081b31"
};


const playGame = (userChoice) => {
  console.log("user choice= ", userChoice);

  const comChoice = genCompChoice();
  console.log("computer choice= ", comChoice);



  if(userChoice===comChoice){
    gameDraw();
  }
  else{
    let userWin = true;
    if (userChoice==="rock") {
      userWin = comChoice=== "paper" ? false: true;
    }
    else if(userChoice==="paper"){
      userWin= comChoice === "scissors" ? false : true;
    }
    else{
      userWin= comChoice=== "rock" ? false:true;
    }

  


const showWinner=(userWin, userChoice,comChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You Win!!!");
    msg.innerText = `You Win!! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green"
  }
  else{
    console.log("you lost");
    comScore++;
    comScorePara.innerText=comScore;
    msg.innerText = `You lost. ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"
}
}
showWinner(userWin,userChoice,comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});