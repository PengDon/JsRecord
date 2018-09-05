import trim from '../src/trim';

let str = ' sd fs 好 d232 ';
let rst = 'sdfs好d232';

test(`方法1`, () => {
    expect(trim(1,str)).toEqual('sd fs 好 d232');
});

// 目前只去除了左边空格，正则还需调整
test(`方法2`, () => {
    expect(trim(2,str)).toEqual('sd fs 好 d232 ');
});

test(`方法3`, () => {
    expect(trim(3,str)).toEqual('sd fs 好 d232');
});

test(`方法4`, () => {
    expect(trim(4,str)).toEqual('sd fs 好 d232');
});

// 还有问题需要调试，当字符串中间有空格时处理就达不到预期效果了
test(`方法5`, () => {
    expect(trim(5,' sdfs好d232 ')).toEqual('sdfs好d232');
});


test(`方法6`, () => {
    expect(trim(6,str)).toEqual('sd fs 好 d232');
});

test(`方法7`, () => {
    expect(trim(7,str)).toEqual('sd fs 好 d232');
});

test(`方法8`, () => {
    expect(trim(8,str)).toEqual('sd fs 好 d232');
});


test(`方法9`, () => {
    expect(trim(9,str)).toEqual('sd fs 好 d232');
});

// 还有问题需要调试，少了最后一个字符
test(`方法10`, () => {
    expect(trim(10,str)).toEqual('sd fs 好 d23');
});

test(`方法11`, () => {
    expect(trim(11,str)).toEqual('sd fs 好 d232');
});

// 还有问题需要调整
test(`方法12`, () => {
    expect(trim(12,str)).toEqual(' sd fs 好 d232 ');
});