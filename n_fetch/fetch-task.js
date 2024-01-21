// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`response: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((users) => {
//     if (!users || users.length == 0) {
//       throw new Error(`none result`);
//     }
//     return users.map((user) => user.address.zipcode);
//   })
//   .then(console.log)
//   .catch((error) => {
//     console.error(error);
//     console.error("error");
//   });

// await 문법으로 바꾸기
// async function getURL() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// }

// async function getZipcode() {
//   let URLs = await getURL();
//   console.log(
//     URLs.map((data) => {
//       return data.address.zipcode;
//     })
//   );
// }
// getZipcode();

// 강사님 풀이
async function printZipcode() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const zipcodes = users.map((user) => user.address.zipcode);
  console.log(zipcodes);
}

printZipcode();
