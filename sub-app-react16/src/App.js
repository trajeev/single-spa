import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import {Provider} from 'react-redux'
// import store from './redux/store';
// import {connect} from 'react-redux'
// import {addForm, removeForm} from './redux/form/form.action'
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [],
      list:  ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleSubmit (e) {
    e.preventDefault()
    let copy = [...this.state.lists]
    copy = [...copy, this.state.list]
    // this.props.addForm(this.state.list)
    this.setState({
      lists: copy,
      list: ''
    })
  }

  handleChange (e) {
    this.setState({list: e.target.value})
    // console.log(this.state.list)
  }

  handleDelete (li) {
    let copy = [...this.state.lists]
    copy.splice(li, 1)
    this.setState({
      lists: copy
    })
    // this.props.removeForm(li)
    console.log('redux')
  }

  render() {
    console.log(this.props)
    return (
      // <Provider store = {store}>
        <div style={{marginTop: '10px'}}>
          <h1 style = {{color: 'blue'}}>This was written in React</h1>
          <form onSubmit = {this.handleSubmit}>
            <label>Input</label>
            <input type = 'text' onChange = {this.handleChange} value = {this.state.list} className = "input"></input>
            <button className = "button">submit</button>
          </form>
          {this.state.lists.map((li, index) => (
            <div  key = {index} className = "list"  onClick = {() => this.handleDelete(li)}>
              {li}
            </div>
          ))}
          {/* {this.state.lists} */}
        </div>
      // </Provider>
    )
  }
}

// export default function ReactApp () {
//   return <App />
// }

class ReactElement extends HTMLElement {
  connectedCallback () {
    ReactDOM.render(<App />, this)
  }
}

customElements.define('react-component', ReactElement)

// const mapStateToProps = state => ({
//   lists: state.forms.forms
// })

// const mapDispatchToProps = dispatch => ({
//   addForm: (data) => dispatch(addForm(data)),
//   removeForm: (list) => dispatch(removeForm(list))
// }) 

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App
