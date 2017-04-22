import React, { Component } from 'react'
import autobind from 'react-autobind'

import './index.scss'

export default class SelfIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isContentShown: {}
    }

    autobind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let pageOffset = window.pageYOffset;
    let { isContentShown } = this.state;
    let { children } = this.refs.content;
    let isShownCnter = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (!isContentShown[i]
        && (child.offsetTop - pageOffset < 500)) {
        child.classList.add('show');
        isContentShown[i] = true;
      }

      if (isContentShown[i]) {
        isShownCnter++;
      }
    }

    if (isShownCnter < children.length) {
      this.setState({ isContentShown });
    } else {
      this.setState({ isContentShown: {} });
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    return (
      <section id="self-intro" className="text-center">
        <div className="space40" />
        <i className="fa fa-file-text fa-5x p-color" aria-hidden="true" />
        <h1>自我介紹</h1>
        <section ref="content" id="content">
          <p>哈囉你好, 我是<span className="p-color">Lego</span>,</p>
          <p>目前就讀於交通大學(NCTU)網路工程碩一生,</p>
          <p>研習關於 Software Defined Netwok 和 VxLAN Tunneling,</p>
          <p>在中興大學(NCTU)大三時在多方嘗試之下對於寫程式有了興趣, </p>
          <p>在數學系中，啟蒙了我最初的C++程式,</p>
          <p>到後來想起系上有教授在用debian, 於似乎接觸了 Linux 作業系統,</p>
          <p>到現在我使用<span className="p-color">Archlinux</span>的使用者,</p>
          <p>在大四這年遇到同好, 開始學習Web技術</p>
          <p>學習前端技術Html, CSS, Javascript,</p>
          <p>到後端程式語言Python, Php, Nodejs,</p>
          <p>並用過一些Web framwork，ex: Laravel(Php)， Django(Python)...，</p>
          <p>前端 framwork 玩過 React, Angular1。 </p>
          <p>觸及範圍很廣, 但是我不敢說摸的很深,</p>
          <p>以成為網頁全端(Full stack)工程師為目標邁進,</p>
          <p>希望以努力不懈的精神致力於軟體工程，</p>
          <h2><span className="p-color">未來想成為對世界有影響的人</span>。</h2>
        </section>
      </section>
    )
  }
}
