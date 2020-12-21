import React, { Component } from 'react'
import Moment from 'react-moment';
import ClientAPI from '../../clients/ClientApi'
import { ElementContainer, Title, SubTitle, MainContainer } from './styled'

class Latest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [],
      loading: false
    }
    this.clientAPI = new ClientAPI()
  }

  async componentDidMount() {
    this.setState({ loading: true }, async ()=> {
      const latestsElements = await this.clientAPI.getLatestElements()
      this.setState({ elements: Object.values(latestsElements), loading: false })
    })
  }

  renderElements() {
    const {elements} = this.state
    return elements.map((element, index) => (
      <ElementContainer key={`element-${index}`}>
        <Title>
          {element.name}
        </Title>
        <SubTitle>
          Unidad de medición: {element.unit}
        </SubTitle>
        <SubTitle>
          valor: {element.value}
        </SubTitle>
        <SubTitle>
          fecha: <Moment format="YYYY/MM/DD">{new Date()}</Moment>
        </SubTitle>
      </ElementContainer>
    ))
  }

  render() {
    const {loading} = this.state
    return (
      <MainContainer>
        {!loading && this.renderElements()}
        {loading && <h1>Cargando ....</h1>}
      </MainContainer>
    )
  }
}

export default Latest
