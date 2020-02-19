import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      coures_modules: [
        // { id: 1, title: '1. Learning Judo.', desctrption: 'lorem ipsum', active: false },
        // { id: 2, title: '2. Learning Aikido.', desctrption: 'lorem ipsum', active: false },
        // { id: 3, title: '3. Learning Ruby on Rails. ', desctrption: 'lorem ipsum', active: false },
        // { id: 4, title: '4. Learning React and Taro.', desctrption: 'lorem ipsum', active: false },
      ]
    }
  }

  componentDidMount () {
    axios.get('/episodes.json')
    .then(data => {
      // debugger
      let res = []
      data.data.data.map((data) =>{
        res.push({id: data.id, title: data.title, description: data.description, active: false})

        this.setState({coures_modules: res})
      })
    })
    .catch(data => {
      // debugger
    })
  }

  handleVideoChange(item, event){
    event.preventDefault()

    let coures_modules = [...this.state.coures_modules]

    coures_modules.map( data => {
      data.active = false
    })


    item.active = !item.active

    coures_modules[item.id - 1] = item


    // console.log(coures_modules)
    // debugger

    this.setState({coures_modules})

  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table handleVideoChange={this.handleVideoChange.bind(this)} coures_modules={this.state.coures_modules} />
      </div>
    )
  }
}

export default Home
