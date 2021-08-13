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