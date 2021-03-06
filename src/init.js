$(document).ready(function() {
  window.dancers = [];
  window.couples = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var stepTime = 200;
    var dancer = new dancerMakerFunction(
      $("body").height() * (1 - 0.5 * Math.random()) - 150,
      $("body").width() * Math.random(),
      stepTime
    );
    dancer.chooseImage();
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.$node.on("click", function(event){
      dancer.wantsToDance = true;
    });
  });

  $("#lineUp").on("click", function(event) {
    var increment = 100 / window.dancers.length;
    //iterate through array
    for(var i = 0; i < window.dancers.length; i++) {
    //call setPosition
      dancers[i].lineUp((i * increment) + '%');
    }
  });

  $(document).on('keypress', function(event){
    var key = String.fromCharCode(event.keyCode);
    if(key === 'c'){
      for(var i = 0; i < window.dancers.length; i++) {
        dancers[i].conga(i);
      }
    }
  });

});

