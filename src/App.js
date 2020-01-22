/*

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>HEKOOOO</div>
    </div>
  );
}

export default App;
*/
/*
import React, { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://2pzf4f9qxj.execute-api.us-west-2.amazonaws.com/live/item');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}
	render() {
		let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					{dataSource.Items.map(item => (
						<div key={item.CardId}>
							<h1>{item.CardId}</h1>
							<li>{item.CastingCost}</li>
							<li>{item.TextBox}</li>
						</div>
					))}
				</div>
			);
		}
	}
}
export default App;



import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            tasks: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://fd4uqsn5bl.execute-api.us-west-2.amazonaws.com/live/tasks')
        .then(res => res.json())
        .then(json => {
            const tasks = json.map(item => item.Task)
            this.setState({ tasks: tasks })
        });
    }

   
   componentDidMount() {
    fetch('https://fd4uqsn5bl.execute-api.us-west-2.amazonaws.com/live/tasks')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({ tasks: json.tasks });
    });
}
    handleSubmit(e) {
        e.preventDefault();
        const { item, tasks } = this.state;

        fetch('', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: item})
        });

        this.setState({
            item: '',
            tasks: [...tasks, item]
        });
        e.target.reset();
    }

    handleChange(e) {
        this.setState({
            item: e.target.value
        });
    }

    render() {
        const { tasks } = this.state;
        const todos = tasks.map((value, index) => <li key={ index }>{ value }</li>);

        return (
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <label>Task</label>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Enter a todo</button>
                </form>
                <ul>{ todos }</ul>
            </div>
        );
    }
}

export default App;
*/

import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [hasError, setErrors] = useState(false);
  const [tasks, setTasks] = useState({});

  async function fetchData() {
    const res = await     fetch('https://fd4uqsn5bl77.execute-api.us-west-2.amazonaws.com/live/tasks');
    res
      .json()
      .then(res => setTasks(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <span>{JSON.stringify(tasks)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Tasks;

