import React, {Component} from 'react';


const styles = {
    searchInput : {
        margin: 10,
    }  
};

class SearchGiphysInput extends Component  {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
        }
    }
    

    handleChange = (event) => {
        this.setState({searchTerm : event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        if(searchTerm !== ''){
            this.props.onSubmit(event, searchTerm.trim());
        }
    }

    render(){    
        const {searchTerm} = this.state;
        return (
            <div>
                <label >Search Giphys:
                    <input type="text" value={searchTerm} onChange={this.handleChange} style={styles.searchInput}  />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
    
}

export default SearchGiphysInput;

