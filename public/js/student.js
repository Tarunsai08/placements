const axios = window.axios;

const token = sessionStorage.getItem('token');

axios.get('http://localhost:5000/api/student/get-student-result', {
    headers: {
        'x-access-token': token
    }
}).then((response) => {
    const arr = Array.from(response.data);
    console.log(arr);
    const container = document.getElementById("cardsContainer");

      arr.forEach((item) => {
        // Create card div
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>Placement Result</h3>
            <p>Selected</p>
            <h3>Company</h3>
            <p>${item.company}</p>
            <h3>LPA</h3>
            <p>${item.package}LPA</p>
            <h3>Batch</h3>
            <p>${item.batch}</p>
         `;

        // Create heart icon here
        console.log(item.package, item.company, item.name, item.batch);

        container.appendChild(card);
      });
})