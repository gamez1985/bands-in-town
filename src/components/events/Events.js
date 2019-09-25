import React, { Component } from 'react';
import {Consumer} from '../../context';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link, Redirect} from 'react-router-dom';
import Event from '../events/Event';
import Artist from '../artists/Artist';



class Events extends Component {

	state = {
		artist: {},
		events: {},
		redirect: false
	};


	componentDidMount() {
		

		if(!this.props.match.params.artist || 
			!this.props.match.params.id)
		{
			this.setState({
      				redirect: true
    			});
		}

		if(localStorage.getItem("searched_artist") && 
		   localStorage.getItem("artist_events")
		)
		{
			const artist_events = JSON.parse(localStorage.getItem("artist_events"));
			
			console.log(artist_events[0].artist_id);

			const searched_artist = JSON.parse(localStorage.getItem("searched_artist"));
			
			if(searched_artist.id !== this.props.match.params.id
			|| 	searched_artist.name !== this.props.match.params.artist
			)
			{
				this.setState({
      				redirect: true
    			});
			}
			else if(artist_events[0].artist_id === searched_artist.id)
			{
				this.setState({events: JSON.parse(localStorage.getItem("artist_events"))});
			}
			else
			{
				axios.get(`https://rest.bandsintown.com/artists/${this.props.match.params.artist}/events?app_id=${process.env.REACT_APP_BIT_KEY}&date=upcoming`)
				.then(res=>{

						
					if(res.data.error || res.data==='')
					{
						localStorage.removeItem('searched_artist');
						localStorage.removeItem('artist_events');
						this.setState({
      						redirect: true
    					});
					}
					else
					{

						localStorage.setItem('artist_events', JSON.stringify(res.data));
						this.setState({events:res.data});
					}


				})
				.catch(err=>console.log(err));
			}	
		}
		else if(!localStorage.getItem("searched_artist"))
		{
			localStorage.removeItem('artist_events');
			this.setState({
      				redirect: true
    		})
		}
		else if(!localStorage.getItem("artist_events"))
		{
			axios.get(`https://rest.bandsintown.com/artists/${this.props.match.params.artist}/events?app_id=${process.env.REACT_APP_BIT_KEY}&date=upcoming`)
				.then(res=>{

						
					if(res.data.error || res.data==='')
					{
						localStorage.removeItem('searched_artist');
						localStorage.removeItem('artist_events');
						this.setState({
      						redirect: true
    					});
					}
					else
					{

						localStorage.setItem('artist_events', JSON.stringify(res.data));
						this.setState({events:res.data});
					}


				})
				.catch(err=>console.log(err));
		}
		else
		{
			  this.setState({
      				redirect: true
    		})
		}

	}

	render() {

		 if (this.state.redirect) {
		 	return <Redirect to='/' />
		 }	
		 else
		 {
			const {events} = this.state;
			//console.log(events);
			if(events ===undefined || Object.keys(events).length===0)
			{

				return <Spinner/>;
			}
			else
			{
				return (
			
					<Consumer>
					{

						value=>{
							//console.log(value);

							const {artist_list } = value;
							 
						return (


								<React.Fragment>

									<Link to="/" className="btn btn-dark btn-sm mb-4">Back to results</Link>
									
									<div className="row">
										<Artist artist={artist_list} />
									</div>

									<p><strong>{events.length} Upcoming events</strong></p>
									<div className="row">
									{ events.map(item => (
				            			<Event key={item.id} event={item} />
				          			))}
									</div>

								</React.Fragment>
							)
						}

					}
					</Consumer>
					)
			}
		}
	}
}
export default Events;