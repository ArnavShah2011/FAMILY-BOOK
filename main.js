var images = ["family_book.jpg", "https://tse4.mm.bing.net/th?id=OIP.eGHegwMLRyw3JRFuLD08dQHaKZ&pid=Api&P=0.png", "https://webstockreview.net/images/mom-clipart-cartoon-4.png"];
var names = ["My familly", "Dad", "Mom"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}