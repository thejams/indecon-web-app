import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faMoneyBillWave, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { MenuContainer, MenuOptionContainer, Title, Subtitle } from './styled'
import CustomCalendar from '../CustomCalendar'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      showCalendar: false
    }
  }

  goToLatest = () => {
    const { history } = this.props
    history.push("/latest");
  }

  goToElement = () => {
    const { history } = this.props
    history.push("/element");
  }

  goToElementByDate = () => {
    const { history } = this.props
    const {date} = this.state
    history.push(`/element?date=${date}`)
  } 

  handleDate = (date) => {
    this.setState({date: date})
  }

  activateCalendar = () => {
    this.setState({showCalendar: true})
  }

  hideCalendar = () => {
    this.setState({showCalendar: false})
  }

  showCalendar = () => (
    <div style={{display: 'flex', flexDirection:"column"}}>
      <div style={{display:'flex'}}>
        <CustomCalendar handleDate={this.handleDate}/>
        <button onClick={() => {this.hideCalendar()}} style={{height: '10%'}}>Cerrar</button>
      </div>
      <button onClick={() => {this.goToElementByDate()}} style={{height: '10%'}}>Consultar</button>
    </div>
  )

  render() {
    const {showCalendar} = this.state
    return (
      <section style={{padding:'30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Title fontSize="30px" marginBottom="20px">
          #indeconOnDemand
        </Title>
        <Subtitle fontSize="20px" marginBottom="20px">
          En esta pequeña web, verifica el estado actual de elementos como el cobre, dolar, euro, oro, plata y muchos mas, simplemente selecciona una de las opciones que se presentan a continuación.
        </Subtitle>
       {
         showCalendar && this.showCalendar()
       }
  
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
          
            
          <MenuOptionContainer onClick={() => {this.activateCalendar()}}>
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
