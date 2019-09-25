import React from 'react';
import { Link } from 'react-router-dom';

 const Artist = (props) => {

 	const {artist} = props;

 	//console.log(props);

	return (

            <div className="col-md-3">
		
			<div className="card mb-4 shadow-sm">
			<img className="card-img-top" src={artist.thumb_url} alt={artist.name} />
				<div className="card-body">
					<h5>{artist.name}</h5>
					<p className="card-text">
					<strong><i className="fab fa-facebook-f"></i></strong>:&nbsp;
					{artist.facebook_page_url!=='' ? 
					<a href={artist.facebook_page_url} rel="noopener noreferrer" target="_blank">{artist.facebook_page_url}</a> : '-'}
					<br/>
					<strong>Upcoming Events</strong>:&nbsp;

					{artist.upcoming_event_count>0  ? artist.upcoming_event_count: '-'}
					</p>
					
						{ artist.upcoming_event_count>0 && window.location.href.indexOf("events") === -1 ? <Link to={`/artists/${artist.name}/${artist.id}/events`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right"></i> View Events
						</Link> : ''}
					

					
				</div>
			</div>
		</div>
	)
}
export default Artist;