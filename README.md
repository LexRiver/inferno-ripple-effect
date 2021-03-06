# Inferno Ripple Effect
[Inferno](https://infernojs.org/) Component to make Google material design ripple effect. It's adopted from [react-ripple](https://github.com/BosNaufal/react-ripple)

[DEMO](https://bosnaufal.github.io/react-ripple)


## How to run example

Just clone or download this repository and run example
```bash
git clone https://github.com/LexRiver/inferno-ripple-effect.git
cd inferno-ripple-effect
npm install
npm start
```
then open localhost:8080 in your browser

<br/>

## Installation

No npm installation yet, just copy ```RippleButton.tsx```, ```RippleEffect.css```, ```RippleEffect.tsx``` to your project and modify them as you need. If you are using ```jsx```, just rename the ```tsx``` files and remove interfaces.

<br/>

## Usage

### Using predefined RippleButton

```jsx
<RippleButton onClick={myEvent}>My ripple button</RippleButton>
```

See [detailed example](./src/index.tsx)

<br/>

### Add ripple effect to any div or your component
Please see [RippleButton](./src/components/RippleButton.tsx) example to create your own component with ripple effect.

The most important steps:
- add RippleEffect child component to your component
```jsx
    <div...>
        <RippleEffect cursorPos={this.state.cursorPos} duration={500} color={'rgba(0,0,0,0.2)'} />
    </div>
``` 
- set style of your component to ```position: relative; overflow: hidden```, position can't be ```static```
- on click event update cursorPos like this
```js
	handleClick = (e) => {
		// Get Cursor Position
		let cursorPos = {
			top: e.clientY,
			left: e.clientX,
			time: Date.now()
		}
		this.setState({ cursorPos: cursorPos })
    }
```

<br/>
<br/>

## Credits
- [react-ripple](https://github.com/BosNaufal/react-ripple)
- [Inferno](https://infernojs.org/)

## License
[MIT](http://opensource.org/licenses/MIT)


