class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={bold:"normal", size:16, hidden:true}
    }

	toggle(){
		this.setState({hidden: !this.state.hidden})
	}
    

    render() {
		var bold=this.state.bold;
		var size=this.state.size;
		var hidden=this.state.hidden?"none":"inline";

	return(
	       <div>
			<div style={{display: hidden}}>
				<input type="checkbox" id="boldCheckbox" />
				<button id="decreaseButton">-</button>
				<span id="fontSizeSpan">{this.props.size}</span>
	       <button id="increaseButton">+</button>
			</div>
	       <span id="textSpan" onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

