import React from 'react';
import chucknorris from '../API/chucknorris';
import Btn from './btn/btn'
import RadioBtn from './radioBtn/radioBtn'

class App extends React.Component {
    state = {
        jock: '',
        Allcategory: [],
        category: ''
    };
    componentDidMount = () => {
        this.showAllCategory();
    }
    showAllCategory = async () => {
        const response = await chucknorris.get(`/categories`);
        this.setState({ Allcategory: response.data });

    };
    onChangeCategory = (data) => {
        this.setState({ category: data });

    }

    onClickJock = async () => {
        const response = await chucknorris.get(`/random?category=${this.state.category}`);
        this.setState({ jock: response.data.value });
    };


    render() {
        return (
            <div >
                {this.state.Allcategory.map((item, i) =>

                    <RadioBtn
                        onChange={this.onChangeCategory}
                        key={i}
                        text={item}
                        checkedFlage={this.state.category === item}
                    />
                )}

                <Btn
                    onClickFunc={this.onClickJock}
                    text='give me a jock'
                />
                <br></br>
                <h1>
                    {this.state.jock}
                </h1>
            </div>
        );
    }
}

export default App;
