// // Select all divs and give them a purple background
// $('div').css("backgroundColor", "purple");

// // Select the divs with class "highlight" and make them 200px wide
// $('.highlight').css('width', '200px');

// // Select the div with id "third" and give it a orange border
// $('#third').css('border', '2px solid orange');

// // Bonus: Select the first div only and change its font color to pink
// $('div:first').css('color', 'pink');

// $('h1').click(function(){
//   alert("h1 clicked");
// })

// $('button').click(function(){
//   var text = $(this).text();
//   $(this).css('backgroundColor', 'pink');
//   console.log("you clicked " + text);
//   alert('button clicked');
// })

// $('input').keypress(function(event){
//   if(event.which === 13){
//     alert("you hit enter")
//   }
//   console.log(event.which)
// });

// $('h1').on('click', function(){
//   $(this).css('color', 'purple');
// })

// $('input').on('keypress', function(){
//   console.log('Key pressed');
// })

// $('button').on("mouseenter", function(){
//   $(this).css('backgroundColor', 'blue');
// })

$('button').on('click', function(){
  $('div').slideToggle(1000, function(){
    $(this).remove();
    console.log('slide completed');
  });

})