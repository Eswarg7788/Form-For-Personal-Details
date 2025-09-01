document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let dob = document.getElementById("dob").value;
  let dobPattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!dobPattern.test(dob)) {
    alert("Enter Date of Birth in dd-mm-yyyy format!");
    return;
  }

  let phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits!");
    return;
  }

  let resume = document.getElementById("resume").files[0];
  if (resume && resume.type !== "application/pdf") {
    alert("Please upload PDF file only!");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
