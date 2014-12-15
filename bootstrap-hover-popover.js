(function($) {
    $.fn.hoverPopover = function(options) {
        var options = $.extend({
            delay: 100,
            class: 'popover-hovered'
        }, options)

        this.mouseover(function(event) {
            $(this).popover('show')
        })
        .mouseleave(function(event) {
            var $this = $(this)
            setTimeout(function() {
                if (!$this.hasClass(options.class)) {
                    $this.popover('hide')
                }
            }, options.delay)
        })
        .on('shown.bs.popover', function(event) {
            var $this = $(this)
            var popover = $this.next()
            popover.mouseenter(function(event) {
                $this.addClass(options.class)
            })
            .mouseleave(function(event) {
                setTimeout(function() {
                    $this
                        .popover('hide')
                        .removeClass(options.class)
                }, options.delay)
            })
        })
        
        return this
    }
}(jQuery))
