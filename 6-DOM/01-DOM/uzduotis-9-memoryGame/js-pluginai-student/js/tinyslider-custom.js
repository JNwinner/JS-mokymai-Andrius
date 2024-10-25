// let slider = tns({
//     container: '.slider-container',
//     items: 1,
//     gutter: 10,
//     autoplay: true,
//     mouseDra: true,
//     controls: false,
//     nav: false,
//     autoPlayButtonOutput: false,
//     responsive: {
//         640: {
//             items: 2,
//         },
//         768: {
//             items: 3,
//         }
//     }

// })


let slider = tns({
    container: '.slider-container',
    items: 1,
    gutter: 10,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
      640: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });