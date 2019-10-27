$(document).ready(function() {
    var click = "click";

$("div.burger").on(click, function() {
  if (!$(this).hasClass("open")) {
    openMenu();
  } else {
    closeMenu();
  }
});

$("div.menu ul li a").on(click, function(e) {
  e.preventDefault();
  closeMenu();
});

function openMenu() {
  $("div.circle").addClass("expand");
  $("div.burger").addClass("open");
  $("div.top, div.mid, div.bot").addClass("collapse");
  $(".menu li").addClass("animate");

  setTimeout(function() {
    $("div.mid").hide();
  });

  setTimeout(function() {
    $("div.top").addClass("rotate45");
    $("div.bot").addClass("rotate135");
  });
}

function closeMenu() {
  $("div.burger").removeClass("open");
  $("div.top").removeClass("rotate45");
  $("div.bot").removeClass("rotate135");
  $("div.circle").removeClass("expand");
  $(".menu li").removeClass("animate");

  setTimeout(function() {
    $("div.mid").show();
    $("div.top, div.mid, div.bot").removeClass("collapse");
  });
}})