class DOM {
    constructor(selector){
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    };

    $$listeners = {};

    html = html => {
        if(typeof html === 'string'){
            this.$el.innerHTML = html;
            return this;
        };
        return this.$el.outerHTML.trim();
    };

    clear = () => this.$el.html('');

    append = node => {
        if(node instanceof DOM){
         node = node.$el;
        }
        if(Element.prototype.append){
            this.$el.append(node)
        }else{
            this.$el.appendChild(node)
        }
        return this;
    };

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    };

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    };
}

export function $(selector){
    return new DOM(selector)
};

$.create = (tagName, className) => {
    const el = document.createElement(tagName);
    if(className){
        el.classList.add(className);
    };
    return $(el);
};