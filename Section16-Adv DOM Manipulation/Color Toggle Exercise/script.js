var button = document.querySelector("button");

// button.addEventListener("click", function(){
//   if(document.body.style.background !== "pink"){
//     document.body.style.background = "pink";
//   } else{
//     document.body.style.background = "green";
//   }
// })

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
})