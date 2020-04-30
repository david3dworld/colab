
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
       
        //added to initiate the floor-map.
        setTimeout(function() {
         $('.colab').trigger('click');
     },10);

//----------- object constraints ------------

        const items = Array.from(document.querySelectorAll('.item'))
        .map(element => new PlainDraggable(element, {onDrag(moveTo)
        {
        const that = this,
        xDir = moveTo.left > that.left ? 1 : moveTo.left < that.left ? -1 : 0,
        yDir = moveTo.top > that.top ? 1 : moveTo.top < that.top ? -1 : 0;
        while (items.some(item => {
        if (item === that || !(
        moveTo.left + that.rect.width > item.left && moveTo.left < item.rect.right &&
        moveTo.top + that.rect.height > item.top && moveTo.top < item.rect.bottom
        )) { return false; }
        const
        xBackLen =
        xDir > 0 ? moveTo.left - (item.left - that.rect.width) :
        xDir < 0 ? item.rect.right - moveTo.left :
        that.rect.width + that.rect.height + item.rect.width + item.rect.height, // Max length
        yBackLen =
        yDir > 0 ? moveTo.top - (item.top - that.rect.height) :
        yDir < 0 ? item.rect.bottom - moveTo.top :
        that.rect.width + that.rect.height + item.rect.width + item.rect.height; // Max length
        if (xBackLen <= yBackLen) {
        moveTo.left += xBackLen * -xDir;
        } else {
        moveTo.top += yBackLen * -yDir;
        }
        return true;
        })) { /* empty */}
        }}));

        const objects = Array.from(document.querySelectorAll('.stationary'))
        .map(element => new PlainDraggable(element, {onDrag(stayThere){
            stayThere.remove();
        }}));

        var remove = document.querySelectorAll('.drag-svg');

// ----- clear modal function -------

        $('#clear-button').click(function(){
            if($("#clearYes").is(':checked')){
                $('.drag-svg').remove();
                $('.modal').modal('hide');
            } else if ($("#clearNo").is(':checked')){
                $('.modal').modal('hide');
            }
        });

        $('#reset-button').click(function(){
            if($("#resetYes").is(':checked')){
                window.location.reload();
                $('.modal').modal('hide');
            } else if ($("#resetNo").is(':checked')){
                $('.modal').modal('hide');
            }
        });

//----------- toggle menus --------------
        //variables...
        //button actions 
        var leftToggleButton = $('.left-toggle-button');

        //modal
        nameModal = $('#name-modal');
            
        //general icons
         svgIcon = $('.svg-icon');
         
        //menu icons 
         areaIcon = $('#area');
         resetIcon = $('#reset');
         clearIcon = $('#clear');
         nextIcon = $('#next');
         chairIcon = $('#chairs');
         tableIcon = $('#tables');
         stoolIcon = $('#stools');

        //general SVG paths
         text = $('.text');
         path = $('.path');
         rect = $('.rect');
        
        //individual SVG paths
         areaPath = $('.area-path');
         areaText = $('.area-text');

         resetPath = $('.reset-path');
         resetText = $('.reset-text');

         clearPath = $('.clear-path');
         clearText = $('.clear-text');

         nextPath = $('.next-path');
         nextText = $('.next-text');

         chairPath = $('.chair-path');
         chairText = $('.chair-text');

         tablePath = $('.table-path');
         tableText = $('.table-text');

         stoolPath = $('.stool-path');
         stoolText = $('.stool-text');

        //menu functions
        leftToggleButton.on('click touch', function() {
        $('.left-gap').toggle();
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
        nextIcon.on('click touch', function() {
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