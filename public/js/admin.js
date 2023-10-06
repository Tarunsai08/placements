const axios = window.axios;

const submit = document.getElementById('submit');

axios.get('http://localhost:5000/api/admin/get-result', {
    headers: {
        'x-access-token': sessionStorage.getItem('token')
    }
}).then((res) => {
    const arr = Array.from(res.data);
    arr.forEach((element) => {
        console.log(element);
        const rows = document.querySelector(".table-body");
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${element.rollNo}</td>
            <td>${element.company}</td>
            <td>${element.package}</td>
            `;
        rows.appendChild(row);
    });

})

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
        window.location.reload();
    })
    .catch((err) => {
        console.log(err);
    })
})