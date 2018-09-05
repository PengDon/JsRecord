/**
 * @name 数组去重
 *
 * @param {number} model
 * @param {Array} arr
 */
const removeSome = (model,arr)=>{
    let newArr = []; 
    switch (model) {
      case 1:
        newArr = Array.from(new Set(arr));
        break;
    
      default:
        break;
    }

    return newArr;
}

export default removeSome;