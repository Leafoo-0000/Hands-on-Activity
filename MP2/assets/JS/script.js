function searchWord() {
    let str1 =document.getElementById("txtInput").value;
    let str2 =document.getElementById("txtSearch").value;

    if (str1.includes(str2)) {
        found = "Found";
        document.getElementById("txtOutput").innerHTML = found;

    }else{
        found = "Not Found";
        document.getElementById("txtOutput").innerHTML = found;
    }
}