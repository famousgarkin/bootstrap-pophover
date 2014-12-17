;(function($) {
    var DEFAULT_OPTIONS = {
        delay: 100
    }

    $.fn.hoverPopover = function(options) {
        var options = $.extend({}, DEFAULT_OPTIONS, options)

        this.each(function() {
            var $this = $(this)
            var popover = $this.data('bs.popover')

            var hovered = false

            $this.mouseover(function(event) {
                $this.popover('show')
            })
            .mouseleave(function(event) {
                setTimeout(function() {
                    if (!hovered) {
                        $this.popover('hide')
                    }
                }, options.delay)
            })
            .on('shown.bs.popover', function(event) {
                popover.$tip.mouseenter(function(event) {
                    hovered = true
                })
                .mouseleave(function(event) {
                    setTimeout(function() {
                        hovered = false
                        $this.popover('hide')
                    }, options.delay)
                })
            })
        })

        return this
    }
}(jQuery))
