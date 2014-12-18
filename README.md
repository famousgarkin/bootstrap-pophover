# bootstrap-hover-popover

A Bootstrap extension to keep popovers shown while hovered.


## Usage

    $('.pop-me')
    .popover({
        trigger: 'manual'
    })
    .hoverPopover({
        delay: 200
    })

As of now, the popover is required to have `trigger: 'manual'` and behaves like `trigger: 'hover'` after initialized with `hoverPopover`.


## API

### `$().hoverPopover(options)`

Inits hover popover on elements already initialized with Bootstrap popover.

* `options` - type: object
    * `delay` - type: number, default: `250`, how long in ms to keep the popover opened when mouse leaves the popover or source element


## License

MIT
