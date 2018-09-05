/**
 * @name 数组去重
 *
 * @param {number} model
 * @param {Array} arr
 */
const removeSome = (model,arr)=>{
    let newArr = []; 
    switch (model) {
      case 1: // 使用了ES6新增的set数据解构的去重特性，然后在将生成的set对象转换成数组d
        newArr = Array.from(new Set(arr));
        break;
    
      default:
        break;
    }

    return newArr;
}

export default removeSome;