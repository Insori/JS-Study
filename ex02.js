//typeof - 어떤 타입인지 알려주는 연산자
const number = 123;
console.log(typeof number); //number

const number2 = 123n;
console.log(typeof number2);   //bigint
//bigint - 숫자 데이터 타입의 범위를 넘는 수를 나타날 때 사용

const name = '정우성';  //'' 또는 "" 상관없음
console.log(typeof name);   //string

//` - 백틱
const age = 20;
const job = '개발자';

const msg = '저는 '+job+'이고, '+age+'살 입니다.';
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
//변수는 ${}안에 넣어주면 된다.

console.log(msg);
console.log(msg2);

const isTrue = true;
console.log(typeof isTrue); //boolean - 참과 거짓을 나타내는 타입

//null - 값이 존재하지 않음
//undefined - 값이 아직 지정되지 않았음