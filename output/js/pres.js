(function (glob) {
  function debug() {
      return function() {};
  }
  
  $(function() {
      $('section[data-bg]').each(function() {
          var el = $(this),
              bgImage = el.data('bg') || el.attr('data-bg');
          
          el.css('background-image', 'url(' + bgImage + ')');
      });
  });
  
  
   if (typeof pres != 'undefined') glob.pres = pres;
})(this);