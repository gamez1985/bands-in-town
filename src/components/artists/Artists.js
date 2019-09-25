import React, { Component } from 'react';
import {Consumer} from '../../context';
import Artist from '../artists/Artist';

class Artists extends Component {
	render() {
		return (
		
			<Consumer>
			{
				value=>{
					const {artist_list, heading, message } = value;
					//console.log(artist_list);
					if(message)
					{
						return( 
								<div className="alert alert-danger" role="alert">
									{message}
								</div>
							
							)
					}
					else
					{
						if(artist_list!==undefined && artist_list.length !== 0)
						{
							return (
								<React.Fragment>
								<h3 className="text-center mb-4">{heading}</h3>

								<div className="row">
									<Artist artist={artist_list} />
								</div>
								</React.Fragment>
							);
						}	


					}

				}

			}
			</Consumer>
			
		)
	}
}
export default Artists;