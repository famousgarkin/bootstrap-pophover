(function($) {
    $.fn.hoverPopover = function(options) {
        var options = $.extend({
            delay: 100,
            class: 'popover-hovered'
        }, options)

        this.mouseover(function(e) {
            $(this).popover('show').addClass(options.class)
        })
        .mouseleave(function(e) {
            var item = $(this)
            setTimeout(function() {
                if (item.hasClass(options.class)) {
                    item.popover('hide')
                }
            }, options.delay)
        })
        .on('shown.bs.popover', function(e) {
            var item = $(this)
            var popover = $(this).next()
            popover.mouseenter(function(e) {
                item.removeClass(options.class)
            })
            .mouseleave(function(e) {
                setTimeout(function() {
                    if (!item.hasClass(options.class)) {
                        item.popover('hide')
                    }
                }, options.delay)
            })
        })
        return this
    }
}(jQuery))
