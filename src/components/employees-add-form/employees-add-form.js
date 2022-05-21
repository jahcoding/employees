import react, {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeValue = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onChangeSalaryValue = (e) =>{
    //     this.setState({
    //         salary: e.target.value
    //     })
    // }

    render(){
        let {addEmployees} = this.props;
        let {name, salary} = this.state
        console.log(addEmployees)
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {
                        e.preventDefault()
                        addEmployees(name, salary)
                    }}
                    >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name' 
                        onChange={this.onChangeValue}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        onChange={this.onChangeValue}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;