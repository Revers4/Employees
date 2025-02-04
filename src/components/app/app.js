import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'John Smith', salary: "1000$", like: false, increase: false, id: 1 },
        { name: 'Ivan Sidarov', salary: "1500$", like: false, increase: false, id: 2 },
        { name: 'Vova Kryukov', salary: "2000$", like: false, increase: false, id: 3 }
      ],
      filterBy: "all",
      searchBy: ""
    }
    this.newId = 4
  }

  onChange = (id, increaseLike) => {
    this.setState(({ data }) => ({
      data: data.map((item) => { if (item.id === id) { return { ...item, [increaseLike]: !item[increaseLike] } } return item }
      )
    }))
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => { if (item.id !== id) { return item } }
      )
    }))
  }

  addEmploye = (name, salary) => {
    const newEmploye = {
      name: name,
      salary: salary,
      like: false,
      increase: false,
      id: this.newId++
    }
    this.setState(({ data }) => ({
      data: [...data, newEmploye]
    }))
  }

  filterEmployees = ( filterBy ) => {
    this.setState(() => ({
      filterBy
    }))
  }

  searchEmployees = ( searchBy ) =>{
    this.setState(() => ({
      searchBy
    }))
  }

  /* Поиск по имени */
  searchArr = ( searchBy, items ) => {
    if(searchBy.length === 0){
      return items
    }
    return items.filter((employe) => employe.name.toLowerCase().includes(searchBy.toLowerCase()))
  }

  /* Фильтры */
  filterArr= ( filterBy, items ) => {
    if(filterBy === "increase"){
      return items.filter(employe => employe.increase)
    } else if(filterBy === "more1000"){
      return items.filter(employe => +employe.salary.slice(0, -1) > 1000) 
    } else { return items }
  }

  render() {
    const { data, filterBy, searchBy } = this.state
    const employeesNumber = data.length
    const increaseArr = data.filter((employe) => employe.increase ).length

    let filterSearchEmployees = this.filterArr(filterBy, this.searchArr(searchBy, data))

    return (
      <div className="app">
        <AppInfo employeesNumber={employeesNumber} increaseNumber={increaseArr} />

        <div className="search-panel">
          <SearchPanel searchEmployees={this.searchEmployees} />
          <AppFilter filterBy={filterBy} filterEmployees={this.filterEmployees} />
        </div>

        <EmployeesList data={filterSearchEmployees} onChange={this.onChange} onDelete={this.onDelete} />
        <EmployeesAddForm addEmploye={this.addEmploye} />
      </div>
    );
  }
}

export default App;