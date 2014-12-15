(function($) {
    var hoveredFlag = 'popover-hovered'
    var delay = 100

    $.fn.mouseoverPopover = function() {
        this.mouseover(function(e) {
            $(this).popover('show').addClass(hoveredFlag)
        })
        .mouseleave(function(e) {
            var item = $(this)
            setTimeout(function() {
                if (item.hasClass(hoveredFlag)) {
                    item.popover('hide')
                }
            }, delay)
        })
        .on('shown.bs.popover', function(e) {
            var item = $(this)
            var popover = $(this).next()
            popover.mouseenter(function(e) {
                item.removeClass(hoveredFlag)
            })
            .mouseleave(function(e) {
                setTimeout(function() {
                    if (!item.hasClass(hoveredFlag)) {
                        item.popover('hide')
                    }
                }, delay)
            })
        })
        return this
    }
}(jQuery))
