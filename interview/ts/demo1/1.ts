// let a: any = 1; // any 任何类型，ts新手，狂用any
// a = "1"; // 不能滥用 , 学会用泛型
// function getFristElement(arr: any[]): any {
//     return arr[0];
// }
// 复用性，函数参数，返回值 指定类型
// const numbers = [1,2,3];
// const firstNum = getFristElement(numbers);
// firstNum?.toFixed(2);

// const strs = ["a","b","c"];
// const firstStr = getFristElement(strs);

// 复用这个函数的同时，传个类型参数

function getFristElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}   

const strings = ['a','b','c'];
const firstStr = getFristElement(strings);// ts 类型推导

// const numbers = [1,2,3];
// const firstNum = getFristElement<number>(numbers);
// firstNum?.toFixed(2);
