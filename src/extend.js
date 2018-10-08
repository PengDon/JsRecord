// js继承

const Super = (name)=>{
    this.name = name;
}
Super.prototype.say = ()=>{
    console.log(`this is ${this.name}`);
}
const Child = (name,age)=>{
   Child.prototype = new Super(name);
   this.age = age;
}

let cld = new Child('test',20);
cld.name;
cld.age;
cld.say();
