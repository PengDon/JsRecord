# trim 与 空白


----------


 - 写法1
 使用两次正则替换，实际速度也非常快.目前chrome对字符串方法进行了疯狂的优化，引起了其他浏览器的跟风，于是正则的实现再也比不了字符串方法了。
 

    function trim(str){
      return str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');
    }

 - 写法2与写法1很相似，但稍慢一点，主要原因是它最先假设至少存在一个空白符。Prototype.js使用的这种实现。不过其名字为strip，因为Prototype的方法都是力求与Ruby同名。
 

    function trim(str){
     return str.replace(/^\s+/,'').replace(/\s\s+$/,'');
    }
    
 - 方法3通过截取方式取得空白部分（并且容许中间存在空白符），总共调用了4个原生方法。设计非常巧妙，substring以两个数字作为参数。Math.max以两个数字作为参数，search返回一个数字。速度上比上面两个方法慢一点，但比方法4-9要快。

    function trim(str){
      return str.substring(Math.max(str.search(/\S/),0),
             str.search(/\S\s*$/)+1);
    }

 - 方法4可以说是方法2的简化版，就是利用候选操作符连接两个正则，但是这样失去了浏览器优化的机会，比不上版本3。由于看起来很优雅，许多类库都使用它，如Jquery与Mootools。

    function trim(str){
      return str.replace(/^\s+|\s+$/g,'');
    }
    

 - 方法5：match如果能匹配到东西会返回一个类数组对象，原字符匹配部分与分组将成为它的元素。为了防止字符串中间的空白符被排除，需要动用到非捕获性分组(?:exp)。由于数组可能为空，还需要进一步判定。好像浏览器在处理分组上比较无力，一个字慢。所以，不要迷信正则，虽然它基本上是万能的。

    function trim(str){
      str = str.match(/\S+(?:\s+\S)*/);
      return str ? str[0] :''; 
    }
    

 - 方法6：把符合要求的部分提取出来，放到一个字符串中，不过效率很差，尤其是在IE6中。
 

    function trim(str){
       return str.replace(/^\s*(\S*(\s+\S+)*)\s*$/,'$1');
    }
    

 - 方法7：与方法6相似，但用了非捕获分组进行了优选，性能比方法6有一点点提升。
 

    function trim(str){
        return str.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/,'$1');
    }
    

 - 方法8：沿着上面的两个思路进行改进，动用了非捕获分组与字符串集合，用“？”顶替了“*”，效果非常惊人。尤其是在IE6中，可以用疯狂来形容这次性能提升，直接秒杀FF3。
 

    function trim(str){
      return str.replace(/^\s*((?:[\S\s]*\S)?)\s*$/,'$1');
    }
    

 - 方法9：这次用懒惰匹配顶替非捕获分组，在火狐中得到改善，IE没有上次那么疯狂。
 

    function trim(str){
       return str.replace(/^\s*([\S\s]*?)\s*$/,'$1');
    }
    

 - 方法10：先把可能的空白符全部列出来，在第一次遍历中砍掉前面的空白，第二次砍掉后面的空白。全过程只用了indexOf与substring这个专门处理字符串而生的原生方法，没有使用到正则。速度快的惊人，估计直逼内部的二进制实现，并且在火狐与IE（其他浏览器当然也毫无疑问）都有良好的表现，速度都是零毫秒级别的，Php.js就收纳了这个方法。
 

    function trim(str){
      var whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\n\\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
      for(var i = 0; i<str.length;i++){
        if(whitespace.indexOf(str.charAt(i)) === -1){
          str = str.substring(i);
          break;
        }
      }
      for(i=str.length-1;i>=0;i--){
        if(whitespace.indexOf(str.charAt(i)) === -1){
          str = str.substring(0,i+1);
          break;
        }
      }
      return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
    }
    

 - 方法11：实现方法10的数字压缩版，前面的空白由正则负责砍掉，后面用原生方法处理，效果不逊于原版，但速度都非常逆天。
 

    function trim(str){
      str = str.replace(/^\s+/,'');
      for(var i = str.length-1; i>=0;i--){
       if(/\S/.test(str.charAt(i))){
         str = str.substring(0,i+1);
         break;
       }
      }
      return str;
    }
    

 -  方法12：针对方法10改进，改进的不是性能速度，而是易记与使用。还存在问题
 

    function trim(str){
      var m = str.length;
      for(var i = -1;str.charCodeAt(++i)<=32;)
      for(var j = m-1;j>i && str.charCodeAt(j) <= 32; j--)
      return str.slice(i,j+1);
    }
