let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

/*let hn = document.getElementById("hn");
let mn = document.getElementById("mn");
let sn = document.getElementById("sn");*/

let t = [];
let rh = 0;
h.style.rotate = "0deg";
m.style.rotate = "0deg";
s.style.rotate = "0deg";

function time(){
    let d = new Date();
    h.style.rotate = (d.getHours()*30) + "deg";
    m.style.rotate = ((d.getMinutes()*6)  + ((d.getSeconds()*6)/60)) + "deg";
    s.style.rotate = ((((d.getMilliseconds()*6)/1000)) + (d.getSeconds()*6)) + "deg";
    let hns = d.getHours();
    let mns = d.getMinutes();
    let sns = d.getSeconds();

    if(sns<10){
        sns = "0" + sns;
    }
    if(mns<10){
        mns = "0" + mns;
    }
    if(hns<10){
        hns = "0" + hns;
    }
    /*hn.innerText =  hns + " :";
    mn.innerText = mns + " :";
    sn.innerText = sns;*/
}
function init(){
    let cont = document.getElementById("container");
    for(let i = 0; i <= 60; i++){
        t.push(document.createElement("div"));
        t[i].style.rotate = ((i*6)) + "deg";
        let inter1 = document.createElement("div");
        inter1.className = "i1";
        let inter2 = document.createElement("div");
        inter2.className = "i2";
        t[i].className = "br";

        if(i%5 == 0){
            inter1.classList.add("big");
            inter2.classList.add("big");
            if(i){
                inter2.innerText = i/5;
                t[i].style.rotate = ((i*6) - 1) + "deg";
            }

        }
        t[i].appendChild(inter1);
        t[i].appendChild(inter2);
        cont.appendChild(t[i]);

    }

}
init()
setInterval(time, 10)