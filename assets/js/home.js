//var date=document.getElementById('dates');
//console.log(date);
// var data=date.nodeValue()
//var data=date.value;
//console.log(data);
// var a=date.value();
// console.log(a)
var toggled = false;

var bodyTag = document.querySelector('#main-div');
var circle = document.getElementById('circle');

document.getElementById("toggle").onclick=function(){
    if(!toggled){
        bodyTag.classList.add("bck-color-white");
        circle.style.marginLeft = "51px";
        toggled = true;
    }else{
        bodyTag.classList.remove("bck-color-white");
        circle.style.marginLeft = "1px";
        toggled=false
    }
}