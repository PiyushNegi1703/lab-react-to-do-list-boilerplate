import {Component} from 'react';

export default class AddItem extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            userInput : '',
            list : []
        }
    }

    handleChange(e) {
        this.setState({
            userInput : e.target.value
        })
    }

    addItem() {
        if(this.state.userInput !== ''){
            const userInput = {
                id : Math.floor(Math.random()*100),
                value : this.state.userInput
            }

            const list = [...this.state.list];
            list.push(userInput);
    
            this.setState({
                list,
                userInput : ''
            })
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];

        const updateList = list.filter(item => item.id !== key);

        this.setState({
            list : updateList
        })
    }

    render() {
        return(
            <div className='container'>
                <div className='Add' style={{display : "flex", marginBottom : "1vh"}}>
                    <input type="text" placeholder="Type here" id='input-text' value={this.state.userInput} onChange={this.handleChange}/>
                    <div style={{border : "1px solid black",padding : "2px", cursor : "pointer"}} onClick={() => this.addItem()}>Add Item</div>
                </div>

                <div>{this.state.userInput}</div>

                <div id='added-items'>
                    {this.state.list.map(item => {
                        return(
                            <div style={{display : "flex"}}>
                                <input type="text" defaultValue={item.value}/>
                                <div onClick={() => this.deleteItem(item.id)} style={{border : "1px solid black",padding : "2px", cursor : "pointer"}}>Delete Item</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}