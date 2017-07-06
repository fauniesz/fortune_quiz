$(document).ready(function(){
  $("form#luck_survey").submit(function(event){
    event.preventDefault();
    $("#lucky-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function(){
      var luckyMode = $(this).val();
      $('#lucky-responses').append(luckyMode + "<br>");
    });

    $("#unlucky-responses").show();
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unluckyMode = $(this).val();
      $('#unlucky-responses').append(unluckyMode + "<br>");
    });
    $('#luck_survey').hide();
    var userResponses = [];
  });
});


var lucky = parseInt($("input#luck_group").val());
    var luck= $("select#lucky").val();
    if (lucky === 'penny' + 'poop' + 'star' && unlucky === "salt") {
      match = "YOU'RE SO LUCKY!";
    }
    if (unlucky === 'salt' + 'mirror' 'flower' + 'nails' && lucky === "poop") {
      match = "YIKES!!! You should probably stay home!";
    }
