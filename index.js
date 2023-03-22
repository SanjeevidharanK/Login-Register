const Login = document.getElementById('no1');
const register = document.getElementById('no2');

const log_btn = document.getElementById('lo-btn');
const reg_btn = document.getElementById('re-btn');
const close = document.getElementById('clo');
const cl = document.getElementById('clos');

const regis = document.getElementById('regi-btn')



log_btn.onclick = function(){
    Login.style.display="block";
    register.style.display="block"
    Login.style.position = "absolute";
    Login.style.zIndex = "-1";

    register.style.position ="relative";
    register.style.zIndex = "1";
}
reg_btn.onclick = function(){
    Login.style.display="block";
    register.style.display="block";
    register.style.position = "absolute";
    register.style.zIndex = "-1";
    Login.style.transition="transform .5s ease";

    Login.style.position ="relative";
    Login.style.zIndex = "1";
}
regis.onclick = function(){
    Login.style.display="block";
    register.style.display="block"
    register.style.position = "absolute";
    register.style.zIndex = "-1";

    Login.style.position ="relative";
    Login.style.zIndex = "1";
}
close.onclick = function(){
    Login.style.display="none";
    register.style.display="none";


}
cl.onclick = function(){
    Login.style.display="none";
    register.style.display="none";


}
















