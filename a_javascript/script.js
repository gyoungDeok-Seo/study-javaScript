// script-file.html

function change(obj){
  // .includes는 java에서 contain과 같다
  obj.src = obj.src.includes("icon5") ? "icon2.png" : "icon5.png";
}