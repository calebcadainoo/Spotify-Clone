import React from 'react'
import '../css/Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({ spotify }) {
	return (
		<div>
			<div className="player-body">
				{/* Side bar */}
				<Sidebar />
				<Body spotify />
			</div>

			<Footer />
		</div>
	)
}

export default Player
