$(document).ready(function() {
	
	
	  function iframeResizePipe()
  {
     // What's the page height?
     var height = document.body.scrollHeight;

     // Going to 'pipe' the data to the parent through the helpframe..
     var pipe = document.getElementById('helpframe');

     // Cachebuster a precaution here to stop browser caching interfering
     pipe.src = 'helper.html?height='+height+'&cacheb='+Math.random();

  }
  
  window.onresize = iframeResizePipe;
  iframeResizePipe()
  
});
