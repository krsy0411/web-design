export default class Animate {
    constructor(selector, option) {
        this.selector = selector;
        // it can be object
        this.option = {duration: 500, ...option};
        // set the start time
        this.startTime = performance.now();
        this.currentValue = null;
        // option has something is called 'value'
        this.isString = typeof this.option.value;
    };
}