function replaceAll() {
    let str1 =document.getElementById("txtInput").value;

    let newStr = str1.replaceAll(' ', '');
    document.getElementById("txtOutput").innerHTML = newStr;
}


