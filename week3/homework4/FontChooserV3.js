class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={bold:this.props.bold=='true'?true:false,
         size:Number(this.props.size)<Number(this.props.min)?Number(this.props.min):Number(this.props.size)>Number(this.props.max)?Number(this.props.max):Number(this.props.size), 
         hidden:false}
    }

	toggleHidden(){
		this.setState({hidden:!this.state.hidden});
        document.getElementById("boldCheckbox").hidden=this.state.hidden;
        document.getElementById("decreaseButton").hidden=this.state.hidden;
        document.getElementById("fontSizeSpan").hidden=this.state.hidden;
        document.getElementById("increaseButton").hidden=this.state.hidden;
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
        var sizepx=size+"px";
		var sizecolor="black";
		if(size==this.props.max||size==this.props.min)sizecolor="red";
		var min=Number(this.props.min)>0?Number(this.props.min):1;
		var max=Number(this.props.max)<Number(this.props.min)?Number(this.props.min):Number(this.props.max);


	return(
	       <div>
				<input type="checkbox" id="boldCheckbox" hidden="true" checked={check} onClick={this.toggleBold.bind(this)}/>
				<button id="decreaseButton" hidden="true" onClick={this.decreaseSize.bind(this)}>-</button>
				<span id="fontSizeSpan" style={{color:sizecolor}} hidden="true" onDoubleClick={this.returnSize.bind(this)}>{size}</span>
	       		<button id="increaseButton" hidden="true" onClick={this.increaseSize.bind(this)}>+</button>
	       <span style={{fontSize: sizepx, fontWeight: bold}} id="textSpan" onClick={this.toggleHidden.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

