import { Component } from 'react';
import Header from './Header';

class Jokes extends Component {
    state = { jokes: {} };


    componentDidMount() {
        fetch('https://geek-jokes.sameerkumar.website/api?format=json')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message))
    }


    render() {
        const { joke } = this.state.jokes;
        return (

            <div>
                <h2>Highlighted Jokes</h2>
                <p style={{ margin: 20 }}><em>{joke}</em></p>
            </div>
        )
    }
}
export default Jokes;