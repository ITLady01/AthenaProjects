<script type="text/javascript">
function setbackground()
  {
  window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay
  
  var index = Math.round(Math.random() * 5);
  
  var ColorValue = "FFFFFF"; // default color - white (index = 0)
  
  if(index == 1)
  ColorValue = "FFCCCC"; //peach
  if(index == 2)
  ColorValue = "CCAFFF"; //violet
  if(index == 3)
  ColorValue = "A6BEFF"; //lt blue
  if(index == 4)
  ColorValue = "99FFFF"; //cyan
  if(index == 5)
   ColorValue = "D5CCBB"; //tan
  
  
  document.getElementById('quote-box')[0].style.backgroundColor = "#" + ColorValue;
    
  </script><body onload="setbackground();">