;(function(win, $) {
    'use strict';
    
    var app = (function() {
        return {
            init : function() {
                this.setElements();
                this.attachEvent();
                // this.setSlide();


                this.onResizeListener();
            },
            setElements : function() {
                this.body = $('body');
                this.header = $('header');
                this.menuBtn = $('header .menu');
                this.nav = $('nav');
                this.slide = $('.main_slide');
                this.qaMenu = $('.qa_menu_item');
            },
            attachEvent : function() {

                this.menuBtn.on('click', $.proxy(this.setMenu, this));
                this.qaMenu.on('click', $.proxy(this.setQaMenu, this));
                $(win).on('scroll', $.proxy(this.setHeader, this));
            },
            onResizeListener: function() {
                var slideItem = $('.slide_item'),
                    slideItemIdx = slideItem.index(),
                    idx = 0;
                
                setTimeout(() => {
                
                    $(slideItem[idx]).css('left','-100%').removeClass('active');
                    $(slideItem[idx+1]).addClass('active');

                    console.log(idx);

                    idx ++;

                    // $(slideItem).find('.active').removeClass('active').next('.slide_item').addClass('active');

                }, 1000);
                
                
            },
            setSlide : function() {
                var slideItem = $('.slide_item'),
                    slideItemIdx = slideItem.index(),
                    idx = 0;

                $(slideItem[idx]).css('left','-100%').removeClass('active').next('.slide_item').addClass('active');

                // Idx++1;

            },
            
            setHeader : function() {
                if( $(document).scrollTop() > 60 ) {
                    if( !this.header.hasClass("fixed") ) this.header.addClass("fixed");
                } else {
                    if(this.header.hasClass("fixed")) this.header.removeClass("fixed");
                }
            },
            setMenu : function(e) {
                var current = $(e.currentTarget);

                this.menuBtn.toggleClass('show');
                this.nav.toggleClass('show');

            },
            setQaMenu : function(e) {
                var current = $(e.currentTarget),
                    currentIdx = current.index(),
                    qaCont = $('.qa_cont');

                if( !current.hasClass('on') ){
                    current.addClass('on').siblings().removeClass('on');
                    $(qaCont[currentIdx]).addClass('on').siblings().removeClass('on');
                } else if(current.hasClass('on')) {
                    current.siblings().removeClass('on');
                }
            }
            
        }
    });
    win.app = app;
    $(function() {
        app().init();
        
    });
})(window, window.jQuery);