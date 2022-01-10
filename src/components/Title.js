import React, { Component } from 'react';

const TITLES = ['a full-stack engineer', 'a music lover 🎸', 'an enthusiastic learner 📚', 'an adventurer seeker 🏍'];

export class Title extends Component {
    state = { titleIndex: 0 }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: false })
        }, 2000)
        this.animateTitles();
    }
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => {
                this.setState({ fadeIn: false })
            }, 2000)
        }, 4000)
    }
    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> I'm {title}</p>
        )
    }
}