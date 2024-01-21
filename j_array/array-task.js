// 1~10까지 Array 객체에 담은 후 짝수만 출력
// const numbers = new Array(10).fill(0);
// console.log(numbers.map((data,i)=>i+1).filter((data)=>return data % 2 == 0);
// 한글을 숫자로
// const hangles = ['공','일','이','삼','사','오','육','칠','팔','구'];
// const hangle = ['삼','일','공'];
// console.log(hangle.map((data)=>return hangles.indexOf(data));
// 숫자를 한글로
// const numbers = [0,1,0,4,9];
// console.log(numbers.map((number,i)=>numbers[i] = hangles[number]));
// 1~100까지 합 출력
const datas = new Array(100).fill().map((v, i) => i + 1);
// 앞에 있는 객체에 연산된 값을 담아서 반복 연산한다(누적합)
const total = datas.reduce((x, y) => x + y);
console.log(total);

// let result = 0;
// datas.forEach(v => result += v);
// console.log(result);

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// console.log(result);

// 한글을 숫자로
// const hangle = "공일이삼사오육칠팔구";
// const input = "일공이사".split("");
// console.log(parseInt(input.map(c => hangle.indexOf(c)).join("")))

// 숫자를 한글로
// const hangle = "공일이삼사오육칠팔구";
// const input = "1024".split("");
// const result = input.map(c => hangle[c]).join("")
// console.log(result);
// let input = 1024;
// let result = "";
// while(input != 0){
//   result = hangle[input % 10] + result;
//   input = parseInt(input / 10);
// }

// console.log(result);
