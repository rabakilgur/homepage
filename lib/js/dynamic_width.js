$(document).ready(function(){
    $.fn.textWidth = function(text, font) {

        if ( !$.fn.textWidth.fakeEl ) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);

        $.fn.textWidth.fakeEl.text( text || this.val() || this.text() || this.attr('value')).css('font', font || this.css('font') );

        if ( $.fn.textWidth.fakeEl.text() == "" ) return 85;

        $.fn.textWidth.fakeEl.text( $.fn.textWidth.fakeEl.text().replace(/ /g,".") ); // replace all spaces with dots

        return $.fn.textWidth.fakeEl.width() + 12; // +10px because of padding, +2px for error margin and correction
    };

    $('.width-dynamic').on('input', function() {
        var inputWidth = $(this).textWidth();
        $(this).css({
            width: inputWidth
        })
    }).trigger('input');

    function inputWidth(elem) {
        elem = $(this);
    }

    var targetElem = $('.width-dynamic');
    inputWidth(targetElem);
});
