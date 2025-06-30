      

      <h2>Find Book BY Title</h2>
        function findBookByTitle(books, title) {
            return books.find(book => book.title === title);
        }

        const books = [
            { title: '1984', author: 'George Orwell' },
            { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
        ];
    
        const result = findBookByTitle(books, '1984');
        console.log(result);
        

        
          
