// const subjx= require( '../JS/subjx/dist/js/subjx');
// require( '../JS/subjx/dist/style/subjx.css');

$(document).ready(function(){
  
  
  // create Observable instance
  const obs = subjx.createObservable();
  
  let svgDraggables = [];
  
  const methods = {
    onInit(el) {
      this.on("drag", args => {
        console.log(args);
      });
  
      const $controls = subjx(this.controls);
  
      $controls.on("mousedown", e => {
        e.stopImmediatePropagation();
      });
  
      $controls.on("dblclick", () => {
        this.disable();
        svgDraggables.splice(svgDraggables.indexOf(this), 1);
      });
    },
    onMove() {
      // console.log(arguments);
    },
    onResize(dx, dy, handle) {
      //console.log(handle);
    },
    onRotate(rad) {
      //console.log('is rotating');
    },
    onDrop(e, el) {
      //console.log('is dropped');
    },
    onDestroy(el) {
      //console.log('is destroyed');
    }
  };
  
  const svgParameters = {
    container: "#masterPlan",
    restrict: "#floor-map",
    proportions: true,
    draggable: true,
    resizable: false,
    // rotatable: false,
    each: {
      // resize: true,
      // move: true,
      rotate: true
    },
    snap: {
      x: 20,
      y: 20,
      angle: 25
    },
    ...methods
  };
  
  // double click activating/deactivating the drag method
  subjx(".drag-svg").on("click", e => {
    if (e.currentTarget.classList.contains("sjx-drag")) return;
    const [xDraggable] = subjx(e.currentTarget).drag(svgParameters, obs);
    svgDraggables.push(xDraggable);
  });
  
  // svgDraggables.push(...subjx(".drag-svg").drag(svgParameters, obs));
  
  // SVG panning and zoom
  const svgImage = document.getElementById("masterPlan");
  const svgContainer = document.getElementById("floor-map");
  
  let viewBox = {
    x: 0,
    y: 0,
    w: svgImage.getAttribute("width"),
    h: svgImage.getAttribute("height")
  };
  svgImage.setAttribute(
    "viewBox",
    `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
  );
  const svgSize = {
    w: svgImage.getAttribute("width"),
    h: svgImage.getAttribute("height")
  };
  let isPanning = false;
  let startPoint = { x: 0, y: 0 };
  let endPoint = { x: 0, y: 0 };
  let scale = 1;
  
  // svgContainer.onmousewheel = function(e) {
  //   e.preventDefault();
  //   let w = viewBox.w;
  //   let h = viewBox.h;
  //   let mx = e.x; //mouse x
  //   let my = e.y;
  //   let dw = w * Math.sign(e.deltaY) * 0.05;
  //   let dh = h * Math.sign(e.deltaY) * 0.05;
  //   let dx = (dw * mx) / svgSize.w;
  //   let dy = (dh * my) / svgSize.h;
  //   viewBox = {
  //     x: viewBox.x + dx,
  //     y: viewBox.y + dy,
  //     w: viewBox.w - dw,
  //     h: viewBox.h - dh
  //   };
  //   scale = viewBox.w / svgSize.w;
  //   svgImage.setAttribute(
  //     "viewBox",
  //     `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
  //   );
  //   svgDraggables.forEach(item => {
  //     item.fitControlsToSize();
  //   });
  // };
  
  svgContainer.onmousedown = function(e) {
    isPanning = false;
    startPoint = { x: e.x, y: e.y };
  };
  
  svgContainer.onmousemove = function(e) {
    if (isPanning) {
      endPoint = { x: e.x, y: e.y };
      let dx = (startPoint.x - endPoint.x) * scale;
      let dy = (startPoint.y - endPoint.y) * scale;
      let movedViewBox = {
        x: viewBox.x + dx,
        y: viewBox.y + dy,
        w: viewBox.w,
        h: viewBox.h
      };
      svgImage.setAttribute(
        "viewBox",
        `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`
      );
      svgDraggables.forEach(item => {
        item.fitControlsToSize();
      });
    }
  };
  
  svgContainer.onmouseup = function(e) {
    if (isPanning) {
      endPoint = { x: e.x, y: e.y };
      let dx = (startPoint.x - endPoint.x) * scale;
      let dy = (startPoint.y - endPoint.y) * scale;
      viewBox = {
        x: viewBox.x + dx,
        y: viewBox.y + dy,
        w: viewBox.w,
        h: viewBox.h
      };
      svgImage.setAttribute(
        "viewBox",
        `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
      );
      isPanning = false;
    }
  };
  
  svgContainer.onmouseleave = function(e) {
    isPanning = false;
  };
  
// const obs = subjx.createObservable();
// const draggables=document.getElementsByClassName("drag-svg");
// let svgDraggables = [
//   ...draggables
// ];

// const methods = {
//     onInit(el) {
//         this.onInit("drag", args => {
//             console.log(args);
//         });

//         const $controls = subjx(this.controls);

//         $controls.on("mousedown", e => {
//             e.stopImmediatePropagation();
//         });

//         $controls.on("dblclick", () => {
//             this.disable();
//             svgDraggables.splice(svgDraggables.indexOf(this), 1);
//         });
//     },
//     onMove() {},
//     onResize() {dx, dy, handle},
//     onRotate(rad) {},
//     onDrop(e, el) {},
//     onDestroy(el) {},
// };

// const svgParameters = {
//     container: "#floor-map",
//     restrict: "#floor-map",
//     proportions: true,
//     // drggable: false,
//     // resieable: false,
//     // rotatable: false,
//     each: {
//         // resize: true,
//         // move: true,
//         rotate: true,
//     },
//     snap: {
//         x: 10,
//         y: 10,
//         angle: 25
//     },
//     ...methods

// };

// // double click activating/deactivating the drag method
// subjx(".drag-svg").on("dblclick", e => {
//     if (e.currentTarget.classList.contains("sjx-drag")) return;
//     const [xDraggable] = subjx(e.currentTarget).drag(svgParameters, obs);
//     console.log(svgDraggables);
//     svgDraggables.push(xDraggable);
//   });
  
//   // if (svgDraggables.length) {
//   //   svgDraggables.push(...subjx(".drag-svg").drag(svgParameters, obs));
//   // // };
  
//   // SVG panning and zoom
//   const svgImage = document.getElementById("moveableObjects");
//   const svgContainer = document.getElementById("floor-map");
  
//   let viewBox = {
//     x: 0,
//     y: 0,
//     w: svgImage.getAttribute("width"),
//     h: svgImage.getAttribute("height")
//   };
//   svgImage.setAttribute(
//     "viewBox",
//     `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
//   );
//   const svgSize = {
//     w: svgImage.getAttribute("width"),
//     h: svgImage.getAttribute("height")
//   };
//   let isPanning = false;
//   let startPoint = { x: 0, y: 0 };
//   let endPoint = { x: 0, y: 0 };
//   let scale = 1;
  
//   svgContainer.onmousewheel = function(e) {
//     e.preventDefault();
//     let w = viewBox.w;
//     let h = viewBox.h;
//     let mx = e.x; //mouse x
//     let my = e.y;
//     let dw = w * Math.sign(e.deltaY) * 0.05;
//     let dh = h * Math.sign(e.deltaY) * 0.05;
//     let dx = (dw * mx) / svgSize.w;
//     let dy = (dh * my) / svgSize.h;
//     viewBox = {
//       x: viewBox.x + dx,
//       y: viewBox.y + dy,
//       w: viewBox.w - dw,
//       h: viewBox.h - dh
//     };
//     scale = viewBox.w / svgSize.w;
//     svgImage.setAttribute(
//       "viewBox",
//       `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
//     );
//     svgDraggables.forEach(item => {
//       item.fitControlsToSize();
//     });
//   };
  
//   svgContainer.onmousedown = function(e) {
//     isPanning = true;
//     startPoint = { x: e.x, y: e.y };
//   };
  
//   svgContainer.onmousemove = function(e) {
//     if (isPanning) {
//       endPoint = { x: e.x, y: e.y };
//       let dx = (startPoint.x - endPoint.x) * scale;
//       let dy = (startPoint.y - endPoint.y) * scale;
//       let movedViewBox = {
//         x: viewBox.x + dx,
//         y: viewBox.y + dy,
//         w: viewBox.w,
//         h: viewBox.h
//       };
//       svgImage.setAttribute(
//         "viewBox",
//         `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`
//       );
//       svgDraggables.forEach(item => {
//         item.fitControlsToSize();
//       });
//     }
//   };
  
//   svgContainer.onmouseup = function(e) {
//     if (isPanning) {
//       endPoint = { x: e.x, y: e.y };
//       let dx = (startPoint.x - endPoint.x) * scale;
//       let dy = (startPoint.y - endPoint.y) * scale;
//       viewBox = {
//         x: viewBox.x + dx,
//         y: viewBox.y + dy,
//         w: viewBox.w,
//         h: viewBox.h
//       };
//       svgImage.setAttribute(
//         "viewBox",
//         `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
//       );
//       isPanning = false;
//     }
//   };
  
//   svgContainer.onmouseleave = function(e) {
//     isPanning = false;
//   };

})