
//math.random function() generate random number between the range 0===>1 floating value

//Math.random()*(HN-LN)+LN
//floor===>it is a function which is capable of removing floating number.


function OTP()
{
    var result=Math.random()*(999999-10000)+10000
    var OTP=Math.floor(result)   
    console.log(OTP)
    var username=document.getElementById("input1").value
    var phone=document.getElementById("phone").value
    console.log(phone)
    document.getElementById("output").innerHTML="Dear "+username+" your phone number is-"+phone+"and your OTP is"+OTP
}
