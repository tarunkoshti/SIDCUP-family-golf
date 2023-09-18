var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var arrow= document.querySelector("#arrow");

arrow.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
        crsr.style.border = `0.5px solid #fff`
        crsr.style.backgroundColor = "transparent"
})

arrow.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
        crsr.style.border = `0 solid #95C11E`
        crsr.style.backgroundColor = "#95C11E"
})

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x+"px"
    blur.style.top = dets.y+"px"
})

var navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = `0.5px solid #fff`
        crsr.style.backgroundColor = "transparent"
        
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = `0 solid #95C11E`
        crsr.style.backgroundColor = "#95C11E"
    })

})

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 35%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub:4
    }
})

gsap.from("#page4 h2",{
    y:30,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 94%",
        scrub:1
    }
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})

