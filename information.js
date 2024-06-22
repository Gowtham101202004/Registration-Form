function details(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("confirmpassword").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    if(name == "" || username == "" || email == "" || phone == "" || gender == "" || pass == "" || cpass == "")
    {
        window.confirm("Fill all the Details");
    }
    else{

        if(pass != cpass){
            window.alert("Password Does not Match !")
        }
        else
        {
            document.writeln(`
                <center>
                    <div style='margin-top:50px; font-size:150%'>
                        Name : ${name}
                        <br><br>
                        Username : ${username}
                        <br><br>
                        Email : ${email}
                        <br><br>
                        Phone Number : ${phone}
                        <br><br>
                        Gender : ${gender}
                    </div>
                </center>`);
        }
    }
}


