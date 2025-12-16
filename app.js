const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector(".moon")
const body = document.querySelector("body")
const hLink = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

hLink.forEach(hLink => {
    hLink.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })

});






function send() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var textarea = document.getElementById('textarea').value;
    var sub = document.getElementById('subject').value;
    //var submit =document.getElementsByClassName('contact-form')[0];

    var body = "Name: " + name + "<br> Email: " + email + "<br>Subject: " + sub + "<br> Massage: " + textarea;

    console.log(body)
    console.log("submitted");
    Email.send({
        Host : "smtp.elasticemail.com",
        SecureToken : "a89384eb-be8b-4359-9a54-88c93ac39b7d", 
        To: 'nikhildubey2310@gmail.com',
        From: "nikhildubey2310@gmail.com",
        Subject: sub,
        Body: body
    }).then(
        message => {
            if (message == "OK") {
                swal("Thank You", "Your Data Successfully Recieved", "success");
            }
            else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }

    );
}
            
        
    

function validateForm() {
    // Get form fields values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("textarea").value.trim();

    // Regular expression for validating email format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    // Validate Name: Check if name is empty
    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate Email: Check if email is empty or does not match the pattern
    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Subject: Check if subject is empty
    if (subject === "") {
        alert("Please enter the subject.");
        return false;
    }

    // Validate Message: Check if message is empty
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // If all fields are valid, form will be submitted
    return true;
}



moon.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("dark");
    })
})
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
