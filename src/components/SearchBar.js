import React from 'react';

class SearchBar extends React.Component {
    state = { videoURL: '' };

    onInputChanged = (event) => {
        this.setState ( {videoURL:event.target.value} );
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.videoURL);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Video Search:</label>
                    <input type="text" value={this.state.videoURL} onChange={this.onInputChanged}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;