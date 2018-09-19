import React, {Component} from 'react';

import GiphyGrid from './GiphyGrid';
import SearchGiphysInput from './SearchGiphysInput';
import PageNavControls from './PageNavControls';
import GiphyService from '../services/GiphyService';
import Error from './Error';

class GiphySearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            giphyResults: null,
            currentPage: undefined,
            currentResultsTerm: "",
            moreResultsAvailable: false,
            totalPages: 0,
            error: undefined,
        };
    }

    fetchGiphys = (searchTerm, pageIndex) => {
        this.GiphyService.fetchGiphys(searchTerm, pageIndex)
        .then(data => this.setGiphyResults(data))
        .catch(error => this.setState({ error: error}));
    };

    setGiphyResults = (giphyResultData) => {
        const {giphyResults, currentPage, currentResultsTerm, moreResultsAvailable, totalPages} = giphyResultData;
        this.setState({
            giphyResults:giphyResults,
            currentPage: currentPage,
            currentResultsTerm: currentResultsTerm,
            moreResultsAvailable: moreResultsAvailable,
            totalPages: totalPages,
        });
    };

    componentDidMount = () => {
        this.GiphyService = new GiphyService();
    };

    handleSearchSubmit = (e , searchTerm) => {
        this.fetchGiphys(searchTerm, 0);
    };

    /**
     * val int value indicates by what amount to update the current page results
     * val === 1 to increment page, val === -1 to decrement page
    **/
     handleUpdatePageResults = (e, val) => {
        const nextPageIndex = this.state.currentPage+val;
        this.fetchGiphys(this.state.currentResultsTerm, nextPageIndex);
    };

    render(){
        const {giphyResults, currentPage, currentResultsTerm, moreResultsAvailable, totalPages, error} = this.state;
        if(error){
            return(<Error></Error>);
        }
        if(currentPage !== undefined){
            return (
                <div>
                    <div>
                        <SearchGiphysInput onSubmit={this.handleSearchSubmit} />
                        <p>Displaying Results for: {currentResultsTerm}</p>
                    </div>
                    <div>
                        <GiphyGrid giphyResults={giphyResults}></GiphyGrid>
                        <PageNavControls 
                            currentPage={currentPage} 
                            moreResultsAvailable={moreResultsAvailable} 
                            onUpdatePageResults={this.handleUpdatePageResults}
                            totalPages={totalPages}>
                        </PageNavControls>
                    </div>                   
                </div>
            );
        }else{
            return(
                <div>
                    <SearchGiphysInput onSubmit={this.handleSearchSubmit} />
                </div>  
            );
        }
    }
}

GiphySearch.propTypes = {
   
};

export default GiphySearch;
