import React, {Component} from "react";


class TemplateCalculator extends Component {
    state = {
        result :0
    }
    render() {
        const resultStyle = {
            textAlign : "right",
            width: "300px",
            border : "1px solid"

        }
        return (
            <div>
                <div style={resultStyle} >{this.state.result}</div>
            </div>
        )
    }
}

export default TemplateCalculator;