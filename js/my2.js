// ---------------Nhập vào một số, xuất ra số nhỏ hơn------------------
// let a=prompt("Moi nhap vao so a : ");
// let b=prompt("Moi nhap vao so b : ");
// function min(a,b){
//     if(a>=0 && b>=0){
//         if(a>b){
//             alert(b);
//         }if(a<b){
//             alert(a);
//         }
//         if(a=b){
//             alert(a);
//         }
//     }else{
//         if (a<=b){
//             alert(a);
//         }
//         if(a>b){
//             alert(b);
//         }
//         if(a=b){
//             alert(a);
//         }
//     }
// }
// min(a,b);


//------------ Tính số mũ của một số, nếu mũ <0 thì nhập lại-------------
// let a=prompt("Moi nhap vao so a : ");
// let b=prompt("Moi nhap vao so b : ");
// let i; 
// function pow(a,b){
//     if(b>0){
//         let alert=1;
//         for(i=0;i<b;i++){
//             alert *=a;
//         }
//         return alert; 
//     }else{
//         alert(`Moi ban nhap lai !`)
//     }
// }
// alert (pow(a,b));

// -------Thay thế biểu thức hàm---------------------------------------
// let ask=(question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };
// ask(
//    "Do you agree?",
//    function() { alert("You agree."); },
//    function() { alert("You canceled the execution."); }
// );


// --------------Chuyển từ for sang while ---------------------------
// let i=0;
// while(i<3){
//   alert(`number ${i}!`);
//   i++;
// }

// -------------Thêm name, surname. Xóa name -----------------
// let user={
//   name:"Jonh",
// }
// user.surname="Smith";
// user.name="Pete";
// delete user.name;
// alert(user.surname);

// -------------Tính tổng tiền lương của NV----------------- 
// let salaries={
//   John:100,
//   Ann: 160,
//   Pete:130
// }
// let tong=0;
// for(let luong in salaries){
//   tong=tong+ salaries[luong];
// }
// alert(tong);

// --------------Sử dụng hàm kiểm tra Typeof----------------------
let menu ={
    wigth:20,
    heigth:30,
    title:"my menu"
}
function multiplyNumeric(menu){
  for(let size in menu){
    if(typeof menu[size] == 'number'){
      menu[size]=menu[size]*2;
      alert(menu[size]);
    }else{
      alert(menu[size]);
    }
  }
}
multiplyNumeric(menu);


