import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ClientAPI from '../../clients/ClientApi'
import { ElementContainer, Title, SubTitle } from '../Latest/styled'

class Element extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: {},
      query: "",
      loading: false
    }
    this.clientAPI = new ClientAPI()
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  handleSubmit() {
    const {query} = this.state
    this.setState({ loading: true }, async ()=> {
      const element = await this.clientAPI.getElement(query)
      this.setState({ element: element, loading: false })
    })
  }

  renderElement(){
    const {element} = this.state
    if (Object.keys(element).length === 0) {
      return (<h1>Sin Resultados para mostrar</h1>)
    }
    return (
      <ElementContainer>
        <Title>
          {element.name}
        </Title>
        <SubTitle>
          Unidad de medición: {element.unit}
        </SubTitle>
        <SubTitle>
          valor: {element.value}
        </SubTitle>
      </ElementContainer>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', padding: '30px', flexWrap: 'wrap'}}>
        {!loading && (
          <form 
            style={{display: 'flex', alignItems: 'center', padding: '10px', background: 'white', borderRadius: '30px', border: '2px solid #000'}} 
            onSubmit={ (e) => {e.preventDefault(); this.handleSubmit()} }
          >
            <FontAwesomeIcon icon={faSearch} />
            <input 
              style={{fontSize: '16px', padding: '10px',flexGrow: '1', border: 'unset'}} 
              type="search"
              placeholder="Escribe el nombre del elemento que deseas buscar (cobre, dolar, euro, ...)"
              onChange={(e) => {this.handleChange(e)}}
              />
          </form>
        )}
        {!loading && this.renderElement()}
        {loading && <h1>Cargando ....</h1>}
      </div>
    )
  }
}

export default Element