;(function($) {
    var DEFAULT_OPTIONS = {
        delay: 250
    }

    $.fn.pophover = function(options) {
        var options = $.extend({}, DEFAULT_OPTIONS, options)

        this.each(function() {
            var $this = $(this)
            var popover = $this.data('bs.popover')

            var hideTimeout = new Timeout(function() {
                $this.popover('hide')
            }, options.delay)

            $this.mouseover(function(event) {
                if (!popover.$tip || !popover.$tip.is(':visible')) {
                    $this.popover('show')
                }
                hideTimeout.clear()
            })
            .mouseleave(function(event) {
                hideTimeout.set()
            })

            $this.one('shown.bs.popover', function(event) {
                popover.$tip.mouseenter(function(event) {
                    hideTimeout.clear()
                })
                .mouseleave(function(event) {
                    hideTimeout.set()
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
