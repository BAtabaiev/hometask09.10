'use strict';

export default class styleString{
    constructor(str, mode){
        this.str = str;
        this.mode = mode;
    }
    changeMode(){
        switch(this.mode){
            case 'lower': return this.str.toLowerCase();
            case 'upper': return this.str.toUpperCase(); 
            case 'reverse': return this.str.split("").reverse().join(""); 
            default: return this.str;   
        }
    }
}