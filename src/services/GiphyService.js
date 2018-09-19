
class GiphyService {
    constructor(){
        this.API = 'http://api.giphy.com/v1/gifs/search?';
        this.API_KEY = 'brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9';
        this.PAGE_COUNT = 25; 
    }

    fetchGiphys = (searchTerm, currentPage) => {
        return new Promise((resolve, reject) => {
            if(searchTerm !== ""){
                let cachedHits = localStorage.getItem(this.giphyCacheKey(searchTerm, currentPage));
                if(cachedHits){
                    console.log("Loading from cache!");
                    return(resolve(
                        this.buildGiphyResults(searchTerm, currentPage, JSON.parse(cachedHits))
                        ));
                }else{
                    let query = this.buildQuery(searchTerm, currentPage);
                    fetch(query)
                    .then(response => {
                        if(response.ok){
                            return response.json();
                        }else{
                            throw new Error("Something went wrong loading giphys");
                        }
                    })
                    .then(data => resolve(
                        this.handleGiphyResponse(searchTerm, currentPage, data))
                    ).catch(error => reject(error));   
                }  
            } 
        });
    };

    giphyCacheKey = (searchTerm, currentPage) => {
        return searchTerm + currentPage;
    };

    handleGiphyResponse = (searchTerm, currentPage, data) => {
        console.log(data);
        //add to local storage
        localStorage.setItem(this.giphyCacheKey(searchTerm, currentPage), JSON.stringify(data));
        return this.buildGiphyResults(searchTerm, currentPage, data);
    };

    buildGiphyResults = (searchTerm, currentPage, data) => {
        const moreResults = (this.hasMoreResultsAvailable(data)) ? true : false;
        const totalPages = this.countPages(data);
        return {
            giphyResults: data, 
            currentResultsTerm:searchTerm, 
            currentPage:currentPage,
            moreResultsAvailable : moreResults,
            totalPages : totalPages,
        };
    };

    countPages = (data) => {
        const pageData = data.pagination;
        let totalPages = Math.ceil(pageData.total_count/this.PAGE_COUNT);
        return (totalPages);
    };

    hasMoreResultsAvailable = (data) => {
        const pageData = data.pagination;
        return (pageData.total_count > pageData.count + pageData.offset);
    };

    buildQuery = (query, currentPage) => {
        const q = this.formatQuery(query);
        const offset = this.PAGE_COUNT*currentPage;
        return `${this.API}q=${q}&api_key=${this.API_KEY}&offset=${offset}`;
    }

    formatQuery = (query) => {
        return query.replace(' ', '+');
    };

}

export default GiphyService;




