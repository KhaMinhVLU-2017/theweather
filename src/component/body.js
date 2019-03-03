import React, { Component, Fragment } from 'react'
import { Col, Table, Collapse, Button, CardBody, Card } from 'reactstrap'
import config from '../config'
import axios from 'axios'
import bg1 from '../assert/images/bg1.jpg'
import bg2 from '../assert/images/bg2.jpg'
import bg3 from '../assert/images/bg3.jpg'
import bg4 from '../assert/images/bg4.jpg'
import bg5 from '../assert/images/bg5.jpg'
import bg6 from '../assert/images/bg6.jpg'
import bg7 from '../assert/images/bg7.jpg'

class BodyContent extends Component {
  constructor(props) {
    super(props)
    this.state = { collapse: false, listDate: null, bg1, bg2, bg3, bg4, bg5,bg6,bg7 }
    this.getWeatherDay = this.getWeatherDay.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  componentDidMount() {
    this.getWeatherDay()
  }
  getWeatherDay() {
    let url = 'https://api.openweathermap.org/data/2.5/forecast?id=1566083&APPID=' + config.apiKey
    let obj = {}
    let self = this
    axios.get(url)
      .then(function (response) {
        let { data } = response
        // console.log(data.list)
        for (let item of data.list) {
          let property = item.dt_txt.split(' ')[0]
          obj[property] = []
        }
        for (let item of data.list) {
          let property = item.dt_txt.split(' ')[0]
          obj[property].push(item)
        }
        let arrDate = []
        let arrKeyDate = []
        for (let key of Object.keys(obj)) {
          arrDate.push({
            [key]: false
          })
          arrKeyDate.push(key)
        }
        self.setState({ listDate: obj, ...arrDate, arrKeyDate })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  toggle(e) {
    // console.log(e.target.id)
    let { id } = e.target
    this.setState({ [id]: !this.state[id] });
  }

  render() {
    if (this.state.listDate !== null) {
      // console.log(this.state.listDate)
      return (
        <Col md={12} sm={12} xs={12}>
          {this.state.arrKeyDate.map(key =>
            <Fragment key={key}>
              <Button outline id={key} onClick={this.toggle} style={{ marginBottom: '1rem', width: '100%' }}>{config.convertDatetoDay(key)[0] +' '+key}</Button>

              <Collapse isOpen={this.state[key]}>
                <Card style={{backgroundImage: `url(${this.state[config.convertDatetoDay(key)[1]]})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
                  <CardBody>
                    <Table style={{ margin: '0 auto', color: 'white',textShadow: '2px 2px 2px #000000' }} borderless>
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.listDate[key].map((item, index) =>
                            <tr key={index}>
                              <th scope="row">{item.dt_txt.split(' ')[1]}</th>
                              <td>{config.convertKtoC(item.main.temp)}&deg;C</td>
                              <td>{config.convertKtoC(item.main.temp_min)}&deg;C</td>
                              <td>{config.convertKtoC(item.main.temp_max)}&deg;C</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Collapse>
            </Fragment>
          )}

        </Col>
      )
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default BodyContent
