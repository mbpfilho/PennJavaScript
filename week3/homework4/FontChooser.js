class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	
	this.state={bold:this.props.bold=='true'?"bold":"normal",
         size:Number(this.props.size)<Number(this.props.min)?Number(this.props.min):Number(this.props.size)>Number(this.props.max)?Number(this.props.max):Number(this.props.size), 
        hidden:true,
		min:Number(this.props.min)>0?Number(this.props.min):1,
		max:Number(this.props.max)<Number(this.props.min)?Number(this.props.min):Number(this.props.max),
		check:this.props.bold=='true'?true:false}
    }

	toggleHidden(){
		this.setState({hidden:!this.state.hidden});
	}

	toggleBold(){
		this.setState({bold:this.state.bold=="bold"?"normal":"bold"});
		this.setState({check:!this.state.check})
	}
    
	increaseSize(){
		this.setState({size:this.state.size<this.props.max?this.state.size+1:this.state.max})
	}
	decreaseSize(){
		this.setState({size:this.state.size>this.props.min?this.state.size-1:this.state.min})
	}
	returnSize(){
		this.setState({size:Number(this.props.size)})
	}

    render() {
		var bold=this.state.bold;
		var check=this.state.check;
		var size=this.state.size;
		var sizecolor="black";
        var hide=this.state.hidden;
		if(size==this.props.max||size==this.props.min)sizecolor="red";


	return(
	       <div>
				<input type="checkbox" id="boldCheckbox" hidden={hide} checked={check} onChange={this.toggleBold.bind(this)}/>
				<button id="decreaseButton" hidden={hide} onClick={this.decreaseSize.bind(this)}>-</button>
				<span id="fontSizeSpan" style={{color:sizecolor}} hidden={hide} onDoubleClick={this.returnSize.bind(this)}>{size}</span>
	       		<button id="increaseButton" hidden={hide} onClick={this.increaseSize.bind(this)}>+</button>
	       <span style={{fontSize: size, fontWeight: bold}} id="textSpan" onClick={this.toggleHidden.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}
