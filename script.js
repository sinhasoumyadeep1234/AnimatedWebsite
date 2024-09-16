console.log("Script is working!!");
// Shery.imageEffect(element,configurations)
// element will have the name of conatiner having the images which is #back

Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 1.6, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1852704927596696 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.12, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.3, range: [0, 10] },
    metaball: { value: 0.18, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.46, range: [0, 2] },
    noise_scale: { value: 15.27, range: [0, 100] },
  },
  gooey: true,
});

// now we have to apply this logic(line: var h1's to end) for all elems thus select it
var elems = document.querySelectorAll(".elem"); //now run the below logic for each elem and not for all h1s..thus the h1 will be elem.querySelectorAll h1 of that elem and not for all h1
elems.forEach(function (elem) {
  // write the function to change the text when the image changes
  // select all h1's
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      // then only run the animation..this saves from rapid clicks and hampering the animation
      // use animation logic..take one h1 from the list according to the index value then make its top value -100% of its existing value and during this process use the animation ease in and out
      animating=true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        // now when the element goes out we have to make it come below again to reappear later
        onComplete: function () {
          // capture the h1 that moved upward using animate logic above and then add it style top 100% to make it come down again
          gsap.set(this._targets[0], { top: "100%" });
        //   after animation complete make the animation value false
        animating=false;
        },
      });

      // increment the index value..but we have to make index 0 after all the h1's are over else index will get infinite value
      // logic: if index's value is equal to the number of h1's then make the index=0 else incrementthe index by 1
      index === h1s.length - 1 ? (index = 0) : index++;

      // repeat the step for the next element after index gets incremented
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
