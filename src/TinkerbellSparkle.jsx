import React, { useEffect } from "react";

/**
 * TinkerbellSparkle
 * 
 * This component injects the "tinkerbell" mouse sparkles 
 * into the DOM when it mounts, and cleans up on unmount.
 */
export default function TinkerbellSparkle() {
  useEffect(() => {
    // ---- BEGIN: Original script variables and functions ----
    let colour = "#ADD8E6"; // Light blue (instead of "random")
    let sparkles = 50;

    let x = 400, y = 300;
    let ox = 400, oy = 300;
    let swide = 800, shigh = 600;
    let sleft = 0, sdown = 0;
    let tiny = [];
    let star = [];
    let starv = [];
    let starx = [];
    let stary = [];
    let tinyx = [];
    let tinyy = [];
    let tinyv = [];

    function createDiv(height, width) {
      let d = document.createElement("div");
      d.style.position = "absolute";
      d.style.height = height + "px";
      d.style.width = width + "px";
      d.style.overflow = "hidden";
      return d;
    }

    // Remove the random color function, since we’re using #ADD8E6:
    // function newColour() {...}

    function set_scroll() {
      if (typeof self.pageYOffset === "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
      } else if (
        document.body &&
        (document.body.scrollTop || document.body.scrollLeft)
      ) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
      } else if (
        document.documentElement &&
        (document.documentElement.scrollTop || document.documentElement.scrollLeft)
      ) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
      } else {
        sdown = 0;
        sleft = 0;
      }
    }

    function set_width() {
      let sw_min = 999999;
      let sh_min = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) {
          sw_min = document.documentElement.clientWidth;
        }
        if (document.documentElement.clientHeight > 0) {
          sh_min = document.documentElement.clientHeight;
        }
      }
      if (typeof self.innerWidth === "number" && self.innerWidth) {
        if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
        if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min)
          sw_min = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min)
          sh_min = document.body.clientHeight;
      }
      if (sw_min === 999999 || sh_min === 999999) {
        sw_min = 800;
        sh_min = 600;
      }
      swide = sw_min;
      shigh = sh_min;
    }

    function sparkle() {
      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (let c = 0; c < sparkles; c++) {
          if (!starv[c]) {
            star[c].style.left = (starx[c] = x) + "px";
            star[c].style.top = (stary[c] = y + 1) + "px";
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            // Use our fixed color (light blue) instead of random
            star[c].childNodes[0].style.backgroundColor =
              star[c].childNodes[1].style.backgroundColor = colour;
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
          }
        }
      }
      for (let c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      // Keep calling sparkle
      setTimeout(sparkle, 40);
    }

    function update_star(i) {
      if (--starv[i] === 25) {
        star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      }
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;
        if (stary[i] < shigh + sdown) {
          star[i].style.top = stary[i] + "px";
          star[i].style.left = starx[i] + "px";
        } else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
          return;
        }
      } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        tiny[i].style.backgroundColor =
          star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible";
      }
    }

    function update_tiny(i) {
      if (--tinyv[i] === 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = tinyy[i] + "px";
          tiny[i].style.left = tinyx[i] + "px";
        } else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
          return;
        }
      } else {
        tiny[i].style.visibility = "hidden";
      }
    }

    function mouse(e) {
      if (e) {
        y = e.pageY;
        x = e.pageX;
      } else {
        set_scroll();
        y = event.y + sdown;
        x = event.x + sleft;
      }
    }

    // ---- END: Original script logic ----

    // ---- BEGIN: Initialization (like window.onload) ----
    if (typeof document !== "undefined" && document.getElementById) {
      for (let i = 0; i < sparkles; i++) {
        // Create the tiny sparkle
        let tinyDiv = createDiv(3, 3);
        tinyDiv.style.visibility = "hidden";
        tinyDiv.style.zIndex = "999";
        document.body.appendChild((tiny[i] = tinyDiv));
        starv[i] = 0;
        tinyv[i] = 0;

        // Create the star
        let starDiv = createDiv(5, 5);
        starDiv.style.backgroundColor = "transparent";
        starDiv.style.visibility = "hidden";
        starDiv.style.zIndex = "999";

        let rlef = createDiv(1, 5);
        let rdow = createDiv(5, 1);
        rlef.style.top = "2px";
        rlef.style.left = "0px";
        rdow.style.top = "0px";
        rdow.style.left = "2px";
        starDiv.appendChild(rlef);
        starDiv.appendChild(rdow);

        document.body.appendChild((star[i] = starDiv));
      }
      set_width();
      sparkle();
    }

    // Attach event listeners
    document.onmousemove = mouse;
    window.onscroll = set_scroll;
    window.onresize = set_width;

    // Cleanup on unmount
    return () => {
      document.onmousemove = null;
      window.onscroll = null;
      window.onresize = null;
    };
    // ---- END: Initialization ----

  }, []);

  // This component doesn't render anything visible by itself
  return null;
}
