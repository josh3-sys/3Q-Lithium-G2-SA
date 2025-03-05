let wordArray = ['brick', 'chair', 'table', 'block', 'brush', 'watch', 'knife', 'radio', 'piano', 'towel', 'shirt', 'phone', 'slave', 'plate', 'shelf', 'scarf', 'coins', 'stove', 'plant', 'grate', 'chain', 'anvil', 'apron', 'audio', 'bacon', 'bowls', 'cabin', 'cable', 'candy', 'ivory', 'mango', 'onion', 'plane', 'truck', 'watch', 'wheat', 'yeast', 'yacht', 'twigs', 'topaz', 'tooth', 'tires', 'spice', 'space', 'siren', 'prism', 'paint', 'novel', 'mouse', 'niger'];
let wordToGuess;
let health = 5;
let score = 0;

function generateRandWord(){
    let randomNum = Math.trunc((Math.random() * 50) + 1);
    wordToGuess = wordArray[randomNum].toLowerCase();
}

function gameSetup(){
    generateRandWord();
    document.getElementById('lives').innerHTML = health;
    
}

function updateHangman(){
    if (health == 4){
        document.getElementById('head').style.display = 'block';
        document.getElementById('torso').style.display = 'block';
    } else if (health == 3){
        document.getElementById('arm-1').style.display = 'block';
    } else if (health == 2){
        document.getElementById('arm-2').style.display = 'block';
    } else if (health == 1){
        document.getElementById('foot-1').style.display = 'block';
    } else if (health == 0){
        document.getElementById('foot-2').style.display = 'block';
        alert('Game Over :P the word was ' + wordToGuess +'.');
        health = -1;
    }
}

function playHangman(){
    if (score == 5){
        alert('You have already guessed the word. Reload the page to play again.');
        return;
    } else if (health < 0){
        alert('You died. Reload the page to play again.');
        return;
    }

    let inputLetter = prompt("Enter a letter: ").toLowerCase();
    if (inputLetter.length != 1){
        alert('Invalid input. Please enter a letter and try again.');
    }

    if (wordToGuess.indexOf(inputLetter) < 0 ){
        alert('Wrong guess!');
        health--;
        updateHangman();
        document.getElementById('lives').innerHTML = health;
    } else if (wordToGuess.indexOf(inputLetter) >= 0){
        if (document.getElementById('s-' + wordToGuess.indexOf(inputLetter)).innerHTML == inputLetter){
            alert('You repeated the letter. Wrong guess!');
            health--;
            updateHangman();
            document.getElementById('lives').innerHTML = health;
        } else {
            document.getElementById('s-' + wordToGuess.indexOf(inputLetter)).innerHTML = inputLetter;
            score++;
        }
    }

    if (score == 5){
        alert('Congrats! You guessed the word.');
    }  


}


