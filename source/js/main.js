gsap.registerPlugin(ScrollTrigger);

// gsap.to('.c', {
//   scrollTrigger: {
//     trigger: '.c',
//     // start: 'center center',
//     // start: 'top 50px',
//     start: 'center center',
//     // end: 'bottom 100px',
//     // end: '+=300px',
//     // end: () => '+=' + document.querySelector('.c').offsetWidth,
//     endTrigger: '.a',
//     scrub: 4,
//     pin: true,
//     // pinSpacing: false,
//     // end: 'bottom 80%',
//     end: 'center center',
//     // scrub: 1,
//     // span: 1 / (sections.length - 1),
//     // toggleClass: 'active',
//     id: 'my-id',
//     markers: true,
//     toggleActions: 'restart pause reverse pause',
//   },
//   x: 400,
//   rotation: 360,
//   duration: 3,
// });

// /*
// scrollTrigger.create({
//   animtion: tl,
//   trigger: '#container',
//   start: 'top top',
//   end: '+=4000',
//   sctub: true,
//   pin: true,
//   anticipatePin: 1,
// });
// */

// gsap.utils.toArray('.panel').forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: 'top top',
//     pin: true,
//   });
// });

let sections = gsap.utils.toArray('.panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=' + document.querySelector('.container').offsetWidthh,
  },
});
