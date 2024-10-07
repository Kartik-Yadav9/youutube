const students = [
    { name: 'Alice', age: 18, grade: 'A' },
    { name: 'Bob', age: 19, grade: 'B' },
    { name: 'Charlie', age: 17, grade: 'C' }
  ];
  
  // Using array destructuring to extract name and grade for each student
  students.forEach(({ name, grade }) => {
    console.log(`${name} has a grade of ${grade}`);
  });






// output

//   Alice has a grade of A
// Bob has a grade of B
// Charlie has a grade of C