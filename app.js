let user_score = 0
let comp_score = 0

let user_value = document.querySelector("#user_score")
let comp_value = document.querySelector("#comp_score")


let msg_area = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice")


const comp_choice = () =>{
    const options = ["rock","paper","scissors"]
    let random_choice = Math.floor(Math.random()*3)

    return options[random_choice]
}

const score_calculate = (user_win) =>{
    if (user_win){
        user_score+=1;
        user_value.innerText = user_score
    }else{comp_score+=1;comp_value.innerText = comp_score}
}


const show_win = (user_win, user_choice, comp_choice) =>{
    if (user_win){
        msg_area.innerText = `You Win! ${user_choice} beats ${comp_choice}`;
        msg_area.style.background = "green"
    }else{
        msg_area.innerText = `You Lose! ${user_choice} lost to ${comp_choice}`;
        msg_area.style.background = "red"
    }
}

const play_game = (user_choice) =>{ 
    const comp_played = comp_choice()

    if (user_choice === comp_played){
        msg_area.innerText = "Game is draw!Try again";
        msg_area.style.background = "black"
    }else{
        let userWin = true;
        if (user_choice==="rock"){
            userWin = comp_played === "paper" ? false:true;
        }else if (user_choice==="paper"){
            userWin = comp_played === "scissors" ? false:true;
        }else if (user_choice==="scissors"){
            userWin = comp_played === "rock" ? false:true;
        }

        show_win(userWin, user_choice, comp_played)
        score_calculate(userWin)
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play_game(user_choice);
    });
});
