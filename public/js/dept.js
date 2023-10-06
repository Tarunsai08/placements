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
 
 let department = 'cse'; // Replace this with the actual department of the coordinator
 
 document.getElementById('view').addEventListener('click', function() {
     let departmentStudents = students.filter(student => student.department === department);
     
     let content = document.getElementById('content');
     
     content.innerHTML = '';
     
     departmentStudents.forEach(student => {
        let studentDiv = document.createElement('div');
         
        studentDiv.className = 'student-list';
        let innerDiv = document.createElement('div');
        innerDiv.className = 'student-item';
        
        innerDiv.innerHTML = 
        `
               <h3>${student.name}</h2>
               <p>Year: ${student.year}</p>
               <p>Package: ${student.package}</p>
        `;
        studentDiv.appendChild(innerDiv)
        content.appendChild(studentDiv);
     });
 });
 
 document.getElementById('report').addEventListener('click', function() {
     let year = prompt('Enter year');
     let package = prompt('Enter package');
     
     let filteredStudents = students.filter(student => (student.year == year || student.package == package));
     
     let content = document.getElementById('content');
     
     content.innerHTML = '';
     
     filteredStudents.forEach(student => {
         let studentDiv = document.createElement('div');
         
         studentDiv.className = 'student-list';
         let innerDiv = document.createElement('div');
         innerDiv.className = 'student-item';
         
         innerDiv.innerHTML = 
         `
                <h3>${student.name}</h2>
                <p>Year: ${student.year}</p>
                <p>Package: ${student.package}</p>
         `;
         studentDiv.appendChild(innerDiv)
         content.appendChild(studentDiv);
     });
 });
 
 