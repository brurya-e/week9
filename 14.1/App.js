import React from 'react';
import InputText from './inputText/inputText';

class App extends React.Component {

    inputRef = React.createRef();


    state = {
        input: ''
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
                <InputText
                    ref={this.inputRef}
                    name={'14.1'}
                    callBack={this.handleChange}
                    text={'enter some value'}
                    input={this.state.input}
                />
            </div>
        );
    }
}

export default App;
