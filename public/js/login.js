const axios = window.axios;

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('submit-button');

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password)
    await login(email, password);
});

const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/signin', {
            email: email,
            password: password
        });
        console.log(response.data.accessToken)
        sessionStorage.setItem('token', response.data.accessToken);
        sessionStorage.setItem('role', response.data.role);

        if (response.data.role === 'admin') {
            window.location.href = '/placements/public/html/admin.html';
        } else if (response.data.role === 'student') {
            window.location.href = '/placements/public/html/student.html';
        }
    } catch (error) {
        console.log(error.response.data.message);
    }
}