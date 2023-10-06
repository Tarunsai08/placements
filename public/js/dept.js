const axios = window.axios;

let students = [
    {
        name:"Tarun",
        year:"2025",
        package:"10",
        department:"cse"
    },
    {
        name:"Ram",
        year:"2024",
        package:"20",
        department:"mech"
    },
    {
        name:"hi",
        year:"2025",
        package:"10",
        department:"cse"
    },
    {
        name:"hello",
        year:"2025",
        package:"10",
        department:"it"
    }
 ];

let department = 'cse';
axios.get('http://localhost:5000/api/department/get-department-result', {
    headers: {
        'x-access-token': sessionStorage.getItem('token')
    }
}). then((response) => {
    students = Array.from(response.data);
    console.log(students);
})


 
 // Replace this with the actual department of the coordinator
 
 document.getElementById('view').addEventListener('click', function() {
     let content = document.getElementById('content');
     
     content.innerHTML = '';
     
     students.forEach(student => {
         console.log(student);
         let studentDiv = document.createElement('div');

         studentDiv.className = 'student';
         
         studentDiv.innerHTML = `
             <h2>Roll No: ${student.rollNo}</h2>
             <p>Company: ${student.company}</p>
             <p>Package: ${student.package}</p>
         `;

         content.appendChild(studentDiv);
     });
 });

setTimeout(function(){
    document.getElementById('view').click();
}, 1000);

 /*
 document.getElementById('report').addEventListener('click', function() {
     let year = prompt('Enter year');
     let salary = prompt('Enter package');
     
     let filteredStudents = students.filter(student => (student.year == year || student.package == salary));

     let content = document.getElementById('content');
     
     content.innerHTML = '';
     
     students.forEach(student => {
         let studentDiv = document.createElement('div');

         studentDiv.className = 'student';

         studentDiv.innerHTML = `
             <h2>Roll No: ${student.name}</h2>
             <p>Year: ${student.year}</p>
             <p>Package: ${student.package}</p>
         `;
         content.appendChild(studentDiv);
     });
 });
 */
 