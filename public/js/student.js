const axios = window.axios;

const token = sessionStorage.getItem('token');

axios.get('http://localhost:5000/api/student/get-student-result', {
    headers: {
        'x-access-token': token
    }
}).then((response) => {
    const arr = Array.from(response.data);
    console.log(arr);
})