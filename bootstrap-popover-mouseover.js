var mouseoverPopover = function(elem) {
    elem = $(elem)
    var mouseleavePopoverHideFlag = 'mouseleave-popover-hide'

    elem.popover({
        placement: 'auto top',
        trigger: 'manual',
        animation: false,
        html: true,
    })
    .mouseover(function(e) {
        $(this).popover('show').addClass(mouseleavePopoverHideFlag)
    })
    .mouseleave(function(e) {
        var item = $(this)
        setTimeout(function() {
            if (item.hasClass(mouseleavePopoverHideFlag)) {
                item.popover('hide')
            }
        }, 100)
    })
    .on('shown.bs.popover', function(e) {
        var item = $(this)
        var popover = $(this).next()
        popover.mouseenter(function(e) {
            item.removeClass(mouseleavePopoverHideFlag)
        }).mouseleave(function(e) {
            setTimeout(function() {
                if (!item.hasClass(mouseleavePopoverHideFlag)) {
                    item.popover('hide')
                }
            }, 100)
        })
    })
}
