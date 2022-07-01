//Showing menu container
  function show(){
   document.getElementById('menu-navigator').style.display = "block";
   document.getElementById('menu-bar').style.display = "none";
   document.getElementById('cancel-bar').style.display = "block";
   
   document.getElementById('notification-center').style.display = "none";
   document.getElementById('notification-bar-cancel').style.display = "none";
   document.getElementById('notification-bar').style.display = "block";
  }
//Hiding menu container
  function hide(){
  document.getElementById('cancel-bar').style.display = "none";
  document.getElementById('menu-navigator').style.display = "none";
  document.getElementById('menu-bar').style.display = "block";  
  }

//Showing Notification center
 function showNot(){
  document.getElementById('notification-center').style.display = "block";
  document.getElementById('notification-bar').style.display = "none"
  document.getElementById('notification-bar-cancel').style.display = "block"
  
  document.getElementById('menu-navigator').style.display = "none";
  document.getElementById('cancel-bar').style.display = "none";
  document.getElementById('menu-bar').style.display = "block";  
 }
//Hiding Notification center
  function hideNot(){
  document.getElementById('notification-bar-cancel').style.display = "none";
  document.getElementById('notification-center').style.display = "none";
  document.getElementById('notification-bar').style.display = "block";
  
  
  }

