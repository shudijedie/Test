let users =[]

//show specific page
function showPage(page){
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

//signup function
function signup(event){
    event.preventDefault();
    const username = document.querySelectorAll('username').value;
    const email = document.querySelectorAll('email').value;
    const mobile = document.querySelectorAll('mobile').value;
    const password = document.querySelectorAll('signupPassword').value;
    const confirmPassword = document.querySelectorAll('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const hashedPassword = btoa(password);
    users.push({ username, email, mobil, password: hashedPassword});
    alert('Signup successful! Please log in.');
    showPage('login');
}

//Login function
function login(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const hashedPassword = btoa(password);

    const user = users.find(user => (user.email === userId || user.mobile === userId) && user.password === hashedPassword);
    if(user){
        document.getElementById('dashboardUserName').textContent = user.username;
        showPage('dashboard');
    } else {
        alert('Invalid login credentials');
    }  
}

//Logout function

function logout(){
    alert('Logging out..');
    showPage('home');
}