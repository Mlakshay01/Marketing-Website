// cursor
var body  = document.querySelector("body")
var smallCursor = document.querySelector("#small-cursor")
var bigCursor = document.querySelector("#big-cursor");
var centreText = document.querySelector(".center-part1 h1")

body.addEventListener("mousemove", function(dets){
    gsap.to("#small-cursor",{
        x: `${dets.x}`,
        y: `${dets.y}`,
        ease: "back.out"
    })
})

let isMoving = false;

bigCursor.addEventListener("click", function () {
    if (!isMoving) { 
        isMoving = true;
        bigCursorMove();  
    }
});

function bigCursorMove() {
   
    smallCursor.style.opacity = "0";

   
    body.addEventListener("mousemove", function (dets) {
        gsap.to("#big-cursor", {
            x: dets.x,
            y: dets.y - 330,  
        });
    });
}

function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y: -30,
    opacity: 0,
    delay: 0.5,
     duration: 0.5,
     stagger: 0.15
})

tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
},"animTop")

tl.from(".center-part1 p", {
    x: -10,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part1 button", {
    x: -100,
    opacity: 0,
    duration: 0.3,
    scrollTrigger:{
        trigger: ".center-part1 button",
        scroller: "body",
        start: "top 110%",
        end: "top 50%",
        scrub: true

    }
})

tl.from(".center-part2 img",{
    opacity: 0,
    duration: 2
},"animTop")

tl.from(".section1bottom img", {
    opacity: 0,
    y:30,
    stagger: 0.15,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".section1bottom img",
        scroller: "body",
        start: "top 100%",
        end: "top 50%",
        scrub: 2
    }
})
}

// page 2

function page2Animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        scrub: 2

    }
})

tl2.from(".services",{
    y: 30,
    opacity: 0,
    duration:0.5
})

tl2.from(".elem.line1.left",{
    x: -300,
    opacity: 0,
    duration: 2
},"anim1")

tl2.from(".elem.line1.right",{
    x: 300,
    opacity: 0,
    duration: 2
},"anim1")

tl2.from(".elem.line2.left",{
    x: -300,
    opacity: 0,
    duration: 2
},"anim2")
tl2.from(".elem.line2.right",{
    x: 300,
    opacity: 0,
    duration: 2
},"anim2")

tl2.from(".contact-right img",{
    y: 300,
    opacity: 0,
    duration: 1,
     scrollTrigger: {
        trigger: ".contact-right img",
        scroller: "body",
        start: "top 100%",
        end: "top 70%",
        scrub: 1
     }
})

tl2.from(".case-study",{
    x: -300,
    opacity: 0,
    scrollTrigger:{
        trigger:".case-study",
        scroller: "body",
        start:"top 50%",
        end: "top 20%",
        scrub: 2

    }
})

tl2.from(".cases",{
    opacity: 0,
    scrollTrigger:{
        trigger:".case-study",
        scroller: "body",
        start:"top 50%",
        end: "top 20%",
        scrub: 1

    }
})

}
 
page1Animation();
page2Animation();
