var check = 0;
function change(){
    const a = document.querySelector(".button1");
    a.style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;width: 120px;height: 45px;";
    const b = document.querySelector(".button2");
    b.style="box-shadow: none"; 
}
function changetwo(){
    const a = document.querySelector(".button2");
    const b = document.querySelector(".button1");
    b.style="box-shadow: none"; 
    a.style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;width: 120px;height: 45px;";
}