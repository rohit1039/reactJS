import React from 'react';
import { Component } from 'react';
import Projects from './Projects';
import { Title } from './Title';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/ROHIT.jpg';

class App extends Component {

  state = { displayBio: false };


  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <br />
        <br />
        <h1>Hello!</h1>
        <p>My name is Rohit.</p>
        <Title />
        <p>I'm interested in creating react projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Odisha, and code everyday</p>
              <p>My hobbies is singing and I'm a GYM freak.</p>
              <p>I love eating healthy and riding bikes!</p>
              <button className="btn btn-warning" onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) :
            <div>
              <button className="btn btn-primary" onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>

    )
  }
}
export default App;
