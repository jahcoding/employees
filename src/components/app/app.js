import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id: 1, name: 'Durbek', salary: 2000, increase: true, rise: false},
        {id: 2, name: 'Qahramon', salary: 2500, increase: false, rise: false},
        {id: 3, name: 'Lazizbek', salary: 2000, increase: false, rise: false},
        {id: 4, name: 'Muhammad', salary: 1500, increase:false, rise: false}
      ],
      
    } 
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id)
      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // let newArr = [...before, ...after]
      return{
        data: data.filter((item) => item.id !== id)
      }
    })
  }


  onToggleProps = (id, prop) =>{
    this.setState(({data}) => {
      return {
        data: data.map((item) => {
          if(item.id === id){
            return {...item, [prop]: !item[prop]}
          }
          return item;
        })
      }
    })
  }
  
  addEmployees = (name, salary) => {
    const obj = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({data}) =>{
      let newArr = [...data, obj]

      return {
        data: newArr
      }
    })
  }

  render(){
    let employees = this.state.data.length;
    let increased = this.state.data.filter(item => item.increase).length
    return (
      <div className="app">
          <AppInfo 
            employees={employees}
            increased={increased}
          />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProps={this.onToggleProps}
          />
          <EmployeesAddForm
            addEmployees={this.addEmployees}
          />
      </div>
    );
  }
}

export default App;
