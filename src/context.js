import React, { Component }  from 'react';

const Context  = React.createContext();

const reducer  = (state,action)=>{

	switch(action.type)
	{
		case 'FOUND':
		return{
			...state,
			heading:'Search Results',
			artist_list: action.payload,
			message:action.message

		};
		case 'NOT_FOUND':
		return{
			...state,
			heading:'',
			artist_list: action.payload,
			message:action.message

		};
		default:
		return	state;
	}
}

export class Provider extends Component {

	state = {
		artist_list:[],
		heading: 'Last Searched Artist',
		dispatch: action=>this.setState(state=>reducer(state,action))
	}

	componentDidMount()
	{

		if(localStorage.getItem("searched_artist"))
		{	
			this.setState({artist_list: JSON.parse(localStorage.getItem("searched_artist"))});
		}

		

	}


	render() {
		return (
			<Context.Provider value={this.state} >
			{this.props.children}
			</Context.Provider>
		)
	}
}
export const Consumer = Context.Consumer;