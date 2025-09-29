const loginForm = document.getElementById('loginForm');

if(loginForm){
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password){
      localStorage.setItem('user', username); 
      window.location.href = 'index.html'; 
    } else {
      alert('Please enter valid data');
    }
  });
}

const user = localStorage.getItem("user");
if(!user && window.location.pathname.includes("index.html")){
  alert("Please login first");
  window.location = "login.html";
}

function logout(){
  localStorage.removeItem("user");
  window.location = "login.html";
}

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    backToTop.classList.remove('d-none');
  } else {
    backToTop.classList.add('d-none');
  }
});

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
