import React from "react"

class Cell extends React.Component {

    constructor(prop){
        super();
        this.state ={
            color: prop.value
        }
    }

    handleChangeColor = () => {
        let newColor= '#333'
        this.setState({
            color: newColor
        })
    }

    render(){
        return(
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleChangeColor.bind(this)}></div>
        )
    }
}

export default Cell;
