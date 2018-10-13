$(document).ready(function () {
    // Generates random number to guess
    var randomNum = Math.floor(Math.random() * 60 + 20);

    // Display random number
    $('#scoreToMatch').text(randomNum);

    //Generate random number for each crystal
    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)

    // Variables to keep track of wins, losses and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);

    // Reset game
    function reset() {
        randomNum = Math.floor(Math.random() * 60 + 20);
        console.log(randomNum)
        $('#scoreToMatch').text(randomNum);
        num1 = Math.floor(Math.random() * 10 + 1);
        num2 = Math.floor(Math.random() * 10 + 1);
        num3 = Math.floor(Math.random() * 10 + 1);
        num4 = Math.floor(Math.random() * 10 + 1);
        playerTotal = 0;
        $('#totalScore').text(playerTotal);
    }

    // Display wins
    function woohoo() {
        alert("Congratulations, you win!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // Display losses
    function loser() {
        alert("Sorry, you lose.");
        losses++;
        $('#losses').text(losses);
        reset()
    }

    // Clicking crystals
    $('#crystal_01').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        //Win & lose conditions
        if (playerTotal == randomNum) {
            woohoo();
        }
        else if (playerTotal > randomNum) {
            loser();
        }
    })

    $('#crystal_02').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if (playerTotal == randomNum) {
            woohoo();
        }
        else if (playerTotal > randomNum) {
            loser();
        }
    })

    $('#crystal_03').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == randomNum) {
            woohoo();
        }
        else if (playerTotal > randomNum) {
            loser();
        }
    })

    $('#crystal_04').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == randomNum) {
            woohoo();
        }
        else if (playerTotal > randomNum) {
            loser();
        }
    });
});