const form = document.querySelector('#searchForm');
const userSearchInput = document.querySelector('#userInput');

form.addEventListener('submit', async function(evt){
    evt.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params : {q:searchTerm} }
    const response = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
    makeImages(response.data);
    form.elements.query.value = "";
})


const makeImages = (shows)=>{
    for(let result of shows){  //looping over each element in the array    
        console.log(result);
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}

