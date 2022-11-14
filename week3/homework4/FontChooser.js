class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={bold:this.props.bold=='true'?true:false,
         size:Number(this.props.size)<Number(this.props.min)?Number(this.props.min):Number(this.props.size)>Number(this.props.max)?Number(this.props.max):Number(this.props.size), 
         hidden:true}
    }

	clickShow(){
        document.getElementById("boldCheckbox").hidden=false;
        document.getElementById("decreaseButton").hidden=false;
        document.getElementById("fontSizeSpan").hidden=false;
        document.getElementById("increaseButton").hidden=false;
		this.setState({hidden:false})
	}
    
	clickHide(){
        document.getElementById("boldCheckbox").hidden=true;
        document.getElementById("decreaseButton").hidden=true;
        document.getElementById("fontSizeSpan").hidden=true;
        document.getElementById("increaseButton").hidden=true;
		this.setState({hidden:true})
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
		var sizecolor="black";
		if(size==this.props.max||size==this.props.min)sizecolor="red";
		var min=Number(this.props.min)>0?Number(this.props.min):1;
		var max=Number(this.props.max)<Number(this.props.min)?Number(this.props.min):Number(this.props.max);


	return(
	       <div>
				<input type="checkbox" id="boldCheckbox" hidden checked={check} onClick={this.toggleBold.bind(this)}/>
				<button id="decreaseButton" hidden onClick={this.decreaseSize.bind(this)}>-</button>
				<span id="fontSizeSpan" style={{color:sizecolor}} hidden onDoubleClick={this.returnSize.bind(this)}>{size}</span>
	       		<button id="increaseButton" hidden onClick={this.increaseSize.bind(this)}>+</button>
	       <span style={{fontSize: size+"px", fontWeight: bold}} id="textSpan"  onClick={this.clickShow.bind(this)} onDoubleClick={this.clickHide.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

