import React from 'react'
import '../css/SongRow.css'

function SongRow({ track='test' }) {
	return (
		<div className='song-row'>
			<img 
				className='song-row-album'
				src={track.album.images[0].url} 
				alt={track.album.name}
			/>
			<div className='song-row-info'>
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(', ')}
					{track.album.name}
				</p>
			</div>
		</div>
	)
}

export default SongRow
