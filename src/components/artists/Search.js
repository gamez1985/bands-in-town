import React, { Component } from 'react'
import axios from 'axios';
import {Consumer} from '../../context';

const initialState = {
  artistTitle: ""
};

 class Search extends Component {

 	state = initialState;


 	validate = () => {
	    let artistTitleError = "";

	    if (!this.state.artistTitle) {
	      artistTitleError = "Artist field cannot be blank";
	    }

	    if (artistTitleError) {
	      this.setState({ artistTitleError });
	      return false;
	    }

	    return true;
  	};


 	findArtist = (dispatch,e)=>
 	{
 		e.preventDefault();

 		const isValid = this.validate();	

 		if(isValid)
 		{
 			this.setState({ artistTitleError:'' });
	 		axios.get(`https://rest.bandsintown.com/artists/${this.state.artistTitle}?app_id=${process.env.REACT_APP_BIT_KEY}`)
			.then(res=>{

				//console.log(res.data);

				if(res.data.error || res.data==='')
				{

					dispatch({
						type:'NOT_FOUND',
						message: "No result found. Please try a new search.",
						payload: "",
					});
				}
				else
				{
					localStorage.setItem('searched_artist', JSON.stringify(res.data));

					dispatch({
						type:'FOUND',
						message:"",
						payload: res.data,

					});
				}
			})
			.catch(err=>console.log(err));
		}

 	}
 	onChange=(e)=>
 	{
 		this.setState({[e.target.name]: e.target.value});
 	}

	render() {
		return (
			<Consumer>
			{
				value =>{
					const {dispatch} = value;
					return(
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<i className="fas fa-music"/> Search For an Artist
							</h1>
							<p className="lead text-center">Get the events for any artist</p>
							<form  onSubmit={this.findArtist.bind(this,dispatch)}>
								<div className="form-group">

									<input type="text" className="form-control form-control-lg"
									placeholder="Search artist"
									name="artistTitle"
									value={this.state.artistTitle}
									onChange={this.onChange}
									/>
									{this.state.artistTitleError
									? 
									<div style={{ fontSize: 14, color: "red" }}>
            							{this.state.artistTitleError}
          							</div> : ''
          							}
									
								</div>

								<button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
								Search Artist	
								</button>

							</form>

						</div>	
						);
				}
			}
			</Consumer>
		)
	}
}
export default Search;