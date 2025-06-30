
        function formatPerson(person) {
            const { firstName, lastName, age } = person;
            return `${firstName} ${lastName} is ${age} years old.`;
        }

        const person = { firstName: 'John', lastName: 'Doe', age: 30 };
        const result = formatPerson(person);
        console.log(result);


    
