$(document).ready(function() {
    $(".cloudcarousel").click(function() {
     var pictureID = this.id;
     $("body").css('background-image', 'url(images/' + pictureID + '.jpg)');
   });
 });

 $("#menubutton").click(function() {
   $("#list").toggle("fast");
 });

 $("#backgroundbutton").click(function() {
   $("#carousel").toggle("fade");
 });
 $("#radio").click(function() {
   $("#radiotable").fadeToggle("fast");
 });

 $("#fivedays").click(function hide16() {
   $("#weatherTable16 li").remove();
   $("#city").empty();
   $("#blockweather16").css('display', 'none');
   $("#blockweather5").css('display', 'block');
 });

 $("#sixteenthdays").click(function hide5() {
   $("#weatherTable5 li").remove();
   $("#city").empty();
   $("#blockweather5").css('display', 'none');
   $("#blockweather16").css('display', 'block');
 });

 $("#menubutton").click(function showAllweather() {
   $("#allweather").toggle('fade', function remove() {
     $("#weatherTable5 li").remove();
     $("#weatherTable5 li").remove();
   });
 });

 $("#fivedays").click(function pressedButton() {
   $("#sixteenthdays").removeClass("menu16-press");
   $("#fivedays").addClass("menu5-press");
 });

 $("#sixteenthdays").click(function pressedButton() {
   $("#fivedays").removeClass("menu5-press");
   $("#sixteenthdays").addClass("menu16-press");
 });


