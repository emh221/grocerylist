$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    var inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput]

    var alphaInputs = inputs.sort();

    console.log(alphaInputs);

    alphaInputs.forEach(function(alphaInput){
      $("ul#list").append('<li>' + alphaInput + '<li>')
    })

    $("#blanks form").hide()

    $("#groceries").show();

    event.preventDefault();
  });
});
