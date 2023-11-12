//for scroll based animation 

(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 150; // total numbers of frames
    const images = []; // array to hold images
    // object literal, that has a property of frame to hold the current frame
    const buds = {
      frame: 0
    };
  
    // loop to populate images in an array
  
    for (let i = 0; i < frameCount; i++) {
      console.log(i);
      const img = new Image();
      img.src = `images/render_black${(i + 1).toString().padStart(4, '0')}.jpg`;
      images.push(img);
    }
  
    console.log(images);
    gsap.to(buds, {
      frame: 149, 
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 0.5,
        markers: false,
        start: "top top"
      },
      onUpdate: render
    }); // Corrected the syntax issue
  
    images[0].addEventListener("load", render);
  
    // functions
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  })();
  