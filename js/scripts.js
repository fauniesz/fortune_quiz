// $(document).ready(function(){
//   $("form#luck_survey").submit(function(event){
//     event.preventDefault();
//     $("#lucky-responses").show();
//     $("input:checkbox[name=lucky]:checked").each(function(){
//       var luckyMode = $(this).val();
//       $('#lucky-responses').append(luckyMode + "<br>");
//     });
//
//     $("#unlucky-responses").show();
//     $("input:checkbox[name=unlucky]:checked").each(function(){
//       var unluckyMode = $(this).val();
//       $('#unlucky-responses').append(unluckyMode + "<br>");
//     });
//     $('#luck_survey').hide();
//     var userResponses = [];
//   });
// });
//
//
// var lucky = parseInt($("input#luck_group").val());
//     var luck= $("select#lucky").val();
//     if (lucky === 'penny' + 'poop' + 'star' && unlucky === "salt") {
//       match = "YOU'RE SO LUCKY!";
//     }
//     if (unlucky === 'salt' + 'mirror' 'flower' + 'nails' && lucky === "poop") {
//       match = "YIKES!!! You should probably stay home!";
//     }
//
//
    $(document).ready(function() {


      $("#luck-survey").submit(function(event) {
        event.preventDefault();
        $("#fortune").show();
        var answers = [];
        $("input:checkbox[name=lucky]:checked").each(function() {
          var answer = parseInt($(this).val());
          answers.push(answer);
        });

        var totalScore = 0;
        for (i=0; i<answers.length; i++) {
          totalScore += answers[i];
        };
        if (totalScore <= 8) {
          $("#fortune").append("<p>LOOKS LIKE YOU HAVE TERRIBLE LUCK!</p>");
        } else if (9 <= totalScore && totalScore <= 17) {
          $("#fortune").append("<p>YOU HAVE AMAZING LUCK!</p>");
        } else if (totalScore >= 18) {
          $("#fortune").append("<p>YIKES!!!</p>");
        }
      });
    });
