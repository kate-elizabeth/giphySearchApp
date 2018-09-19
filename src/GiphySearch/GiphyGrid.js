import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../components/Grid/GridContainer';
import GiphyItem from './GiphyItem';

function GiphyGrid(props){
    const {giphyResults} = props;
    
    if(!giphyResults){
        return <GridContainer></GridContainer>;
    }else{
        return (
            <GridContainer>
               {giphyResults.data.map(giphy => {
                    return( <GiphyItem key={giphy.id} giphy={giphy}></GiphyItem>);})}
            </GridContainer>
        );
    }
};

GiphyGrid.propTypes = {
   giphyResults: PropTypes.object,
}

export default GiphyGrid;