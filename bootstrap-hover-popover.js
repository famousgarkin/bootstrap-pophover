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
                if (!popover.$tip || !popover.$tip.is(':visible')) {
                    $this.popover('show')
                }
            })
            .mouseleave(function(event) {
                setTimeout(function() {
                    if (!hovered) {
                        $this.popover('hide')
                    }
                }, options.delay)
            })

            var timeout = new Timeout(function() {
                hovered = false
                $this.popover('hide')
            }, options.delay)

            $this.one('shown.bs.popover', function(event) {
                popover.$tip.mouseenter(function(event) {
                    timeout.clear()
                    hovered = true
                })
                .mouseleave(function(event) {
                    timeout.set()
                })
            })
        })

        return this
    }

    var Timeout = function(callback, delay) {
        this.callback = callback
        this.delay = delay
        this.timeout = undefined
    }

    Timeout.prototype.set = function() {
        var self = this
        if (this.timeout === undefined) {
            this.timeout = setTimeout(function() {
                self.callback()
                self.timeout = undefined
            }, this.delay)
        }
    }

    Timeout.prototype.clear = function() {
        this.timeout = clearTimeout(this.timeout)
    }
}(jQuery))
