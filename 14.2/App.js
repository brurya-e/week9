import React from 'react';

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

    copyToClipBoard = async () => {
        try {
          await navigator.clipboard.writeText(this.state.input);
        } catch (err) {
          console.log(err);
        }
      };
    render() {
        return (
            <div >
                <label for='14.2'>enter some value</label>
                <input
                    ref={this.inputRef}
                    type="text"
                    name='14.2'
                    value={this.state.input}
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button onClick={this.copyToClipBoard}>copy to clipBoard</button>
              
            </div>
        );
    }
}

export default App;
