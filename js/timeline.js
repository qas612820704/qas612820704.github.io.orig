$(function() {
  var showMoreBtn = '<div class="waves-effect waves-light btn white black-text showBtn showMoreBtn"><i class="fa fa-arrow-down"></i></div>';
  var showLessBtn = '<div class="waves-effect waves-light btn white black-text showBtn showLessBtn"><i class="fa fa-arrow-up"></i></div>';
  var showMoreBtnAuto = '<div class="showMoreBtnAuto"></div>'
  $('#timeline-container-basic').timelineMe({
  items: [
    {
      type: 'milestone',
      label: '<b>2012</b>',
    },
    {
      type: 'bigItem',
      label: '<span class="grey lighten-3">September</span>',
      shortContent: ' \
      <div class="col s12 center"> \
        <img class="school" src="img/NCHU-Symbol.png" alt="" /> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
        <img class="school" src="img/NCHU-Symbol.png" alt="" /> \
        <h4>就讀於中興大學</h4> \
        <h5>應用數學系</h5> \
      </div>',
      showMore: showMoreBtnAuto,
    },
    {
      type: 'smallItem',
      label: '加入溜冰社',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuskate.jpg" alt="" /> \
          <h5>溜冰社</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuskate.jpg" alt="" /> \
          <h5>溜冰社</h5> \
          <p>溜冰社對我意義重大</p> \
          <p>他就像另外一個<span class="deep-orange-text">家</span></p> \
          <p>讓我學習</p> \
          <p>並且</p> \
          <p>度過一個瘋狂的大學生活</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'milestone',
      label: '<b>2014</b>',
    },
    {
      type: 'smallItem',
      label: '加入資訊社',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit.jpg" alt="" /> \
          <h5>資訊社</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit.jpg" alt="" /> \
          <h5>資訊社</h5> \
          <p>在這裡 我交到很多資訊相關技術的朋友</p> \
          <p>也可以說我在這裡遇到人生中的貴人<span class="deep-orange-text">們</span></p> \
          <p>剛開始他們很有耐心的一步一腳印帶我入門</p> \
          <p>到現在可以互相討論技術(雖然都是被教比較多Orz)</p> \
          <p>不過很慶幸的 就是遇到這群熱愛資訊的大家</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: 'SITCON會眾',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitconLogo.png" alt="" /> \
          <h5>會眾一枚 來這裡增長見聞阿!</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitconLogo.png" alt="" /> \
          <h5>會眾一枚 來這裡增長見聞阿!</h5> \
          <p>加入資訊社第一次知道有這麼大型的議程</p> \
          <p>而且還是屬於學生 真的是令我意想不到</p> \
          <p>只有當自己覺得渺小的時候 才有增長的動力</p> \
          <p>希望我有一天也能成為大大 分享給這個世界</p> \
          <p>茁壯<span class="deep-orange-text">開源社群</span> 進而改變世界</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'milestone',
      label: '<b>2015</b>',
    },
    {
      type: 'smallItem',
      label: 'SITCON台中定期聚',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitcon_nchu.jpg" alt="" /> \
          <h5>中興主辦的定期聚#8</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitcon_nchu.jpg" alt="" /> \
          <h5>中興主辦的定期聚#8</h5> \
          <p>這一次的聚會 不知道是不是因為辦在中興</p> \
          <p>竟然有三位遠在天邊的交大資訊社到來這次的聚會</p> \
          <p>聊了一下其實蠻羨慕的</p> \
          <p>最簡單的 我在中興知道Native使用GNU/Linux的人不超過5個</p> \
          <p>而交大本身系上有在維護 Archlinux以及FreeBSD 讓我倍感羨慕</p> \
          <p>覺得的台中缺乏這樣的資源 那..不妨先從<span  class="deep-orange-text">自己身邊做起吧</span>?</p> \
          <p>總之 這此聚會很成功, 聊了Git翻譯, Vim config, 以及一些酷炫的小雜物</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '全國大專溜島俠環西路溜',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/skateflame.jpg" alt="" /> \
          <h5>在2015的夏天</h5> \
          <h5>我們用一把火 一雙鞋 傳遞我們的團結</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/skateflame.jpg" alt="" /> \
          <h5>在2015的夏天</h5> \
          <h5>我們用一把火 一雙鞋 傳遞我們的團結</h5> \
          <p><b>全國大專溜島俠環西路溜</b></p> \
          <p>是一個從台北圓山到屏東火車站的為期6天路溜活動</p> \
          <p>重要的是這是由中興大學溜冰社發起 屬於全國溜冰社的活動</p> \
          <p>這個活動讓大專院校的直排輪社都串聯起來</p> \
          <p>原本大家都是各玩各的,</p> \
          <p>在這裡 我們是一體的 並無你我</p> \
          <p>我們一起完成了這個活動</p> \
          <p>我在這個活動負責開後導車</p> \
          <p>活動有多<span class="deep-orange-text">瘋狂</span>真的是一篇很長的故事</p> \
          <p>想知道更多的話 在<a href="https://www.youtube.com/results?search_query=%E6%BA%9C%E5%B3%B6%E4%BF%A0" target="_blank">Youtube搜尋 "溜島俠"</a></p> \
          <p>會有我們的紀錄片</p> \
          <p>紀錄片是由影片上傳者張少慈所拍攝的 他真的很厲害</p> \
          <p>最後 我很驕傲我是中興大學溜冰社的一員</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'smallItem',
      label: 'COSCUP會眾',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_coscup.jpg" alt="" /> \
          <h5>COSCUP會眾</h5> \
          <h5>學習 學習 再學習</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_coscup.jpg" alt="" /> \
          <h5>COSCUP會眾</h5> \
          <h5>學習 學習 再學習</h5> \
          <p>為期兩天的COSCUP 遇到很多大神</p> \
          <p>pcman, jserv, coldnew</p> \
          <p>他們默默的對開源社群的貢獻</p> \
          <p>還有我印象最深的中文化議題</p> \
          <p>曾經我們的社群是最壯大的</p> \
          <p>從幾何時我們忽略了</p> \
          <p>於是我默默的把中文化這個議題</p> \
          <p>默默的把他放進我的TodoList裏面</p> \
          <p>目前正在構想Django某一個part的小小教學</p> \
          <p>將來有一天 我也想回饋社群</p> \
          <p>讓我一步一步的登上巔峰吧</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'milestone',
      label: '資訊社迎新',
    },
    {
      type: 'smallItem',
      label: '資訊社迎新',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_newborn.jpg" alt="" /> \
          <h5>資訊社 招募新血囉</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_newborn.jpg" alt="" /> \
          <h5>資訊社 招募新血囉</h5> \
          <p>又是新的一年 去年學了一年的東西</p> \
          <p>今年招募新的一批人</p> \
          <p>看可不可以在中間找到一些有熱血的青年</p> \
          <p>一起努力 推廣資訊!</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'bigItem',
      label: '<span class="grey lighten-3">Now</span>',
      shortContent: ' \
      <div class="col s12 center"> \
        <img class="legonow" src="img/legosea.jpg" alt="" /> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
        <img class="legonow" src="img/legosea.jpg" alt="" /> \
        <h4>所以 現在的我呢?</h4> \
        <p>.</p> \
        <p>.</p> \
        <p>.</p> \
        <h4><span class="deep-orange-text">莫忘初衷</span></h4> \
        <h5>繼續前進吧</h5> \
      </div>',
      showMore: showMoreBtnAuto,
    },
  ]
  });
});
