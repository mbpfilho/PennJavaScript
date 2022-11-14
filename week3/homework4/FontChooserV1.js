class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={bold:this.props.bold=='true'?true:false, size:Number(this.props.size)<Number(this.props.min)?Number(this.props.min):Number(this.props.size)>Number(this.props.max)?Number(this.props.max):Number(this.props.size), hidden:true}
    }

	toggleHidden(){
		this.setState({hidden:!this.state.hidden})
	}

	toggleBold(){
		this.setState({bold:!this.state.bold})
	}
    
	increaseSize(){
		this.setState({size:this.state.size<this.props.max?this.state.size+1:max})
	}
	decreaseSize(){
		this.setState({size:this.state.size>this.props.min?this.state.size-1:min})
	}
	returnSize(){
		this.setState({size:Number(this.props.size)})
	}

    render() {
		var bold=this.state.bold?"bold":"normal";
		var check=this.state.bold?"checked":"";
		var size=this.state.size;
		var hidden=this.state.hidden?"none":"inline";
		var sizecolor="black";
		if(size==this.props.max||size==this.props.min)sizecolor="red";
		var min=Number(this.props.min)>0?Number(this.props.min):1;
		var max=Number(this.props.max)<Number(this.props.min)?Number(this.props.min):Number(this.props.max);


	return(
	       <div>
				<input type="checkbox" id="boldCheckbox" style={{display: hidden}} checked={check} onClick={this.toggleBold.bind(this)}/>
				<button id="decreaseButton" style={{display: hidden}} onClick={this.decreaseSize.bind(this)}>-</button>
				<span id="fontSizeSpan" style={{color:sizecolor,display: hidden}} onDoubleClick={this.returnSize.bind(this)}>{size}</span>
	       		<button id="increaseButton" style={{display: hidden}} onClick={this.increaseSize.bind(this)}>+</button>
	       <span style={{fontSize: size+"px", fontWeight: bold}} id="textSpan" onClick={this.toggleHidden.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

