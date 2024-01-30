let students = [
    { id: 1, name: "John", lastName:"Doe", age: 20, grade: "A" },
    { id: 2, name: "Jane", lastName:"Smith", age: 22, grade: "B" },
    { id: 3, name: "Bob", lastName:"Jhonson", age: 19, grade: "A" }
];

function addStudent(studentDetail){
    students.push(studentDetail);
} 
addStudent({ id: 4, name: "Nitin", lastName:"Khare", age: 22, grade: "A" })
console.log(students);
console.log();

function updateInfo(id,updation){
    const index = students.findIndex(student => student.id === id)
    if(index !== -1){
        students[index] = {...students[index],...updation}
    }
}

updateInfo(2,{age:24});
console.log(students);