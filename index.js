function signUp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password are not same");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Enter valid Email");
    return false;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert("User already exist! Please sign up with Different email");
    return false;
  }
  alert("User Sign Up sucessfully!")

  const user = {
    name,
    email,
    password
  };


  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "login.html";
  return false;
}

