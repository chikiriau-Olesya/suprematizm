let animFirst = anime({
    targets: '.circle',
    translateX: 800,
    backgroundColor: '#0034EB',
    borderRadius: ['50%', 0],
    easing: 'linear',
    rotate: 45,
    autoplay: false
  })
  let firstClick = document.getElementById('firstClick')
  firstClick.onclick = animFirst.play


//For top blue triangle
  let animSecond = anime({
    targets: '.triangle',
    rotate: 45,
    scale: 0.5,
    autoplay: false
  })
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = animSecond.play

/*
let prevRotate = 0
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = function() {
    anime({
      targets: '.triangle',
      scale: 0.5,
      rotate: function () {
        return  prevRotate + anime.random(-25,100)
      },
      changeComplete: function(el) {
        prevRotate = Number(el.animations[0].currentValue.slice(0,4))
      }
    })
  }
  */
/*
  let animSecond = anime.set('.triangle', {
    rotate: function() { return anime.random(0, 360); },
  });
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = animSecond
  */


  //for small blue triangle 
let animThird = anime({
  targets: '.triangle__small',
  rotate: ['86.74deg',  360],
  duration: 1500,
  direction: 'alternate',
  autoplay: false
})
let thirdClick = document.getElementById('thirdClick')
thirdClick.onclick = animThird.play


  //for red rec__red
  let animFourth = anime({
  targets: '.rec__red',
  width: '400',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
});
let fourthClick = document.getElementById('fourthClick')
fourthClick.onclick = animFourth.play


//for two blue rect
var animFifth  = anime.timeline({
  easing: 'easeOutExpo',
  direction: 'alternate',
  duration: 1500
});

animFifth
.add({
  targets: '.rec__blue',
  delay: 1000,
  rotate: [45, 270],
  duration: 2000,
  autoplay: true
})
.add({
  targets: '.rec__blue__two',
  rotate: [45, 360],
  autoplay: true
})

//for rigth black square and small blue rec

/*
let animSix = anime({
  targets: '.square__black',
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  direction: 'alternate',
  easing: 'easeInOut',
  loop: true,
  autoplay: true
});
*/

/*
let animSix = anime({
  targets: '.square__black',
  translateX: -730,
  translateY: 15,
  backgroundColor: 'none',
  border: 'solid #000',
  borderRadius: [0, '50%'],
  rotate: [45, 270],
  scale: 2,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  boxShadow: '0px 0px 0px 2px #0034EB',
  easing: 'steps(5)',
  autoplay: false
})
let sixClick = document.getElementById('sixClick')
sixClick.onclick = animSix.play

let animSeven = anime({
  targets: '.rec__blue__small',
  keyframes: [
    {translateY: -40},
    {translateX: -600},
    {backgroundColor: '#000'},
    {scale: 2},
    {translateY: 40},
    {scale: 1},
    {backgroundColor: '#0034EB'},
    {translateX: 0},
    {translateY: 0},
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  autoplay: false
})
*/

let animSix  = anime.timeline({
  easing: 'linear',
  delay: 5000,
  duration: 1500
});

animSix
.add({
  targets: '.square__black',
  translateX: -730,
  translateY: 15,
  backgroundColor: 'none',
  border: 'solid #000',
  borderRadius: [0, '50%'],
  rotate: [45, 270],
  scale: 2,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  boxShadow: '0px 0px 0px 2px #0034EB',
  easing: 'steps(5)'
})
.add({
  targets: '.rec__blue__small',
  keyframes: [
    {translateY: -40},
    {translateX: -600},
    {backgroundColor: '#000'},
    {scale: 2},
    {translateY: 40},
    {scale: 1},
    {backgroundColor: '#0034EB'},
    {translateX: 0},
    {translateY: 0},
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)'
})
/*
let sixClick = document.getElementsByClassName('group')
sixClick.onclick = animSix.play
*/
/*
let sevenClick = document.getElementById('sevenClick')
function playGroup() {
  if (animSix.play == true) {
   return  sevenClick.onclick = animSeven.play
  }
}
*/

let eightAnim = anime({
  targets: '.circle__down',
  duration: 1000,
  easing: 'easeOutElastic(4, 1.3)',
  translateX: -700,
  scale: .5,
  autoplay: false
})
let eightClick = document.getElementById('eigthtClick')
eigthtClick.onclick = eightAnim.play