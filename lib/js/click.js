$(function() {
    $.easing.easeOutQuart = function(x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    $(document).on('mousedown', '[click]:not([disabled],.disabled), .d-btn:not([disabled],.disabled)', function(e) {
        var button = $(this);
        var touch = $('<div class="clickInnerCircle"><div/>');
        var size = button.outerWidth() * 2;
        var complete = false;
        
        $(document).on('mouseup',function () {
            var a = {
                'opacity': '0'
            };
            if ( complete === true ) {
                size = size * 1.2;
                $.extend(a, {
                    'height': size + 'px',
                    'width': size + 'px',
                    'margin-top': -(size)/2 + 'px',
                    'margin-left': -(size)/2 + 'px'
                });
            }
            
            touch.animate(a, {
                duration: 500,
                easing: 'swing',
                complete: function() { touch.remove() }
            });
        });
        
        touch.css({
            'position': 'absolute',
            'top': e.pageY-button.offset().top + 'px',
            'left': e.pageX-button.offset().left + 'px',
            'width': '0',
            'height': '0'
        });
        
        /* IE8 will not appendChild */
        button.get(0).appendChild(touch.get(0));
        
        touch.animate({
            'height': size + 'px',
            'width': size + 'px',
            'margin-top': -(size)/2 + 'px',
            'margin-left': -(size)/2 + 'px'
        }, {
            queue: false,
            duration: 500,
            'easing': 'easeOutQuart',
            'complete': function() { complete = true }
        });
    });
});