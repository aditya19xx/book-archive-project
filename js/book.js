const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);


    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
}


const displaySearchResult = docs =>{
    const searchResult = document.getElementById('search-result');
    
    searchResult.innerHTML = `
      
        <h1> Total Search: ${docs.numFound} </h1>
    
        `;
    
    const div = document.createElement('div');
        div.classList.add('col');
        
        

    docs.docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${doc.title}</h5>
                    <p class="card-text">
                    Author Name: ${doc.author_name}
                    <br>
                    Publisher Name: ${doc.publisher}
                    <br>
                    First Publication Year: ${doc.first_publish_year}
                    </p>
                </div>
            </div>

        `;
        searchResult.appendChild(div);
    })
}











































 // const displaySearchResult = docs => { */
//     const searchResult = document.getElementById('search-result');
//     docs.forEach(doc => {
//         console.log(doc);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `

//            <div class="card">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
//                         additional content. This content is a little bit longer.</p>
//                 </div>
//             </div>
//          `;
//          searchResult.appendChild(div);
//         });
// }

