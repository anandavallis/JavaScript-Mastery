
        function combineUniqueArray(arr1,arr2){
            return [...new Set([...arr1,...arr2])]
        }
        const output= combineUniqueArray([1, 2, 3], [3, 4, 5]);
        console.log(output);
        
   
