import React, { Component } from 'react';
import CardList from './Card-list';
import SearchBox from './Search-Box';
import Scroll from "./Scroll"
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading. . .</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;