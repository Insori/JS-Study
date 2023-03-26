//산술 연산자
//+, -, *, /, %

console.log(2 ** 3);    //지수 연산자 **

//증감 연산자
let number = 10;
number++;
console.log(number);    //11
number--;
console.log(number);    //10

//비교 연산자
const a = 10;
const b = 20;
console.log(a === b);   //false
console.log(a !== b);   //true

//논리 연산자
const A = 2 < 3;
const B = 30 > 50;
console.log(A && B);    //양 변이 참이어야 참
console.log(A || B);    //둘 중 하나만 참이어도 참
console.log(!A);    //원래의 값을 부정

//삼항 연산자
//조건 ? 참일 때 실행할 문장 : 거짓일 때 실행할 문장
console.log(2 < 3 ? "참" : "거짓"); //참

//Nullish 연산자(널병함 연산자)
const aa = undefined;
const bb = null;
const cc = 'Andy';
console.log(aa ?? bb ?? cc);    //aa와 bb는 undefined, null이기 때문에 넘어가고 cc에는 문자열 값이 확정되어 있으므로 cc를 출력

//비트 연산자 - &, |, ^, <<, >>

//대입 연산자 - +=, -=, *=, /=, %=, **=
let num = 10;
num **= 2;
console.log(num);

