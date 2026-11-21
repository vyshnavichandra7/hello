function validateform()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
if(name==""||phone==""||email=="")
{
alert("fields are empty");
return false;
}
if(!/^[0-9]{10}$.test(phone))
{
alert("enter 10 digits");
return false;
}
alert("registration succesful");
return false;
}
