import React from 'react';
import axios from 'axios';

import ResultList from './ResultList';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        results: [],
    }

    searchAction = async (term) => {
        const results = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyDkUfdyq7o6LvpG4mmgM_REGLWy5CvBQf8',
                part: 'snippet',
                type: 'video',
                q: term
            }
        });
        this.setState({
            results: results.data.items
        });
    }

    runVideo = (id) => {
        this.setState({
            video: id
        });

    }

    render() {
        let url = "";
        if (this.state.video) {

            url = `https://www.youtube.com/embed/${this.state.video.id.videoId}`
            console.log(this.state.video)

        }
        return (
            <div className="ui container" style={{ marginTop: '20px' }} >
                <SearchBar submithandler={this.searchAction} />

                <div className="ui  grid">

                    <div className="row">
                        <div className="eleven wide column">
                            {this.state.video ?
                                <div>
                                    <iframe
                                        width="100%" height="420px"
                                        title="Video"
                                        src={url}  >
                                    </iframe>
                                    <div className="ui segment">
                                        <h3>{this.state.video.snippet.title}</h3>
                                        <p>{this.state.video.snippet.description}</p>
                                    </div>
                                </div>
                                : <p />}
                        </div>

                        <div className="four wide  centered column">
                            <ResultList videos={this.state.results} cardClick={this.runVideo} />
                        </div>

                    </div>
                </div>



            </div>
        );
    }
}


export default App;