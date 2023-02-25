function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    alert("Invalid email or password");
    return false;
  }

  alert("User Logged In sucessfully!")

  // Generate token randomly
  const token = Math.random().toString(36).substring(2, 18);

  const currentUser = {
    name: user.name,
    email: user.email,
    password: user.password,
    token
  };


  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "dashboard.html";
  return false;
}
