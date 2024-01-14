function SendMail()
{
    var params={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_n1f71wn", "template_no29614" , params).then(function(res){
        alert("Success !!");
    })
}
