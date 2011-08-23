$(function(){
  var s = new EventSource('/e/lmao');
  s.onmessage = function(e) {
    $("#sse").append(e.data + '<br><br>');
  };
});
