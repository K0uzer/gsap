"use strict";

gsap.registerPlugin(ScrollTrigger);
gsap.to('.c', {
  scrollTrigger: {
    trigger: '.a',
    // start: 'center center',
    // start: 'top 50px',
    start: 'center center',
    // end: 'bottom 100px',
    // end: '+=300px',
    // end: () => '+=' + document.querySelector('.c').offsetWidth,
    endTrigger: '.c',
    scrub: 2,
    // pin: true,
    // pinSpacing: false,
    // end: 'bottom 80%',
    end: 'center center',
    // scrub: 1,
    // span: 1 / (sections.length - 1),
    // toggleClass: 'active',
    id: 'my-id',
    markers: true,
    toggleActions: 'restart pause reverse pause'
  },
  x: 400,
  rotation: 360,
  duration: 3
});