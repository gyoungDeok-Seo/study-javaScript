// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
const market = new Object();

function Member(name, age, point) {
  this.name = name;
  this.age = age;
  this.point = point;
}

const member1 = new Member("홍길동", 30, 3500);
const member2 = new Member("이순신", 22, 0);
const member3 = new Member("장보고", 66, 9500);

market.member1 = member1;
market.member2 = member2;
market.member3 = member3;

console.log(market);

// for (let i in market) {
//   console.log(market[i]);
// }

for (let i = 0; i < 3; i++) {
  console.log(market[`member${i + 1}`].point);
}
