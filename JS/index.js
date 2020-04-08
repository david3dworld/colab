
$(document).ready(function() {

    $('.colab').click(function(){
        $('#masterPlan').attr('viewBox' , '0,0,469,499');
     });

    $('.present').click(function(){
        $('#masterPlan').attr('viewBox' , '0,0,200,225');
    });

   $('.circleCafe').click(function(){
        $('#masterPlan').attr('viewBox' , '0,275,200,225');
     });

     var toggleButton = $('.toggle-button');
     toggleButton.on('click', function() {
       $('.left-gap').toggle();
       $('.svg-icon').toggleClass('active');
     });

     /*
     svg path
     svg text
     svg rect
     
     */

     //plain-draggable

     draggable = new PlainDraggable(document.getElementById('southEastCouch-1'));
     draggable = new PlainDraggable(document.getElementById('southEastCouch-2'));

     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-1'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-2'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-3'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-4'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-5'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-6'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable-7'));

     draggable = new PlainDraggable(document.getElementById('blueStool-1'));
     draggable = new PlainDraggable(document.getElementById('blueStool-2'));
     draggable = new PlainDraggable(document.getElementById('blueStool-3'));
     draggable = new PlainDraggable(document.getElementById('blueStool-4'));
     draggable = new PlainDraggable(document.getElementById('blueStool-5'));
     draggable = new PlainDraggable(document.getElementById('blueStool-6'));
     draggable = new PlainDraggable(document.getElementById('blueStool-7'));
     draggable = new PlainDraggable(document.getElementById('blueStool-8'));
     draggable = new PlainDraggable(document.getElementById('blueStool-9'));
     draggable = new PlainDraggable(document.getElementById('blueStool-10'));
     draggable = new PlainDraggable(document.getElementById('blueStool-11'));
     draggable = new PlainDraggable(document.getElementById('blueStool-12'));
     draggable = new PlainDraggable(document.getElementById('blueStool-13'));
     draggable = new PlainDraggable(document.getElementById('blueStool-14'));
     draggable = new PlainDraggable(document.getElementById('blueStool-15'));
     draggable = new PlainDraggable(document.getElementById('blueStool-16'));
     draggable = new PlainDraggable(document.getElementById('blueStool-17'));
     draggable = new PlainDraggable(document.getElementById('blueStool-18'));
     draggable = new PlainDraggable(document.getElementById('blueStool-19'));
     draggable = new PlainDraggable(document.getElementById('blueStool-20'));
     draggable = new PlainDraggable(document.getElementById('blueStool-21'));
     draggable = new PlainDraggable(document.getElementById('blueStool-22'));

     draggable = new PlainDraggable(document.getElementById('thirtySixInchTable'));

     



    //jquery ui
    
   /* var outerDragStartPos,start, contentWidth = 0;
    var outerDrag = $('.floor-map');

    $(".moveable").draggable({
         containement: "parent",
         cursor: "move",
         scroll: true,
         scrollSensitivity: 1,
         scrollSpeed: 1
    });  */

    //interact

   /*  interact(".moveable").draggable({onmove: dragMoveListener});
    function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    console.log(x);
    console.log(y);
}  */
}); 