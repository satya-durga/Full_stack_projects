
let naic=document.querySelector(".naic");
let bar=document.querySelector("#bar");
let nav=document.querySelector(".navbar");
let di=document.querySelectorAll(".ditem h2");
console.log(di)

window.onscroll = () =>{
      
    if(scrollY>30)
    {
        naic.classList.add("active");
    }
    else{
        naic.classList.remove("active");

    }
}
bar.onclick=()=>{
    bar.classList.toggle("fa-times");
    nav.classList.toggle("active");

}


let countDate= new Date('2022 11 12 00:00:00').getTime();
function deal()
{

 var comp=new Date().getTime();
  
    let  gap=comp-countDate;
    let s=1000;
    let min=s*60;
    let hr=min*60;
    let day=hr*24;

    let day1= Math.floor(gap/day);
    let hr1= ((Math.floor(gap/hr))-(day1*24));
    let min1= ((Math.floor(gap/min))-((day1*24*60)+(hr1*60)));
    let s1= (Math.floor(gap/s)-((day1*24*60*60)+(hr1*60*60)+(min1*60)));
    
     di[0].innerText="-"+day1;
    di[2].innerText="-"+min1;
    di[1].innerText="-"+hr1;
    di[3].innerText="-"+s1;
}
  setInterval(function()
{
        deal();
},1000);
