let outPutScreen = document.querySelector('.screen');
function display(num){
    outPutScreen.value += num;
}

function equ(){
    try{
        outPutScreen.value = eval(outPutScreen.value);
    }catch(err){
        alert("Errow is here")
    }
}
function cl(){
    outPutScreen.value = ''
}
function del(){
    outPutScreen.value = outPutScreen.value.slice(0,-1)
}