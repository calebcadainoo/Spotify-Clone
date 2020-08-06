import React from 'react'
import '../css/Footer.css'
import PlayCircelOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-left'>
				<p>album info</p>
			</div>

			<div className='footer-center'>
				<ShuffleIcon className='footer-green' />
				<SkipPreviousIcon className='footer-icon' />
				<PlayCircelOutlineIcon fontSize='large' className='footer-green' />
				<SkipNextIcon className='footer-icon' />
				<RepeatIcon className='footer-green' />
			</div>

			<div className='footer-right'>
				jaja
			</div>
		</div>
	)
}

export default Footer
