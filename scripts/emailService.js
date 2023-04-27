
(function () {
    emailjs.init("kcf52lohD5fRPS9Oo");
})();


document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmail();
  });

  function sendEmail() {
    const form = document.getElementById("my-form");
    const formData = new FormData(form);

    emailjs
      .send("service_do2e1xm", "template_k9hw1gy", Object.fromEntries(formData), "kcf52lohD5fRPS9Oo")
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          window.location.href = "thankyou.html";
          // Add success handling here, e.g., show a success message or reset the form
        },
        (error) => {
          console.log("Email sending failed", error);
          alert("Message failed to send.")
          // Add error handling here, e.g., show an error message
        }
      );
  }