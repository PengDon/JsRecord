import { tmpdir } from "os";

/**
 * @name 交换两个变量的值
 *
 * @param {number} model 第几个方法
 * @param {any} a
 * @param {any} b
 */
const exChange = (model, a, b) => {
  switch (model) {
    case 1: // 使用了新的语法，按照顺序的方式快速赋值
      [a, b] = [b, a];
      break;
    case 2: // 使用运算符的优先级,a的值先压入栈中，b的值再压入栈中，取出b的值放入a的空间中，再去取出a的值放入b的空间中
      a = b - (b = a) * 0;
      break;
    case 3: // 使用数组，运用了运算符号的优先级，也相当于开辟了一块儿空间
      a = [b, b = a][0];
      break;
    case 4: // 使用位运算的方式
      a = a ^ b;
      b = b ^ a;
      a = a ^ b;
      break;
    case 5: // 使用第三方变量
      let temp=0;
      temp = a;
      a = b;
      b = temp;
      break;
    case 6: // 使用位运算的方式
      a = (b^=a^=b)^a;
      break;

    default:
      // 未知的输入指令
      break;
  }
  return [a, b];
}

export default exChange;