;(function($) {
    var DEFAULT_OPTIONS = {
        delay: 100,
        klass: 'popover-tip-hovered'
    }

    $.fn.hoverPopover = function(options) {
        var options = $.extend(DEFAULT_OPTIONS, options)

        this.mouseover(function(event) {
            $(this).popover('show')
        })
        .mouseleave(function(event) {
            var $this = $(this)
            setTimeout(function() {
                if (!$this.hasClass(options.klass)) {
                    $this.popover('hide')
                }
            }, options.delay)
        })
        .on('shown.bs.popover', function(event) {
            var $this = $(this)
            var popover = $this.next()
            popover.mouseenter(function(event) {
                $this.addClass(options.klass)
            })
            .mouseleave(function(event) {
                setTimeout(function() {
                    $this
                        .popover('hide')
                        .removeClass(options.klass)
                }, options.delay)
            })
        })

        return this
    }
}(jQuery))
