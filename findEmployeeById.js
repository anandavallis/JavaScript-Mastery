
        function findEmployeeById(emplyees,id){
            return emplyees.find(emplyee => emplyee.id === id)
        }  
        const employees = [ 
{ id: 1, name: 'Alice', position: 'Manager' }, 
{ id: 2, name: 'Bob', position: 'Engineer' }, 
{ id: 3, name: 'Charlie', position: 'Technician' } 
]; 
const result = findEmployeeById(employees, 2); 
console.log(result);


     
