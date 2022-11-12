class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={bold:"normal", size:16, hidden:"true"}
    }

	handleClick(){
		this.setState({hidden:(this.state.hidden?"false":"true")})
	}
    

    render() {
		var bold=this.state.bold;
		var size=this.state.size;
		var hidden=this.state.hidden;

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={{hidden}}/>
	       <button id="decreaseButton" hidden='true'>-</button>
	       <span id="fontSizeSpan" hidden='true'>{this.props.size}</span>
	       <button id="increaseButton" hidden='true'>+</button>
	       <span id="textSpan" onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

