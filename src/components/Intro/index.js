import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './index.scss'

export default class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <Grid>
          <div className="space40"></div>
          <Row className="text-center">
            <Col xs={12} md={4}>
              <img className="avatar" src="/img/legosea.jpg"/>
            </Col>
            <Col xs={12} md={8}>
            <i className="p-color fa fa-user-circle fa-5x" aria-hidden="true"></i>
            <h1>Hello</h1>
            <h1>
            My name is
            <span className="p-color"> Lego Chiang</span></h1>
            <p>
            在資訊的世界中不前進，就是後退。<br/>
            平常有機會就會參加開放社群的研討會 Coscup, Mopcon, Sitcon...
            </p>
            </Col>
          </Row>
          <div className="space40"></div>
          <Row className="text-center">
            <Col md={4}>
              <i className="p-color fa fa-user fa-5x" aria-hidden="true"></i>
              <h1>資訊</h1>
              <Row>
                <Col md={6}>
                <p>
                  <i className="fa fa-birthday-cake fa-2x"></i>
                  <b> 生於</b>
                </p>
                <p>07/04/1993</p>
                </Col>
                <Col md={6}>
                <p>
                  <i className="fa fa-home fa-2x"></i>
                  <b> 故鄉</b>
                </p>
                <p>基隆市, 台灣</p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <i className="p-color fa fa-map-marker fa-5x" aria-hidden="true"></i>
              <h1>位置</h1>
              <Row>
                <Col md={6}>
                <p>
                  <i className="fa fa-graduation-cap fa-2x"></i>
                  <b> 受教於</b>
                </p>
                <p>交通大學</p>
                <p>網路工程所</p>
                <p><a href="http:/140.113.208.152/">MBL laboratory</a></p>
                <hr/>
                <p>中興大學</p>
                <p>應用數學系</p>
                </Col>
                <Col md={6}>
                <p>
                  <i className="fa fa-location-arrow fa-2x"></i>
                  <b> 東區! ... 新竹</b>
                </p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <i className="p-color fa fa-users fa-5x" aria-hidden="true"></i>
              <h1>課外活動</h1>
              <Row>
                <Col md={6}>
                <p>
                  <i className="fa fa-opencart fa-2x"></i>
                  <b> 社團</b>
                </p>
                <p>溜冰社</p>
                </Col>
                <Col md={6}>
                <p>
                  <i className="fa fa-odnoklassniki fa-2x"></i>
                  <b> 社團</b>
                </p>
                <p>資訊社</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
