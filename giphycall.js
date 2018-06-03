// Pseudocode for EmojiCat app

//create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

var topics = ["happy cat","sad cat","angry cat","annoyed cat","sneaky cat","funny cat","cool cat","hyper cat","ninja cat","sleepy cat","shy cat","transcendance cat"];


//initialize other variables here as needed


//take the topics array and create buttons in your HTML

//







//on-click function to start and stop gifs animating
$(".gif").on("click", function() {

      var state = $(this).attr("data-state");
      console.log(state);

      // =============================================

      // Check if the variable state is equal to 'still',
      // then update the src attribute of this image to it's data-animate value,
      // and update the data-state attribute to 'animate'.

      // If state is equal to 'animate', then update the src attribute of this
      // image to it's data-still value and update the data-state attribute to 'still'
      // =======================================

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate")); //nested reference here, might be cleaner to have created a variable for each of the urls we're switching like with still and animate
        $(this).attr("data-state","animate");

      }

      else if (state === "animate") {
        $(this).attr("src",$(this).attr("data-still"));
        $(this).attr("data-state","still");
      }
      
      else {
        $(this).attr("src",$(this).attr("data-still"));
        $(this).attr("data-state","still");
      } //this defaults to a still image if there's something wrong and neither value matches

    });