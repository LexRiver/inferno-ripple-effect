import { render } from 'inferno';
import Component from 'inferno-component';
import { RippleButton } from "./components/RippleButton";

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {

	// constructor(props, context) {
	// 	super(props, context);
	// }

	public render() {
		return (

			<div>
				<br/>
				<h1>Ripple button example</h1>
				<br/>

				<RippleButton onClick={this.onClick}>First ripple button</RippleButton>
				<br/>
				<br/>
				 
				<RippleButton 
				style={{
					'background': 'silver',
					'border': '0',
					'border-radius': '5px',
					'padding': '10px 30px'
				}}
				onClick={this.onClick}
				
				>
				Second
				</RippleButton>

				<br />
				<br />

				<RippleButton className={'my-ripple-button'}>RippleButton 2</RippleButton>
			</div>
		);
	}

	onClick = () => {
		console.log(`clicked at ${new Date()}`)
	}
}

render(<MyComponent />, container);
