
const button1 = document.getElementById("u");



button1.addEventListener("click", function() {
    var randomnumber1=(Math.random()*6)+1;
    randomnumber1=Math.floor(randomnumber1);
    
    
    var ranimg1="dice"+randomnumber1+".png";
    var ranimg1link="images/"+ranimg1;
    document.querySelectorAll("img")[0].setAttribute("src",ranimg1link);
    
    
    var randomnumber2=(Math.random()*6)+1;
    randomnumber2=Math.floor(randomnumber2);
    
    
    var ranimg2="dice"+randomnumber2+".png";
    var ranimg2link="images/"+ranimg2;
    document.querySelectorAll("img")[1].setAttribute("src",ranimg2link);

    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML=a+ " wins";
    }else if(randomnumber1===randomnumber2){ document.querySelector("h1").innerHTML="Tie";}
    else{document.querySelector("h1").innerHTML=b+" wins";}
    

});

var a =prompt("Enter player 1 name");
var b =prompt("Enter player 2 name");

document.querySelector(".j").innerHTML=a;
document.querySelector(".k").innerHTML=b;
