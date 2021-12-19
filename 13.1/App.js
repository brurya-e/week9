import React from 'react';
import Btn from './componenet/btn/btn'
import  {data}  from './componenet/data.js'


class App extends React.Component {
  
    
    state = {
        names: [],
        birthdays: [],
        datasBefor1990: []

    }
    allNames = () => {

        this.setState({
            names:
                data.map((item) => item.name)
        })
    }
    allbirthday = () => {

        this.setState({
            birthdays:
                data.map((item) => item.birthday)
        })
    }
    allDataBefore1990 = () => {

        this.setState({
            datasBefor1990:
                data.filter((item) => item.birthday.slice(-4) <= '1990')
        })
        console.log(this.state.datasBefor1990)
    }

    render() {
        return (
            <div>
                <Btn
                    onClickFunc={this.allNames}
                    text='allName'
                />
                {this.state.names.map((item, i) =>
                    <p key={i}>
                        {item}
                    </p>
                )}
                <Btn
                    onClickFunc={this.allbirthday}
                    text='allbirthday'
                />
                {this.state.birthdays.map((item, i) =>
                    <p key={i}>
                        {item}
                    </p>
                )}
                <Btn
                    onClickFunc={this.allDataBefore1990}
                    text='all data born before 1900'
                />
                {this.state.datasBefor1990.map((item, i) =>
                    <p key={i}>
                        <p>{item.name}</p>
                        <p>   {item.birthday}</p>
                        <p>    {item.favoriteFoods.meats + ' ,  '}</p>
                        <p>   {item.favoriteFoods.fish + ', '}</p>
                        <br></br>
                    </p>
                    
                )}
            </div>
        );
    }
}

export default App;
