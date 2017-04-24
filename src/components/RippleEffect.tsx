import Component from 'inferno-component';

import './RippleEffect.css';

interface Props {
    duration: number
}

interface State {
    animate: boolean
    width: number
    height: number
    top: number
    left: number
}

export class RippleEffect extends Component<Props, State> {

    element: HTMLDivElement = document.createElement('div'); //null

    static get defaultProps() {
        return {
            duration: 1000,
            color: 'rgba(0,0,0,0.2)'
        }
    }

    state: State = {
        animate: false,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    }


    render() {
        let styles = {
            "position": 'absolute',
            "background": this.props.color,
            "border-radius": "50%",
            "opacity": "1",
            "transform": "scale(0)",
            top: this.state.top + "px",
            left: this.state.left + "px",
            width: this.state.width + "px",
            height: this.state.height + "px"
        }
        if (this.state.animate) {
            Object.assign(styles,
                {
                    "animation": `ripple-effect-animation ${this.props.duration}ms linear`
                })
        }


        return (
            <div style={styles} ref={(x) => this.element = x}></div>
        )
    }


    animateRippling(cursorPos) {
        //console.log('animateRippling() cursorPos=', cursorPos)

        // Get the element
        let $button = this.element.parentElement!

        //let buttonStyle = window.getComputedStyle($button)
        let buttonPos = $button.getBoundingClientRect()

        let buttonWidth = $button.offsetWidth
        let buttonHeight = $button.offsetHeight

        // Make a Square Ripple
        let rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth)

        // Make Ripple Position to be center
        let centerize = rippleWidthShouldBe / 2

		this.setState({
			animate: true,
			width: rippleWidthShouldBe,
			height: rippleWidthShouldBe,
			top: cursorPos.top - buttonPos.top - centerize,
			left: cursorPos.left - buttonPos.left - centerize
		})


    }

    componentWillReceiveProps(nextProps) {
        // on click, this component must receive prop.cursorPos
        let cursorPos = nextProps.cursorPos
        //console.log('componentWillReceiveProps: cursorPos=', cursorPos)

        // Prevent Component duplicates do ripple effect at the same time
        if (cursorPos.time !== this.props.cursorPos.time) {
            // If Has Animated, set state to "false" First
            if (this.state.animate) {
                this.setState({ animate: false }, () => {
                    //console.log('******************* second');
                    this.animateRippling(cursorPos)
                })
            }
            //else, Do rippling
            else 
            this.animateRippling(cursorPos)
        }
    }

}

