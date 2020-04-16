
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
}); 