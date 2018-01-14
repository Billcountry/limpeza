var toast = function (message) {
    Materialize.toast(message, 6000)
};

function send_message() {
    var sender = document.querySelector("#txt_email").value;
    var phone = document.querySelector("#txt_phone").value;
    var name = document.querySelector("#txt_name").value;
    var message = document.querySelector("#txt_message").value;
    var subject = document.querySelector("#txt_subject").value;
    var data = "";
    data += "From: <a href='mailto:"+sender+"'>"+sender+"</a><br>";
    data += "Phone: <a href='tel:"+phone+"'>"+phone+"</a><br>";
    data += "Name: "+name+"<br>";
    data += "<h4>"+name+"</h4>";
    data += "<p>"+message+"</p>";

    Email.send(name+" <"+sender+">",
        "miltonmwanzia@icloud.com",
        "Web Contact Form: "+subject,
        data,
        {token: "39310210-96da-4a23-89a4-930f87f52b3b"});

    document.forms.message.reset();
    toast("Message Sent.");
}
