import Component from 'inferno-component'
import { RippleEffect } from "./RippleEffect"

//import '../styles/Ripple.scss';

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
			className="ripple" 
			onMouseUp={this.handleClick}
			onTouchend={this.handleClick}
			onKeyUp={this.handleKeyUp}
			style={style}
			{...other}
			>
				{this.props.children}
				<RippleEffect cursorPos={this.state.cursorPos} duration={500} color={'rgba(0,0,0,0.2)'} />
			</button>
		)
	}

	handleClick = (e) => {
		// Get Cursor Position
		let cursorPos = {
			top: e.clientY,
			left: e.clientX,
			time: Date.now()
		}
        //console.log('handleClick, cursorPos=', cursorPos);
		this.setState({ cursorPos: cursorPos })

		// raise parent event
		if(this.props.onClick) {
			if(typeof this.props.onClick != 'function') throw 'this.props.onClick is not a function'
			this.props.onClick()
		}
	}


	handleKeyUp = (e) => {
		// make [spacebar] and [enter] key raise a click event
		//console.log('keyUp event, key=', e.key)
		if(e.key == ' ' || e.key == 'Enter'){
			this.handleClick(e)
		}
	}
}
