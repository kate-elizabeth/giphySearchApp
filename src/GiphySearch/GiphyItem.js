import React from 'react';
import PropTypes from 'prop-types';
import GridItem from '../components/Grid/GridItem';


function GiphyItem(props){
    const {giphy} = props;
    return (
        <GridItem>
            <a href={giphy.url}>
                <img src={giphy.images.fixed_height_small.url} alt={giphy.title}/>
            </a>
        </GridItem>
    );
};

GiphyItem.propTypes = {
   giphy: PropTypes.object,
}

export default GiphyItem;