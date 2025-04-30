// Toggle between Login and Signup forms
function toggleForm(formType) {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    if (formType === "signup") {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    } else {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    }
  }
  
  // Signup functionality
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.some(user => user.email === email);
  
    if (userExists) {
      alert("Account already exists with this email. Please login.");
      toggleForm("login");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login now.");
      toggleForm("login");
    }
  });
  
  // Login functionality
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const matchedUser = users.find(user => user.email === email && user.password === password);
  
    if (matchedUser) {
        alert("Login successful! Welcome, " + matchedUser.name);
        window.location.href = "index.html"; // ← redirect to index.html
      } else {
        alert("Invalid email or password.");
      }
      
  });
  