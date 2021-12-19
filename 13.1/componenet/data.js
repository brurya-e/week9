import React from 'react';
import Btn from './btn/btn'
const info = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: 'Johnny',
        birthday: "1-10-1992",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

class data extends React.Component {
    state = {
        names: [],
        birthdays: [],
        datasBefor1990: []

    }
    allNames = () => {

        this.setState({
            names:
                info.map((item) => item.name)
        })
    }
    allbirthday = () => {

        this.setState({
            birthdays:
                info.map((item) => item.birthday)
        })
    }
    allDataBefore1990 = () => {

        this.setState({
            datasBefor1990:
                info.filter((item) => item.birthday.slice(-4) <= '1990')
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

export default data;
