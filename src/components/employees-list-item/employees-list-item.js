import './employees-list-item.css';
import { Component } from 'react/cjs/react.production.min';

class EmployeesListItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            increase: false,
            rise: false
        }
    }

    onToggleIncrease = () => {
        this.setState(({increase}) => (
            {
                increase: !increase
            }
        ))
    }

    onToggleRise = () => {
        this.setState(({rise}) => (
            {
                rise: !rise
            }
        ))
    }
    
    render(){
        let {name, salary, onDelete} = this.props;

        let classNames = 'list-group-item d-flex justify-content-between';

        if(this.state.increase){
            classNames += ' increase';
        }

        if(this.state.rise){
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span 
                    className="list-group-item-label"
                    onClick={this.onToggleRise}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={"$"+salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                    onClick={this.onToggleIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                            >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;