window.onload = function addVideo(){
    if ( window.screen.availWidth > 700 ) {
        document.getElementById("video").innerHTML = "<video autoplay loop preload='auto'><source src='Home.mp4'></video>";
    }
}
$(document).ready(function() {

        // get initial nav height
        var $window = $(window);
        var wst = $window.scrollTop();
        var th = $('div.top').height();
        var images_top = 0;
        var currentSlide = $('body').data( 'current-slide', $('div.slide-container').eq(0) );

        // scrollto for click on slide
        jQuery.fn.scrollTo = function(hash) {
            $this = $(this);
            st = $this.offset().top - th;
            // subtract nav height
            $('html, body').animate({ scrollTop: st }, 550);
        }

        $('body').click(function(e){
                e.preventDefault();
                $this = currentSlide.data( 'current-slide' );
                $next = $this.next('div.slide-container');
                if($next.length) {
                $next.scrollTo($next.attr('id'));
                $('body').data( 'current-slide', $next );
                } else {
                $('div.vi:first').scrollTo($('div.slide-container:first').attr('id'));
                $('body').data( 'current-slide', $('div.slide-container:first'));
                }
                /*$(".slide a").click(function(e) {
                    e.stopPropagation();
                    });*/
                })

});
