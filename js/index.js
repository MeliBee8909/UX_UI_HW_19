console.log("Your index.js file is loaded correctly!"); 




 /* $(document).ready();
// create event listener when Contact is clicked 
/*
$("#test1").on("click",function(){
  console.log("Your index.js file is loaded correctly!"); 
});
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
} */
$("#test1").on("click", function(){
  /* $(this).css("background-color","green"); //color is not changing*/
  console.log("Are you working?"); 
  $("#test1").css("transform", "rotate(180deg)");
});