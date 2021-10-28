function display(num){
    document.getElementById("screen").value+=num //used to cancatiante the values
}
function compute(){
    let x =document.getElementById("screen").value
    let y=eval(x)
    document.getElementById("screen").value=y
}
function Clear(){
    document.getElementById("screen").value=""
}