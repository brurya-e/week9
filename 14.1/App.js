import React from 'react';
import InputText from './inputText/inputText';

class App extends React.Component {
    constructor() {
        super()
        this.inputRef = React.createRef();
        this.state = {
            input: ''
        }
    }
    componentDidMount = () => {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    handleChange = (value) => {
        this.setState({ input: value });
    }
    render() {
        return (
            <div >
                <label for='14.1'>enter some value</label>
                <input
                    ref={this.inputRef}
                    type="text"
                    name='14.1'
                    value={this.state.input}
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                {/* <InputText
                    ref={this.inputRef}
                    name={'14.1'}
                    callBack={this.handleChange}
                    text={'enter some value'}
                    input={this.state.input}
                /> */}
            </div>
        );
    }
}

export default App;
