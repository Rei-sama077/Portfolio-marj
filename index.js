function sendMail()
{
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };


const serviceID = "service_bnhyxae";
const templateID = "template_2xhqkro";

emailjs.send(serviceID,templateID,params)
.then(res => { document.getElementById("name").value = "";
               document.getElementById("email").value = "";
               document.getElementById("phone").value = "";
               document.getElementById("message").value = "";
               console.log(res);
               showSuccessNotification();
        })
        .catch((err) => {
            console.log(err);
            alert("Error sending message: " + err.text);
        });
}


function showSuccessNotification() {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="checkmark">✓</div>
        <div class="message">Successfully sent</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}