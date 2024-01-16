function myFunction() {
    let x = document.getElementById("myText").value;
    let aftTrm = x.trim();
    document.getElementById("demo").innerHTML = aftTrm + "@email.com";
    document.getElementById("gettingUsername").innerHTML =  "your user name = " + aftTrm + "@" + 2002;
    document.getElementById("gettingLength").innerHTML =  "your user name = " + "@" + aftTrm + aftTrm.length;
}        