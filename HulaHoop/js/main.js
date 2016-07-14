$(document).ready(function() {
  function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}
  include('js/header.js');
  include('js/about.js');

});
