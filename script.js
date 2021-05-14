var object = jQuery.noConflict(),
    internalLoader = object('a[href^="/"]'),
    curURL = '';
    
object(function() {
  
  internalLoader.each(function() {
  
    var withoutHash = object(this).attr('href');
    object(this).attr('href','#' + withoutHash + '');
  
  });
  
  internalLoader.click(function() {
    curURL = object(this).attr('href');
  });
  
  object(window).bind('hashchange', function() {
    window.location.hash = setHash;
  });

});