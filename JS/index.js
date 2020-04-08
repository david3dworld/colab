
$(document).ready(function() {

//----------- room shortcuts --------------

        $('.colab').click(function(){
            $('#masterPlan').attr('viewBox' , '0,0,469,499');
        });
    
        $('.present').click(function(){
            $('#masterPlan').attr('viewBox' , '0,0,200,225');
        });
    
        $('.circleCafe').click(function(){
            $('#masterPlan').attr('viewBox' , '0,275,200,225');
        });

//----------- toggle menus --------------

        //button actions 
        var leftToggleButton = $('.left-toggle-button');
            
        //general icons
         svgIcon = $('.svg-icon');
         
        //menu icons 
         areaIcon = $('#area');
         nameIcon = $('#name');
         dateIcon = $('#date');
         resetIcon = $('#reset');
         clearIcon = $('#clear');
         nextIcon = $('#next');
         selectIcon = $('#select');
         groupIcon = $('#group');

        //general SVG paths
         text = $('.text');
         path = $('.path');
         rect = $('.rect');
        
        //individual SVG paths
         areaPath = $('.area-path');
         areaText = $('.area-text');

         namePath = $('.name-path');
         nameText = $('.name-text');

         datePath = $('.date-path');
         dateText = $('.date-text');

         resetPath = $('.reset-path');
         resetText = $('.reset-text');

         clearPath = $('.clear-path');
         clearText = $('.clear-text');

         nextPath = $('.next-path');
         nextText = $('.next-text');

         selectPath = $('.select-path');
         selectText = $('.select-text');

         groupPath = $('.group-path');
         groupRect = $('.group-rect');
         groupText = $('.group-text');

        //menu functions
        leftToggleButton.on('click touch', function() {
        $('.left-gap').toggle();
        });

        areaIcon.on('click touch', function() {
            areaPath.toggleClass('active');
            areaText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                areaPath.addClass('active');
                areaText.addClass('active');
            }
        });

        nameIcon.on('click touch', function() {
            namePath.toggleClass('active');
            nameText.toggleClass('active');

            if (text.not(this).hasClass('active') && path.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                namePath.addClass('active');
                nameText.addClass('active');
            }
        });

        dateIcon.on('click touch', function() {
            datePath.toggleClass('active');
            dateText.toggleClass('active');

            if (text.not(this).hasClass('active') && path.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                datePath.addClass('active');
                dateText.addClass('active');
            }
        });

        resetIcon.on('click touch', function() {
            resetPath.toggleClass('active');
            resetText.toggleClass('active');

            if (text.not(this).hasClass('active') && path.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                resetPath.addClass('active');
                resetText.addClass('active');
            }
        });

        clearIcon.on('click touch', function() {
            clearPath.toggleClass('active');
            clearText.toggleClass('active');

            if (text.not(this).hasClass('active') && path.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                clearPath.addClass('active');
                clearText.addClass('active');
            }
        });

        nextIcon.on('click touch', function() {
            nextPath.toggleClass('active');
            nextText.toggleClass('active');

            if (text.not(this).hasClass('active') && path.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                nextPath.addClass('active');
                nextText.addClass('active');
            }
        });

        nextIcon.on('click touch', function() { //not working....
            nextPath.toggleClass('active');
            nextText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                nextPath.addClass('active');
                nextText.addClass('active');
            }
        });

        groupIcon.on('click touch', function() { //this one has a rectangle
            groupPath.toggleClass('active');
            groupText.toggleClass('active');
            groupRect.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                groupPath.addClass('active');
                groupText.addClass('active');
                groupRect.addclass('active');
            }
        });


//----------- plain draggable --------------

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