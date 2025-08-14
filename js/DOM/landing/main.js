function login() {
  // get Username
  const userName = inputUsername.value;
  // store data to local storage
  localStorage.setItem("username", userName);
  // redirect to dashboard
  window.location = "dashboard.html";
}
