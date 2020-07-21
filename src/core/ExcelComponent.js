import {DOMListner} from "@/core/DOMListner";

export class ExcelComponent extends DOMListner{

    constructor($root, options = {}) {
        super($root, options.listeners)
    }

    toHTML(){
        return ''
    };

    init() {
        this.initDOMListeners()
    }

    destroy(){
        this.removeDOMListeners()
    }
}