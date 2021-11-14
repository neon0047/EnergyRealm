const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const tl = new TimelineLite({paused:true,reversed:true});

tl.to('.cover',1,{
    width:'60%',
    ease: Power2.easeOut
})
tl.to('nav',0.6,{
    height:'100%',
    ease: Power2.easeOut
}, '-=0.5');

tl.fromTo('.nav-open',0.3, {
    opacity:0,
    x:-50,
    ease:Power2.easeOut
},{
    opacity:1,
    x:0,
    onComplete:function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('Done')
    }
})
navButton.addEventListener('click',(e)=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }    

    toggleTween(tl)
});

const toggleTween = (tween)=>{
    tween.reversed() ? tween.play() : tween.reverse();
}
