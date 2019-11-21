import { Hangman } from './../src/hangman.js';
import { HangmanService } from './../src/hangman-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let newHangman = new Hangman();
  $("#start").click(function(event){
    event.preventDefault();
    $("#startMenu").hide();
    $("#playMenu").show();
    (async () => {
      let hangmanService = new HangmanService();
      const answer = await hangmanService.getHangmanAnswer(name);
      getAnswer(answer);

    })();
    function getAnswer(answer) {
      let randomDino = (`${answer[0][0]}`).toLowerCase();
      let random = randomDino.split("");
      newHangman.addToArray(random);
      newHangman.addToUnder();
      $("#here").text(newHangman.underArray.join(" "));
      console.log(newHangman);

    }
  });
  $("button#newGame").click(function(){
    location.reload();

  });
  $("button#guess").click(function(event){
    event.preventDefault();
    let input = $("#letterInput").val();
    newHangman.inputLetter = input;
    newHangman.play();
    console.log(newHangman);
  });
});


// working hangman game
// we need to have 1 form field
// split dino ipsum name into an array with underlines
// if statement to compair if their guesses are included in the answer
// add a point when a user is incorrect
// if the user loses, display the correct word
// display each letter a user guesses and append them
// have a max of seven points(trys or death!)
// make sure we have a working api call from dino ipsum
