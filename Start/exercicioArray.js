

const booksByCategory = [
    {
        category: "wealthy",
        books: [
            {
                title: "O segredo da mente milionaria",
                author: "T. Harv Eker",

            },
            {
                title: "O Homem mais rico da babilonia",
                author: "George S. Clason"
            },
            {   
                title: "Pai Rico, Pai Pobre", 
                author: "Robert T. Kyosaky & Sharon L. Lechter"

            },


        ],        

       

    },
    {
        category: "inteligencia emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }   

                ]

    }
]

const totalCategories = booksByCategory.length

for(let category of booksByCategory) {
    console.log('Total de livros da categoria', category.category)
    console.log(category.books.length)
    
}

function countAuthors()
let authors = [];

for(let category of booksByCategory) {
for(let book of category.books)
    if(authors.indexOf(book.author) == -1) authors.push(book.author);

    console.log("Total de autores", authors.length)

}