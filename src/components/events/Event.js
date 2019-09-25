import React from 'react';
import Moment from 'react-moment';



 const Event = (props) => {

 	const {event} = props;

 	//console.log(event);

	return (


      <div className="col-md-4">
			<div className="card mb-4 shadow-sm">

				<div className="card-header">
					Event Details
				</div>

				<div className="card-body">

					<ul className="list-group list-group-flush">
					    <li className="list-group-item"><strong>Country</strong>:  {event.venue.country}</li>
					    <li className="list-group-item"><strong>City</strong>:  {event.venue.city}</li>
					    <li className="list-group-item"><strong>Venue</strong>:  {event.venue.name}</li>
					    <li className="list-group-item"><strong>Date</strong>:  <Moment format="DD MMM, YYYY">{event.datetime}</Moment></li>
					  </ul>
					<a className="btn btn-dark btn-sm mt-4" href={event.url} rel="noopener noreferrer" target="_blank">
					Visit Event Page
					</a>
				</div>
			</div>
		</div>


		
	)
}
export default Event;