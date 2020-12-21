const landingPageAnimate = () => {
    var tl = gsap.timeline();
    tl.fromTo(".landing-container h1", {
        opacity: 0,
        y: -100
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.easeInOut"
    }),
    tl.fromTo(".landing-container p", {
        opacity: 0,
        y: 100
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.easeInOut"
    })
    tl.fromTo("#logo", {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 2
    }),
    tl.fromTo("#hamburger", {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 1,
        delay: -2
    })
}
landingPageAnimate();