export class DOMListner {
    constructor($root){
        if(!$root) throw new Error('No $root provider for DomListener'); return;

        this.$root = $root;
    }
}