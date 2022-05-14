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
        {id: 1, name: 'Durbek', salary: 2000, increase: true},
        {id: 2, name: 'Qahramon', salary: 2500, increase: false},
        {id: 3, name: 'Lazizbek', salary: 2000, increase: false},
        {id: 4, name: 'Muhammad', salary: 1500, increase: false}
      ]
    } 
  }

  onToggleIncrease = (id) =>{
    this.setState(({data}) => {
      return {
        data: data.map((item) => {
          if(item.id === id){
            return{ ...item, increase: !item.increase }
          }
          return item;
        })
      }
    }
      
    )
  }
  
  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data}
            onToggleIncrease={this.onToggleIncrease}
          />
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
