$(document).ready(function() {
  $(".btn-begin").click(function() {
    $("#group1").fadeIn();
    $(".btn-next1").fadeIn();
    $("img").fadeOut();
    $(".btn-begin").fadeOut();
  });

  $(".btn-next1").click(function() {
    $("#group2").fadeIn();
    $(".btn-next2").fadeIn();
    $(".btn-next1").fadeOut();
  });
  
  $(".btn-next2").click(function() {
    $("#group3").fadeIn();
    $(".btn-next3").fadeIn();
    $(".btn-next2").fadeOut();
  });

  $(".btn-next3").click(function() {
    $("#group4").fadeIn();
    $(".btn-next4").fadeIn();
    $(".btn-next3").fadeOut();
  });

  $(".btn-next4").click(function() {
    $("#group5").fadeIn();
    $(".btn-next5").fadeIn();
    $(".btn-next4").fadeOut();
  });