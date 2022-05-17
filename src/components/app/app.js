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
        {id: 1, name: 'Durbek', salary: 2000},
        {id: 2, name: 'Qahramon', salary: 2500},
        {id: 3, name: 'Lazizbek', salary: 2000},
        {id: 4, name: 'Muhammad', salary: 1500}
      ]
    } 
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
  
  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
          />
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
