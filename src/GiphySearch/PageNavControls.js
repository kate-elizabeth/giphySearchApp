import React from 'react';
import PropTypes from 'prop-types';

function PageNavControls(props){

    const {currentPage, moreResultsAvailable, totalPages} = props;

    const handlePrevPage = (e) => {
        const incr = -1;
        props.onUpdatePageResults(e, incr);
    }

    const handleNextPage = (e) => {
        const incr = +1;
        props.onUpdatePageResults(e, incr);
    }
    
    if(currentPage !== undefined){
        return (
            <div align='center' >
                <p>Current page of results: {currentPage+1} of {totalPages}</p>
                {(currentPage > 0) ? <button onClick={handlePrevPage}>Prev Page</button> : <div></div> }
                {(moreResultsAvailable) ? <button onClick={handleNextPage}>Next Page</button> : <div></div> }
            </div>
        );
    }else{
        return <div></div>;
    }
}

PageNavControls.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    moreResultsAvailable: PropTypes.bool.isRequired,
    onUpdatePageResults: PropTypes.func.isRequired,
}
    

export default PageNavControls;
