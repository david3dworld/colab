
$(document).ready(function() {

//----------- room shortcuts --------------

        $('.colab').click(function(){
            $('#masterPlan').attr('viewBox' , '0,0,469,499');
        });
    
        $('.present').click(function(){
            $('#masterPlan').attr('viewBox' , '0,0,200,225');
        });

        $('.couchCorner').click(function(){
            $('#masterPlan').attr('viewBox' , '250,170,200,225');
        });
    
        $('.circleCafe').click(function(){
            $('#masterPlan').attr('viewBox' , '0,275,200,225');
        });
//----------- modals --------------

        //$('#ex1').modal();

       /*$('a[data-modal]').click(function(event) {
        $(this).modal();
        return false;
        }); */

//----------- toggle menus --------------
        //variables...
        //button actions 
        var leftToggleButton = $('.leftToggleButton');

        //modal
        nameModal = $('#nameModal');
            
        //general icons
         svgIcon = $('.svgIcon');
         
        //menu icons 
         areaIcon = $('#area');
         nameIcon = $('#name');
         dateIcon = $('#date');
         resetIcon = $('#reset');
         clearIcon = $('#clear');
         nextIcon = $('#next');
         selectIcon = $('#select');
         groupIcon = $('#group');
         moveIcon = $('#move');
         editIcon = $('#edit');
         chairIcon = $('#chairs');
         tableIcon = $('#tables');
         stoolIcon = $('#stools');

        //general SVG paths
         text = $('.text');
         path = $('.path');
         rect = $('.rect');
        
        //individual SVG paths
         areaPath = $('.areaPath');
         areaText = $('.areaText');

         namePath = $('.namePath');
         nameText = $('.nameText');

         datePath = $('.datePath');
         dateText = $('.dateText');

         resetPath = $('.resetPath');
         resetText = $('.resetText');

         clearPath = $('.clearPath');
         clearText = $('.clearText');

         nextPath = $('.nextPath');
         nextText = $('.nextText');

         selectPath = $('.selectPath');
         selectText = $('.selectText');

         groupPath = $('.groupPath');
         groupRect = $('.groupRect');
         groupText = $('.groupText');

         movePath = $('.movePath');
         moveText = $('.moveText');

         editPath = $('.editPath');
         editText = $('.edit-text');
         editRect = $('.editRect');

         chairPath = $('.chairPath');
         chairText = $('.chairText');

         tablePath = $('.tablePath');
         tableText = $('.tableText');

         stoolPath = $('.stoolPath');
         stoolText = $('.stoolText');

        //menu functions
        leftToggleButton.on('click touch', function() {
        $('.leftGap').toggle();
       /* if (svgIcon.not(this)){
            $('.leftGap').toggle();
        } */ //collapse if any other menu button is touched?....
        });

        //area...
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

        //name...
        nameIcon.on('click touch', function() {            

            namePath.toggleClass('active');
            nameText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                namePath.addClass('active');
                nameText.addClass('active');
            }
        });

        //date...
        dateIcon.on('click touch', function() {
            datePath.toggleClass('active');
            dateText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                datePath.addClass('active');
                dateText.addClass('active');
            }
        });

        //reset...
        resetIcon.on('click touch', function() {
            resetPath.toggleClass('active');
            resetText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                resetPath.addClass('active');
                resetText.addClass('active');
            }
        });

        //clear...
        clearIcon.on('click touch', function() {
            clearPath.toggleClass('active');
            clearText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                clearPath.addClass('active');
                clearText.addClass('active');
            }
        });

        //next...
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

        //select...
        selectIcon.on('click touch', function() { //this one has a rectangle
            selectPath.toggleClass('active');
            selectText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                selectPath.addClass('active');
                selectText.addClass('active');
            }
        });


        //group...
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

        //move...
        moveIcon.on('click touch', function() { 
            movePath.toggleClass('active');
            moveText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                movePath.addClass('active');
                moveText.addClass('active');
            }
        });

        //edit...
        editIcon.on('click touch', function() { //this one has a rectangle
            editPath.toggleClass('active');
            editText.toggleClass('active');
            editRect.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                editPath.addClass('active');
                editText.addClass('active');
                editRect.addClass('active');
            }
        });

        //chairs...
        chairIcon.on('click touch', function() { 
            chairPath.toggleClass('active');
            chairText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                chairPath.addClass('active');
                chairText.addClass('active');
            }
        });

        //tables...
        tableIcon.on('click touch', function() { 
            tablePath.toggleClass('active');
            tableText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                tablePath.addClass('active');
                tableText.addClass('active');
            }
        });

        //stools...
        stoolIcon.on('click touch', function() { 
            stoolPath.toggleClass('active');
            stoolText.toggleClass('active');

            if (text.not(this).hasClass('active') || path.not(this).hasClass('active') || rect.not(this).hasClass('active')){
                text.not(this).removeClass('active');
                path.not(this).removeClass('active');
                rect.not(this).removeClass('active');
                stoolPath.addClass('active');
                stoolText.addClass('active');
            }
        });



//----------- plain draggable --------------

     draggable = new PlainDraggable(document.getElementById('southEastCouch1'));
     draggable = new PlainDraggable(document.getElementById('southEastCouch2'));

     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable1'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable2'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable3'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable4'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable5'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable6'));
     draggable = new PlainDraggable(document.getElementById('twentytwoInchTable7'));

     draggable = new PlainDraggable(document.getElementById('blueStool1'));
     draggable = new PlainDraggable(document.getElementById('blueStool2'));
     draggable = new PlainDraggable(document.getElementById('blueStool3'));
     draggable = new PlainDraggable(document.getElementById('blueStool4'));
     draggable = new PlainDraggable(document.getElementById('blueStool5'));
     draggable = new PlainDraggable(document.getElementById('blueStool6'));
     draggable = new PlainDraggable(document.getElementById('blueStool7'));
     draggable = new PlainDraggable(document.getElementById('blueStool8'));
     draggable = new PlainDraggable(document.getElementById('blueStool9'));
     draggable = new PlainDraggable(document.getElementById('blueStool10'));
     draggable = new PlainDraggable(document.getElementById('blueStool11'));
     draggable = new PlainDraggable(document.getElementById('blueStool12'));
     draggable = new PlainDraggable(document.getElementById('blueStool13'));
     draggable = new PlainDraggable(document.getElementById('blueStool14'));
     draggable = new PlainDraggable(document.getElementById('blueStool15'));
     draggable = new PlainDraggable(document.getElementById('blueStool16'));
     draggable = new PlainDraggable(document.getElementById('blueStool17'));
     draggable = new PlainDraggable(document.getElementById('blueStool18'));
     draggable = new PlainDraggable(document.getElementById('blueStool19'));
     draggable = new PlainDraggable(document.getElementById('blueStool20'));
     draggable = new PlainDraggable(document.getElementById('blueStool21'));
     draggable = new PlainDraggable(document.getElementById('blueStool22'));

     draggable = new PlainDraggable(document.getElementById('thirtySixInchTable'));

     
    //jquery ui
    
   /* var outerDragStartPos,start, contentWidth = 0;
    var outerDrag = $('.floorMap');

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