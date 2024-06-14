gsap.registerPlugin(ScrollTrigger);
    // reset scrollbar position after refresh
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

    /*  Clouds  */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
        animation: clouds,
        trigger: ".scrollElement",
        start: "top top",
        end: "70% 100%",
        scrub: 1,
        onEnter: function() { gsap.set(".scrollIndicator", { opacity: 1 }) },
        onLeaveBack: function() { gsap.set(".scrollIndicator", { opacity: 0 }) },
    });

    clouds.to("#cloud1", { x: 500 }, 0)
    clouds.to("#cloud2", { x: 1000 }, 0)
    clouds.to("#cloud3", { x: -1000 }, 0)
    clouds.to("#cloud4", { x: -700, y: 25 }, 0)


    /*  Bird  */
    gsap.fromTo("#bird", { opacity: 1 }, {
        y: -100,
        x: -850,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "10% top",
            end: "40% 100%",
            scrub: 4,
            onEnter: function() { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
            onLeave: function() { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
        }
    })


    /*  Sun motion Animation  */
    let sun = gsap.timeline();
    ScrollTrigger.create({
        animation: sun,
        trigger: ".scrollElement",
        start: "5% top",
        end: "2800 100%",
        scrub: 1,
        
    });

    // sun motion 
    sun.to("#bg_grad", { attr: { cy: "330" } }, 0.00)

    // bg change
    sun.to("#sun", { attr: { offset: "0.15" } }, 0.00)
    sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.00)
    sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.00)
    sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.00)
    sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.00)


    /*  Scene 1  */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene1,
        trigger: ".scrollElement",
        start: "20% top",
        end: "45% 100%",
        scrub: 3,
    });

    // hills animation 
    scene1.to("#scene1-1", { y: 600, x: 200, scale: 0.9, ease: "power1.in" }, 0)
    scene1.to("#scene1-2", { y: 520, x: -120, ease: "power1.in" }, 0)
    scene1.to("#scene1-3", { y: 160, x: 120 }, 0)
    scene1.to("#scene1-4", { y: 200, x: 200 }, 0)
    scene1.to("#scene1-5", { y: 200, x: -120 }, 0)
    scene1.to("#arch", { y: 200, x: 0 }, 0)


    /*  Scene 2  */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2,
        trigger: ".scrollElement",
        start: "20% top",
        end: "40% 100%",
        scrub: 4,
    });

    scene2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#d4eaea" } }, 0)
    scene2.fromTo("#scene2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
    scene2.fromTo("#scene2-2", { y: 500 }, { y: 0 }, 0.1)
    scene2.fromTo("#scene2-3", { y: 500 }, { y: 0 }, 0.1)


    /*  Sun increase  */
    let sun2 = gsap.timeline();
    ScrollTrigger.create({
        animation: sun2,
        trigger: ".scrollElement",
        start: "2200 top",
        end: "5000 100%",
        scrub: 1,
    });

    sun2.to("#sun", { attr: { offset: "0.6" } }, 0)
    sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0)
    sun2.to("#sun", { attr: { "stop-color": "#eedc00" } }, 0)
    sun2.to("#scene2-lg stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0)
    sun2.to("#scene2-lg stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0)
    sun2.to("#scene2-lg1 stop:nth-child(1)", { attr: { "stop-color": "#1d1d3a" } }, 0)
    sun2.to("#scene2-lg1 stop:nth-child(2)", { attr: { "stop-color": "#1d1d3a" } }, 0)
    sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0)


    /*  Transition (from Scene2 to Scene3)  */
    gsap.set("#scene3", { y: 580, visibility: "visible" })
    let sceneTransition = gsap.timeline();
    ScrollTrigger.create({
        animation: sceneTransition,
        trigger: ".scrollElement",
        start: "70% top",
        end: "bottom 100%",
        scrub: 3,
    });

    sceneTransition.to("#scene2-1", { y: -680, scale: 1.5, transformOrigin: "50% 50%" }, 0)
    sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.00)
    sceneTransition.to("#bg2", { y: 0 }, 0)


    /* Scene 3 */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3,
        trigger: ".scrollElement",
        start: "80% 50%",
        end: "bottom 100%",
        scrub: 3,
    });

    // stars
    scene3.fromTo("#scene3-stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0)

    // gradient value change
    scene3.to("#scene3-bg2-grad", { attr: { cy: 600 } }, 0)
    scene3.to("#scene3-bg2-grad", { attr: { r: 500 } }, 0)


    /*   Content  */
    let content = gsap.timeline();
    ScrollTrigger.create({
        animation: content,
        trigger: ".scrollElement",
        start: "-100% top",
        end: "10% top",
        onEnter: function() {
            gsap.set("#content", { opacity: 1 })
        },
        onEnterBack: function() {
            gsap.set("#content", { opacity: 1 })
        },
        onLeave: function() {
            gsap.set("#content", { opacity: 0 })
        },
        onLeaveBack: function() {
            gsap.set("#content", { opacity: 0 })
        },
    });


    /*  Message 1  */
    let message1 = gsap.timeline();
    ScrollTrigger.create({
        animation: message1,
        trigger: ".scrollElement",
        start: "12.5% top",
        end: "20% top",
        onEnter: function() { gsap.set("#message1", { opacity: 1 }) },
        onEnterBack: function() { gsap.set("#message1", { opacity: 1 }) },
        onLeave: function() { gsap.set("#message1", { opacity: 0 }) },
        onLeaveBack: function() { gsap.set("#message1", { opacity: 0 }) },
    });


    /*  Message 2  */
    let message2 = gsap.timeline();
    ScrollTrigger.create({
        animation: message2,
        trigger: ".scrollElement",
        start: "25% top",
        end: "40% top",
        onEnter: function() { gsap.set("#message2", { opacity: 1 }) },
        onEnterBack: function() { gsap.set("#message2", { opacity: 1 }) },
        onLeave: function() { gsap.set("#message2", { opacity: 0 }) },
        onLeaveBack: function() { gsap.set("#message2", { opacity: 0 }) },
    });


    /*  Message 3  */
    let message3 = gsap.timeline();
    ScrollTrigger.create({
        animation: message3,
        trigger: ".scrollElement",
        start: "45% top",
        end: "60% top",
        onEnter: function() { gsap.set("#message3", { opacity: 1 }) },
        onEnterBack: function() { gsap.set("#message3", { opacity: 1 }) },
        onLeave: function() { gsap.set("#message3", { opacity: 0 }) },
        onLeaveBack: function() { gsap.set("#message3", { opacity: 0 }) },
    });


    /*  Message 4  */
    let message4 = gsap.timeline();
    ScrollTrigger.create({
        animation: message4,
        trigger: ".scrollElement",
        start: "65% top",
        end: "80% top",
        onEnter: function() { gsap.set("#message4", { opacity: 1 }) },
        onEnterBack: function() { gsap.set("#message4", { opacity: 1 }) },
        onLeave: function() { gsap.set("#message4", { opacity: 0 }) },
        onLeaveBack: function() { gsap.set("#message4", { opacity: 0 }) },
    });


    /*  Message 5  */
    let message5 = gsap.timeline();
    ScrollTrigger.create({
        animation: message5,
        trigger: ".scrollElement",
        start: "80% top",
        end: "200% top",
        onEnter: function() { gsap.set("#message5", { opacity: 1 }) },
        onEnterBack: function() { gsap.set("#message5", { opacity: 1 }) },
        onLeave: function() { gsap.set("#message5", { opacity: 0 }) },
        onLeaveBack: function() { gsap.set("#message5", { opacity: 0 }) },
    });


    /*  Feedback  */
    let feedback = gsap.timeline();
    ScrollTrigger.create({
        animation: feedback,
        trigger: ".scrollElement",
        start: "80% top",
        end: "200% top",
        onEnter: function() {
            gsap.set("#feedback", { opacity: 1 })
            gsap.set(".scrollIndicator", { opacity: 0 })
        },
        onEnterBack: function() {
            gsap.set("#feedback", { opacity: 1 })
            gsap.set(".scrollIndicator", { opacity: 0 })
        },
        onLeave: function() {
            gsap.set("#feedback", { opacity: 0 })
            gsap.set(".scrollIndicator", { opacity: 1 })
        },
        onLeaveBack: function() {
            gsap.set("#feedback", { opacity: 0 })
            gsap.set(".scrollIndicator", { opacity: 1 })
        },
    });