const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "login.html";
}

document.getElementById("userName").innerText = currentUser.name;
document.getElementById("email").innerText = currentUser.email;

function changePassword() {
  const oldPassword = document.getElementById("oldPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmNewPassword = document.getElementById("confirmNewPassword").value;

  if (oldPassword === "" || newPassword === "" || confirmNewPassword === "") {
    alert("All fields are Required");
    return false;
  }

  if (newPassword !== confirmNewPassword) {
    alert("New password and Confirm new Password Must be Same");
    return false;
  }

  if (oldPassword !== currentUser.password) {
    alert("Incorrect old password");
    return false;
  }

  currentUser.password = newPassword;

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  alert("Password changed successfully");

  return false;
}

function logOut() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
