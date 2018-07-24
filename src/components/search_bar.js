//This is a functional Component
//It has no internal book keeping
import React, {Component} from 'react';

class SearchBar extends Component {
    
    //Class based component, they have a constructor
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    //Controlled field is a form element whos value is set by the state
    //input changing tells state that needs to change
    //state should tell current input it should do

    //class always has a render() method
    render(){
        //When event handler is called, it is a input handler
        //Alway manipulate state using this.setState
        //Reference javascript value, in this case state, using this.state.variable
        //input is a controlled component so input changes when state changes
        return(
            <div className = "search-bar">
                <input 
                    value = {this.state.term}
                    onChange = {(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }


    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;