document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let password = document.getElementById("#password").value;
  let confirmPassword = document.getElementById("#confirm-password").value;
  let error = document.getElementById("#error");
  if (password !== confirmPassword) {
    error.innerHTML = "Passwords do not match";
  }
});
