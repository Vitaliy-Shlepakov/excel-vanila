export class DOMListner {
    constructor($root, listeners = []){
        if(!$root) {
            throw new Error('No $root provider for DomListener');
            return;
        }

        this.$root = $root;
        this.listeners = listeners;
    };

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = `on${listener.charAt(0).toUpperCase()}${listener.slice(1)}`;
            if (!this[method]) return;

            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method].bind(this))
        })
    };

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = `on${listener.charAt(0).toUpperCase()}${listener.slice(1)}`;
            this.$root.off(listener, this[method])
        })
    };
};