import React from 'react'

import Preview from './Preview'
import Intro from './Intro'
import SelfIntro from './SelfIntro'

import 'font-awesome/css/font-awesome.min.css'

import './index.scss'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Preview />
        <Intro />
        <SelfIntro />
      </div>
    )
  }
}
