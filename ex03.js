//배열
const arr = [1,2,3];    //대괄호
console.log(arr[0]);

const arr2 = [1,2,3,[4,5], {name: 'Andy'}]; //배열 안에 배열, 객체를 넣을 수 있다.
console.log(arr2);

//객체
const obj = {   //중괄호
    name: 'Andy', //key: value
    job: 'gamer',
    arr3: [1,2,3],  //배열
    something: {    //object
        name: 'Andy'
    },
};

console.log(obj);
console.log(obj.name);
console.log(obj['name']);

