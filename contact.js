// mailto:studiosmwcontact@gmail.com?subject=subject&body=message&

const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", sendMsg);

const emailLink = "mailto:studiosmwcontact@gmail.com"

function sendMsg(event) {
    event.preventDefault();
    const url = emailLink + "?subject=" + subject.value + "&body=" + "New Message from " + name.value + " A message " + message.value

    console.log(url)
        window.location.href = url;

        subject.value = "";
        name.value = "";
        message.value = "";
}
