$(document).ready(function(){
  $(".drumRec").click(function(){
    $(".hide").toggle();
  });
});

$(document).ready(function(){
  $("#closeBtn").click(function(){
    $(".hide").toggle(false);
  });
});