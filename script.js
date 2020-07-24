const getComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3))
  if (randomNumber === 0){
    return 'Rock';
  }
  else if (randomNumber === 1){
    return 'Paper';
  }
  else if (randomNumber === 2){
  	return 'Scissor';
  }
}
// console.log(getComputerChoice());
function rock(){
	var message = document.getElementById('computer-text');
	var message1 = document.getElementById('computertext1');
	if(getComputerChoice() == "Rock") {
		message.innerHTML = "The game is a tie!"
		message1.innerHTML = "No one wins hahaha!!!"
		// console.log('The game is a tie!')
		return false;
	}else if(getComputerChoice() == "Paper") {
		message.innerHTML = "You Lose"
		message1.innerHTML = "I'm a Paper"
		// console.log('You Lose')
		return false;
	}else{
		message.innerHTML = "You Win"
		message1.innerHTML = "I'm just a Scissor"
		// console.log('You Win')
		return false;
	}
}
function paper(){
	var message = document.getElementById('computer-text');
	var message1 = document.getElementById('computertext1');
	if(getComputerChoice() == "Rock") {
		// console.log('You Win!')
		message.innerHTML = "You Win"
		message1.innerHTML = "I'm just a Rock"
		console.log(message1)
		return false;
	}else if(getComputerChoice() == "Paper") {
		message.innerHTML = "The game is a tie!"
		message1.innerHTML = "No one wins hahaha!!!"
		// console.log('The game is a tie!')
		return false;
	}else{
		message.innerHTML = "You Lose"
		message1.innerHTML = "I'm a Scissors"
		// console.log('You Lose')
		return false;
	}
}
function scissors(){
	var message = document.getElementById('computer-text');
	var message1 = document.getElementById('computertext1');
	if(getComputerChoice() == "Rock") {
		message.innerHTML = "You Lose"
		message1.innerHTML = "I'm a Rock"
		// console.log('You Lose')
		return false;
	}else if(getComputerChoice() == "Paper") {
		message.innerHTML = "You Win"
		message1.innerHTML = "I'm just a cute Paper"
		// console.log('You Win')
		return false;
	}else{
		message.innerHTML = "The game is a tie!"
		message1.innerHTML = "No one wins hahaha!!!"
		// console.log('The game is a tie!')
		return false;
	}

}	