import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

class CustomCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  onChangeHAndler = (date) => {
    this.setState({date: date})
    const {handleDate} = this.props
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let formattedDate

    if (month < 10){
      month = `0${month}`
    }
    if (day < 10){
      day = `0${day}`
    }

    formattedDate = `${day}-${month}-${year}`
    handleDate(formattedDate)
  }

  render() {
    const {date} = this.state
    var startingDate = new Date()
    startingDate.setDate(startingDate.getDate() - 1)
    return (
      <div style={{marginBottom: '10px', marginRight: '5px'}}>
        <Calendar
          onChange={this.onChangeHAndler}
          value={date}
          maxDate={startingDate}
        />
      </div>
    )
  }
}

export default CustomCalendar
