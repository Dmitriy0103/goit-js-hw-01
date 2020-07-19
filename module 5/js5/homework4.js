'use strict';

class StringBuilder{
    constructor(value){
        this.value = value;
    }
    getValue(value){
        this.value = value;
        return this.value;
    }
    append(str){
        this.str = str;
        return this.value += str;
    }
    prepend(str){
        this.str = str;
        return this.value = str + this.value;
    }
    pad(str){
        this.str = str;
        return this.value = str + this.value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='