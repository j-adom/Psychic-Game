    // Define global variables
    
    var winCount = 0;
    var lossCount = 0; 
    var chancesLeft = 10;
    var guessList = [];
    
    document.getElementById("win-count").textContent = winCount;
    document.getElementById("loss-count").innerText = lossCount;
    document.getElementById("guesses-left").innerText = chancesLeft;
    
    

    //Define starting Computer Guess
    var alphaBet = 'abcdefghijklmnopqrstuvwxyz';
     // Generate random letter
    var computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];
    
    // Listen for letter press

    function resetGame(){
        chancesLeft = 10;
        document.getElementById('guesses-left').innerText = chancesLeft;
        computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];
        guessList = [];
        document.getElementById("guess-list").innerText = guessList;
    }

    document.onkeyup = function(keypress) {
        var userGuess = keypress.key;
        
        
        //Restrict guesses to only letters
        if(alphaBet.includes(userGuess)){
            
        console.log(userGuess + " " + computerGuess);

            // Compare letter for match
                if(userGuess !== computerGuess){
                    chancesLeft--;
                    document.getElementById('guesses-left').innerText = chancesLeft;
                    if(chancesLeft<1){
                        alert("Game Over Dude!");
                        lossCount++;
                        document.getElementById("loss-count").innerText = lossCount;
                        resetGame();
                        
                    } else{
                        // Update list of previous guesses
                            guessList.push(userGuess);
                            document.getElementById("guess-list").innerText = guessList;
                    }
                
                } else{
                    winCount++;
                    alert("Winner Winner!/n"+userGuess + "was the correct answer!");
                    document.getElementById("win-count").innerText = winCount;
                    resetGame();
                };

        };
    };   
    
