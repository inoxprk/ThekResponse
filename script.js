console.log("hello")

$(function(){
  $(".hoverarea").mouseenter(function(){
    $(".imgbox").removeClass("active");
    $(this).next().next().addClass("active");
  })
  $(".hoverarea").mouseleave(function(){
    $(".imgbox").removeClass("active");
  })
});

// question[0].innerHTML += "<img src='img/handtop.png' alt=''>"

const question = " <div class='question'> <div class='question-line'> <div class='inner'> <h2>Prompt</h2> <div class='swiper mySwiper'> <div class='swiper-wrapper'> <div class='swiper-slide'> <p>1- What's your Name, age, birthdate, place of birth, position in family, nationality, religion, education, hobbies, career plans, parents’ education, parents’ birthplace, parents, religion?</p> </div> <div class='swiper-slide'> <p>4- What happens after death?</p> </div> <div class='swiper-slide'> <p>6- What does your room look like?</p> </div> <div class='swiper-slide'> <p>10- What is eternity?</p> </div> <div class='swiper-slide'> <p>11- Who is the person closest to you at the moment?</p> </div> <div class='swiper-slide'> <p>14- Redesign a rainbow</p> </div> <div class='swiper-slide'> <p>15- Design a monstrance</p> </div> <div class='swiper-slide'> <p>20- What is the most beautiful thing in the world?</p> </div> <div class='swiper-slide'> <p>21- Make a paper doll of yourself</p> </div> <div class='swiper-slide'> <p>25- Design something to put over a child’s bed</p> </div> <div class='swiper-slide'> <p>29- Design a black mass out of any materials you can find</p> </div> <div class='swiper-slide'> <p>42- Design a throne</p> </div> <div class='swiper-slide'> <p>48- What do you think of money? Make a structure to me explaining your concept of money, or out of money</p> </div> <div class='swiper-slide'> <p>13- What is abstraction?</p> </div> <div class='swiper-slide'> <p>42- Design a box within a box to illustrate selfishness.</p> </div> </div> <div class='swiper-button-next swiper-button'></div> <div class='swiper-button-prev swiper-button'></div> </div> </div> </div> <p id='colon'>:</p>"

const column = document.querySelectorAll(".column")
column[0].innerHTML += question
// console.log(column.length)
// for(let i=0; i <= column.length; i++) {
//   column[i].innerHTML += question
// }

//swiper.js
let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
