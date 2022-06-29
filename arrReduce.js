// reduce를 사용해서 평균 값구하기
// reduce함수 매개변수 자리에 들어가는 고차함수의 매개변수 자리에 index, arr(원본 배열)도 들어갈 수있음.
const numbers = [1,2,3,4,5,6]

const accArr = numbers.reduce((acc, cur, idx, arr) => {
  if(idx === arr.length -1) { // index 와  numbers.length -1(idx ===  el의 길이 -1)가 같다면,
    return (acc + cur) / arr.length;
  }
  return acc + cur; // if문의 조건이 맞기 전까지 return acc + cur 으로 값을 누적 합산
},0)

console.log(accArr)