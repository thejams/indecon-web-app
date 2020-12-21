import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faMoneyBillWave, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { MenuContainer, MenuOptionContainer, Title, Subtitle } from './styled'

class Menu extends Component {

  goToLatest = () => {
    const { history } = this.props
    history.push("/latest");
  }

  goToElement = () => {
    const { history } = this.props
    history.push("/element");
  }

  render() {
    return (
      <section style={{padding:'30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Title fontSize="30px" marginBottom="20px">
          #indeconOnDemand
        </Title>
        <Subtitle fontSize="20px" marginBottom="20px">
          En esta pequeña web, verifica el estado actual de elementos como el cobre, dolar, euro, oro, plata y muchos mas, simplemente selecciona una de las opciones que se presentan a continuación.
        </Subtitle>
        <MenuContainer>
          
          <MenuOptionContainer onClick={() => {this.goToLatest()}}>
            <FontAwesomeIcon style={{marginBottom: "20px", fontSize: "100px", color: 'tomato'}} icon={faHistory} />
            <Title>Latest</Title>
            <Subtitle>Verifica los últimos valores en este instante de todos los elementos.</Subtitle>
          </MenuOptionContainer>
          
          <MenuOptionContainer onClick={() => {this.goToElement()}}>
            <FontAwesomeIcon style={{marginBottom: "20px", fontSize: "100px", color: 'darkgreen'}} icon={faMoneyBillWave} />
            <Title>1 Elemento</Title>
            <Subtitle>Verifica todos los valores de un elemento particular.</Subtitle>
           </MenuOptionContainer>
          
          <MenuOptionContainer>
            <FontAwesomeIcon style={{marginBottom: "20px", fontSize: "100px", color: 'dodgerblue'}} icon={faCalendarAlt} />
            <Title>Por Fecha</Title>
            <Subtitle>Verifica el valor de un elemento particular en una fecha en particular.</Subtitle>
           </MenuOptionContainer>

        </MenuContainer>
      </section>
    )
  }
}

export default withRouter(Menu)
