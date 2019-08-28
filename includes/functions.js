function showDiv(toShow) {
  $("img.research").each(function (i) {
    $(this).removeClass("selected");
    if ($(this).attr("id").indexOf(toShow) != -1) {
      $(this).addClass("selected");
    }
  });

  $("#research_desc").children().each(function (i) {
    $(this).removeClass("hidden");
    if ($(this).attr("id").indexOf(toShow) == -1) {
      $(this).addClass("hidden");
    }
  }); 
} 
