let game = new Game();

let startButton = document.getElementById('start_button');
startButton.addEventListener('click', () => game.start());

//В ТЗ такой кнопки вроде нет, но без неё как то тупо
let defeatButton = document.getElementById('defeat_button');
defeatButton.addEventListener('click', () = game.stop());