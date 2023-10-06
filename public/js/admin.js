const axios = window.axios;

console.log(sessionStorage.getItem('token'));

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const studentId = document.getElementById('studentId').value;
    const company = document.getElementById('company').value;
    const salary = document.getElementById('salary').value;

    const data = {
        rollNo: studentId,
        company: company,
        package: salary
    }

    console.log(data);

    axios.post('http://localhost:5000/api/admin/post-result', data, {
        headers: {
            'x-access-token': sessionStorage.getItem('token')
        }
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
})