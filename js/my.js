// let so=prompt("Moi ban nhap vao mot so");
// let ds;
// while(so<2){
//     so=prompt("Moi ban nhap lai");
//     if(so%2==0){
//         ds=true;   
//     }else{
//         ds=false;
//     }
//     console.log(ds);
// }
// let so=0;
// for(i=so;i<=10;i)

let a=prompt("Moi nhap vao so a : ");
let b=prompt("Moi nhap vao so b : ");
function min(a,b){
    // if(a=b){
    //     alert(a);
    // }else{
    //     if(){

    //     }
    // }
    if(a>=0 && b>=0){
        if(a>b){
            alert(b);
        }if(a<b){
            alert(a);
        }
        if(a=b){
            alert(a);
        }
    }else{
        if (a<=b){
            alert(a);
        }
        if(a>b){
            alert(b);
        }
        if(a=b){
            alert(a);
        }
    }
}
min(a,b);

