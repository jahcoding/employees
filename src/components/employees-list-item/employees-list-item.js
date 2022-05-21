import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {

    constructor(props){
        super(props)
        // this.state = {
        //     increase: false,
        //     rise: false
        // }
    }

    // onToggleIncrease = () => {
    //     this.setState(({increase}) => (
    //         {
    //             increase: !increase
    //         }
    //     ))
    // }

    // onToggleRise = () => {
    //     this.setState(({rise}) => (
    //         {
    //             rise: !rise
    //         }
    //     ))
    // }
    
    render(){
        let {name, salary, increase, rise, onDelete, onToggleProps} = this.props;

        let classNames = 'list-group-item d-flex justify-content-between';

        if(increase){
            classNames += ' increase';
        }

        if(rise){
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span 
                    className="list-group-item-label"
                    data-toggle="rise"
                    onClick={onToggleProps}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={"$"+salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        data-toggle="increase"
                        onClick={onToggleProps}
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