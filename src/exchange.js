// js 交换两个变量值

// 交换两个变量的值十种方法：
// 第1、6、7、8、10既可以交换简单数据类型也可以交换复杂数据类型的，基本可以确定是任何类型的值。
// 第2，3，4，5，9只可以交换简单数据类型的，基本可以确定是数字类型的值。


// 第1种使用第三方变量
let a=10, b=20,temp=0;
temp=a;//10
a=b;//20
b=temp;//10
console.log(1,a,b);


// 第2种使用这两个变量中的一个变量，使这个变量成为中间者，于是就可以通过这个中间者变换两个数的值 先加再减
let a=10, b=20;
a=a+b;//a=30
b=a-b;//b=10;
a=a-b;//a=20;
console.log(2,a,b);


// 第3种使用这两个变量中的一个变量，使这个变量成为中间者，于是就可以通过这个中间者变换两个数的值 先减再加
let a=10, b=20;
a=a-b;//a=-10;
b=a+b;//b=10;
a=b-a;//a=20;
console.log(3,a,b);


// 第4种使用位运算的方式 
let a=10, b=20;
a =a ^ b;
b =b ^ a;
a =a ^ b;
console.log(4,a,b);


// 第5种还是使用位运算的方式
let a=10, b=20;
a = (b^=a^=b)^a;
console.log(5,a,b);


// 第6种使用对象的方式  也相当于再开辟了一块儿空间
let a=10,b=20;
a={b:a,a:b};
b=a.b;
a=a.a;
console.log(6,a,b);


// 第7种使用数组的方式 也相当于开辟了一块儿空间
let a=10,b=20;
a=[a,b];
b=a[0];
a=a[1];
console.log(7,a,b);


// 第8种使用数组，运用了运算符号的优先级，也相当于开辟了一块儿空间
let a=10,b=20;
a=[b,b=a][0];
console.log(8,a,b);


// 第9种使用运算符的优先级
//a的值先压入栈中，b的值再压入栈中，取出b的值放入a的空间中，再去取出a的值放入b的空间中
let a=10,b=20;
a=b+(b=a)*0;
console.log(9,a,b);


// 第10种使用了新的语法，按照顺序的方式快速赋值
let a=10,b=20;
[a,b]=[b,a];
console.log(10,a,b);