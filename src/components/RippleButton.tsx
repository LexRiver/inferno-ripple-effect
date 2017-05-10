import Component from 'inferno-component'
import { RippleEffect } from "./RippleEffect"

interface Props {
	onClick: any
}

interface State {
	cursorPos: any
}

export class RippleButton extends Component<Props, State> {

	state = {
		cursorPos: {}
	}

	render() {
		let {onClick, style, ...other} = this.props;
		if(!style) style = {}
		
		Object.assign(style,{
			'position': 'relative', //can't be static
			'overflow': 'hidden' //required
		})

		return (
			<button
			onMouseUp={this.handleClick}
			onTouchend={this.handleClick}
			onKeyUp={this.handleKeyUp}
			style={style}
			{...other}
			>
				{this.props.children}
				<RippleEffect cursorPos={this.state.cursorPos} duration={500} eventDelay={200} color={'rgba(0,0,0,0.2)'} onAnimationEnd={this.onAnimationEnd.bind(this)} />
			</button>
		)
	}

	onAnimationEnd(){
		// raise parent onClick event
		//console.log('onClick')
		if(this.props.onClick) {
			if(typeof this.props.onClick != 'function') throw 'this.props.onClick is not a function'
			this.props.onClick()
		}
	}

	handleClick = (e) => {
		// Get Cursor Position
		let cursorPos = {
			top: e.clientY,
			left: e.clientX,
			time: Date.now()
		}
		this.setState({ cursorPos })

	}


	handleKeyUp = (e) => {
		// make [spacebar] and [enter] key raise a click event
		//console.log('keyUp event, key=', e.key)
		if(e.key == ' ' || e.key == 'Enter'){
			this.handleClick(e)
		}
	}
}

