/**
 * Axioms:
 * -Can't manually rotate a visible card
 * -Incidentally, no risks of lockign the game by returning the exact same card
 * -When 2 cards are returned:
 *  *Are they the same hero? Keep them visible
 *  *Else turn them back after 1 second, no other cards can be turned during this period
 */

var cardsCurrentlyOpened = [];
var cardsWon = [];
var numberCards = 2; //Min

$(document).ready(function() {

  /*Timer so that Github pages properly do the call to event binders*/
  setTimeout(function() {
    $(".card").click(turnAround);
    $(".reset").click(resetGame);
  }, 2000);
  

  numberCards = $(this).find(".thumbnail").length / 2;
  console.log("Number of cards: " + numberCards);
});

function resetGame() {
  location.reload(true);
}

function turnAround() {
  console.log("What?");
  var elements = $(this).find(".thumbnail");
  for (var i = 0; i < elements.length; i++) {
    var champName = elements.find(".champName").html(); //NAme of the champion in the clicked card
    console.log("Card clicked: " + champName);
    //If the card is showing its backface..
    if (elements[i].className == "thumbnail") {
      //prevents from turning the card duing the 1 secnd period
      if (cardsCurrentlyOpened.length != 2) {
        elements[i].className += " rotated"; //rotate it
        cardsCurrentlyOpened.push(champName);
        console.log("Revealing card");
      } else {
        console.log("Wait for cards to turn around");
      }
    } else {
      console.log("Card already turned");
    }
  }

  //If 2 cards are returned at this moment
  if (cardsCurrentlyOpened.length == 2) {
    setTimeout(function() {
      resetCards();
    }, 1200);
  }

  console.log(cardsCurrentlyOpened);
}

//What happens after 2 cards have been returned
function resetCards() {
  console.log("Resetting cards");

  //Are they the same champ?
  if (cardsCurrentlyOpened[0] == cardsCurrentlyOpened[1]) {
    console.log("Same cards== lock rotated");
    cardsWon.push(cardsCurrentlyOpened[0]);
    $(".champName").each(function(index) {
      if ($(this).text() == cardsCurrentlyOpened[0]) {
        $(this).css("background-color", "darkgreen");
      }
    });
  } else {
    console.log("Put cards back again");
    $("figure").each(function(index) {
      if (
        !cardsWon.includes(
          $(this)
            .find(".champName")
            .html()
        )
      ) {
        $(this).removeClass("rotated");
      }
      $(this)
        .find(".champName")
        .addClass("cardwon");
    });
  }

  if (cardsWon.length == 3) {
    youWin();
  }

  console.log("Emptying opened cards");
  cardsCurrentlyOpened = [];
}

function youWin() {
  alert("YOU WON!");
}
