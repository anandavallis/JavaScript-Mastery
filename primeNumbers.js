
        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        function findFirstPrime(numbers) {
            return numbers.find(number => isPrime(number));
        }

        const numbers = [4, 6, 8, 9, 11, 15];
        const result = findFirstPrime(numbers);
        console.log(result);



   
