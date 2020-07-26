function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top/0.6;
    var screenPosition = window.innerHeight;

    if(introPosition< screenPosition){
        introText.classList.add('intro-appear')
    }

}

window.addEventListener('scroll', scrollAppear);
 

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

var goals = document.querySelector('.ml9 .letters');
goals.innerHTML = goals.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
});


var features = document.querySelector('.ml8 .letters');
features.innerHTML = features.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml8 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    }).add({
      targets: '.ml8',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100
});