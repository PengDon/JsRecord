// 求和

/**
 * 方法1
 * sum([1,4,5])  ==> 10
 * @param {*} arr
 * @returns
 */
const sum = (arr) => {
  return eval(arr.join("+"));
} 

/**
 * 方法2
 * sum2([1,4,5])  ==> 10
 * @param {*} arr
 * @returns
 */
const sum2 = (arr) => {
    let n = 0;
    arr.forEach(v => {
        n += v;
    });
    return n;
}

/**
 * 方法3
 * sum3([1,4,5])  ==> 10
 * @param {*} arr
 */
const sum3 = (arr) =>{
   return arr.reduce((prev,cur)=>{
       return prev+cur;
   });
}

/**
 * 方法4
 * sum4(1)(4)(5) ==> 10
 * @param {*} a
 * @returns
 */
const sum4 = (a) =>{
    let fn = (b)=>{
        return sum4(a+b);
    }
    fn.valueOf = () =>{
        return a;
    }
    fn.toString = () =>{
        return '' + a;
    }
    return fn;
}

export {
    sum,
    sum2,
    sum3,
    sum4
}