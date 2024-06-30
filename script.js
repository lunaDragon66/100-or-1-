let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = document.getElementById('guessInput').value;
    attempts++;
    
    if (userGuess == randomNumber) {
        document.getElementById('resultMessage').textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        document.getElementById('guessButton').disabled = true;
    } else if (userGuess > randomNumber) {
        document.getElementById('resultMessage').textContent = 'Ваше число слишком большое!';
    } else {
        document.getElementById('resultMessage').textContent = 'Ваше число слишком маленькое!';
    }
});
