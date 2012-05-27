function refreshBackgroundImages() {
    $('section[data-bg]').each(function() {
        var el = $(this),
            bgImage = el.data('bg') || el.attr('data-bg'),
            attribution = el.data('attribution') || el.attr('data-attribution'),
            attrDiv = $('.attribution', this);

        el.css('background-image', 'url(' + bgImage + ')');

        // if the attribution dif does not exist, then create it
        if (! attrDiv[0]) {
            el.append('<div class="attribution"><a href="attribution" target="_blank">' + attribution + '</a></div>');
        }
    });
}

$(refreshBackgroundImages);