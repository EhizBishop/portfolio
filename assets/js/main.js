

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "black");
        }
  
        else{
            $(".navbar").css("background" , "none");  	
        }
    })
})


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


    // var just = document.getElementsByTagName('just')[0];
    // just.innerHTML = '<span>' + just.innerHTML.split('').join('</span><span>') + '</span>';

//     const myBtn = document.getElementById("myBtn");
//     window.onscroll = function() {
//          scrollFunction()
//     };

//     function scrollFunction() {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//              myBtn.style.display = "block";
//         } else {
//              myBtn.style.display = "none";
//         }
//     }
// // Bind your button click, scroll direction and effect speed
//     document.getElementById("myBtn").onclick = function() {
//   scrollTo(0, 8000); // it will take 8 seconds to reach to top.

//     }