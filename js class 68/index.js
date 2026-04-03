 console.log("Harry")
 //let boxes = document.getElementsByClassName("box")
 //console.log(bhupendraJogis)
 //bhupendraJogis[2].style.backgroundColor = "red"
 //document.getElementById("redbox").style.backgroundColor = "red"
 //document.querySelectorAll(".box").style.backgroundColor = "green";
 console.log(document.querySelectorAll(".box"))
 document.querySelectorAll(".box").forEach(e=>{
//console.log(e)
e.style.backgroundColor = "green";
 })