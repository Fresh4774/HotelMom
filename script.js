let main_tl = gsap.timeline();

let clouds_tl = gsap.timeline();
clouds_tl.from("#clouds", 3, {
  opacity: 0,
  x: -40,
  delay: 2
});

let board24 = gsap.from(".b24", 0.5, {
  scale: 0,
  stagger: 0.2,
  transformOrigin: "50% 50%",
  ease: "back.out(2)"
});

let open_text = gsap.from(".greenCirc", 0.4, {
  scale: 0,
  stagger: 0.2,
  transformOrigin: "50% 50%",
  ease: "elastic.out(1, 1.5)"
});

bkg_tl = gsap.timeline({ duration: 0.5 });
bkg_tl
  .from("#city-bkg-back", {
    y: 180,
    ease: "power4.out"
  })
  .from(
    "#city-bkg-front",
    {
      y: 180,
      ease: "power4.out"
    },
    "-=.3"
  )
  .from(
    "#bush-left",
    {
      scaleY: 0,
      y: 10,
      transformOrigin: "50% 100%",
      ease: "elastic.out(1, 0.6)"
    },
    "-=.3"
  )
  .from(
    "#bush-right",
    {
      scaleY: 0,
      y: 10,
      transformOrigin: "50% 100%",
      ease: "elastic.out(1, 0.6)"
    },
    "-=.3"
  );

main_tl
  .set("#arrow-top", { clipPath: "polygon(0 0, 0% 0%, 0% 0%, 0% 0%, 0 0%)" })
  .from("#ground", 0.5, {
    scaleX: 0,
    transformOrigin: "50% 50%"
  })
  .add(bkg_tl)
  .from("#pole", 0.7, {
    scaleY: 0,
    transformOrigin: "0% 100%",
    ease: "elastic.out(1, 0.5)"
  })
  .from("#arrow-bottom", 0.5, {
    scale: 0,
    rotation: 30,
    transformOrigin: "50% 50%",
    ease: "elastic.out(1, 0.3)"
  })
  .from(
    "#pink-bottom",
    0.7,
    {
      scale: 0,
      rotation: -30,
      transformOrigin: "50% 50%",
      ease: "elastic.out(1, 0.6)"
    },
    "-=.3"
  )
  .from(
    "#pink-top",
    0.7,
    {
      scale: 0,
      rotation: 30,
      transformOrigin: "50% 50%",
      ease: "elastic.out(1, 0.6)"
    },
    "-=.3"
  )
  .from("#board-24", 0.5, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: "elastic.out(1, 0.6)"
  })
  .add(board24, "<.3")
  .from(
    "#panel-yellow",
    0.5,
    {
      scale: 0,
      transformOrigin: "0% 0%",
      ease: "back.out"
    },
    "-=.2"
  )
  .from(
    "#panel-blue",
    0.5,
    {
      scale: 0,
      transformOrigin: "100% 100%",
      ease: "back.out"
    },
    "-=.2"
  )
  .to("#arrow-top", 1, {
    clipPath: "polygon(0 0, 50% 60%, 100% 50%, 100% 100%, 0 100%)",
    transformOrigin: "0% 0%",
    ease: "power4.out"
  })
  .from(
    "#text-moms",
    0.7,
    {
      opacity: 0,
      scale: 0,
      transformOrigin: "50% 50%",
      ease: "bounce.out"
    },
    "-=.2"
  )
  .from(
    "#text-diner",
    0.7,
    {
      opacity: 0,
      scale: 0,
      transformOrigin: "50% 50%",
      ease: "bounce.out"
    },
    "-=.2"
  )
  .from("#top-bar", 0.5, {
    scaleY: 0,
    transformOrigin: "0% 0%",
    ease: "elastic.out"
  })
  .add(open_text);

main_tl.duration(7);

let replayBtn = document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {
  main_tl.restart();
  clouds_tl.restart();
  gsap.from("#refreshBtn", 0.5, {
    rotation: 90
  });
});