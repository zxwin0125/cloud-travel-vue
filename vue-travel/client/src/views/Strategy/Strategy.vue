<template>
  <section class="strategy">
    <!-- 攻略导航 -->
    <section class="strategy_top">
      <div class="mdd_nav">
        <div class="gonglve-nav" data-cs-t="攻略导航">
          <div
            class="nav-item"
            data-cs-p="海外冬季目的地精选"
            @mouseenter="showSelect"
            @mouseleave="hideSelect"
          >
            <div class="nav-title">
              <h3>海外冬季目的地精选</h3>
              <b class="gn-arrow"></b>
            </div>
            <div class="nav-panel rank-panel" v-if="isShowSelect">
              <ol>
                <li class="top3">
                  <em class="rank-num">1</em
                  ><strong
                    ><a href="/gonglve/mdd-10746.html" target="_blank"
                      >北海道</a
                    ></strong
                  ><a href="/gonglve/mdd-10746.html" target="_blank"
                    >在皑皑白雪中泡温泉</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">2</em
                  ><strong
                    ><a href="/gonglve/mdd-10549.html" target="_blank"
                      >冰岛</a
                    ></strong
                  ><a href="/gonglve/mdd-10549.html" target="_blank"
                    >亲近极北之地的莫测极光</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">3</em
                  ><strong
                    ><a href="/gonglve/mdd-10202.html" target="_blank"
                      >澳大利亚</a
                    ></strong
                  ><a href="/gonglve/mdd-10202.html" target="_blank"
                    >在南半球过个暖洋洋的圣诞节</a
                  >
                </li>
                <li>
                  <em class="rank-num">4</em
                  ><strong
                    ><a href="/gonglve/mdd-10926.html" target="_blank"
                      >洛杉矶</a
                    ></strong
                  ><a href="/gonglve/mdd-10926.html" target="_blank"
                    >阳光加州，避寒圣地</a
                  >
                </li>
                <li>
                  <em class="rank-num">5</em
                  ><strong
                    ><a href="/gonglve/mdd-10754.html" target="_blank"
                      >新加坡</a
                    ></strong
                  ><a href="/gonglve/mdd-10754.html" target="_blank"
                    >活力四射的花园之城</a
                  >
                </li>
                <li>
                  <em class="rank-num">6</em
                  ><strong
                    ><a href="/gonglve/mdd-11058.html" target="_blank"
                      >斯里兰卡</a
                    ></strong
                  ><a href="/gonglve/mdd-11058.html" target="_blank"
                    >便利签证，异域风情</a
                  >
                </li>
                <li>
                  <em class="rank-num">7</em
                  ><strong
                    ><a href="/gonglve/mdd-15911.html" target="_blank"
                      >帕劳</a
                    ></strong
                  ><a href="/gonglve/mdd-15911.html" target="_blank"
                    >潜水者的朝圣地</a
                  >
                </li>
                <li>
                  <em class="rank-num">8</em
                  ><strong
                    ><a href="/gonglve/mdd-10179.html" target="_blank"
                      >缅甸</a
                    ></strong
                  ><a href="/gonglve/mdd-10179.html" target="_blank"
                    >踏上佛国净化之旅</a
                  >
                </li>
                <li>
                  <em class="rank-num">9</em
                  ><strong
                    ><a href="/gonglve/mdd-10067.html" target="_blank"
                      >菲律宾</a
                    ></strong
                  ><a href="/gonglve/mdd-10067.html" target="_blank"
                    >徜徉海岛间，潜入深海中</a
                  >
                </li>
                <li>
                  <em class="rank-num">10</em
                  ><strong
                    ><a href="/gonglve/mdd-11214.html" target="_blank"
                      >迪拜</a
                    ></strong
                  ><a href="/gonglve/mdd-11214.html" target="_blank"
                    >沙漠中的奇迹之城</a
                  >
                </li>
              </ol>
            </div>
          </div>
          <div
            class="nav-item"
            data-cs-p="国内冬季目的地推荐"
            @mouseenter="showRecommend"
            @mouseleave="hideRecommend"
          >
            <div class="nav-title">
              <h3>国内冬季目的地推荐</h3>
              <b class="gn-arrow"></b>
            </div>
            <div class="nav-panel rank-panel" v-if="isShowRecommend">
              <ol>
                <li class="top3">
                  <em class="rank-num">1</em
                  ><strong
                    ><a href="/gonglve/mdd-10427.html" target="_blank"
                      >漠河</a
                    ></strong
                  ><a href="/gonglve/mdd-10427.html" target="_blank"
                    >至寒圣地的极光约会</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">2</em
                  ><strong
                    ><a href="/gonglve/mdd-10440.html" target="_blank"
                      >黄山</a
                    ></strong
                  ><a href="/gonglve/mdd-10440.html" target="_blank"
                    >银装素裹秒杀菲林季</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">3</em
                  ><strong
                    ><a href="/gonglve/mdd-11327.html" target="_blank"
                      >海螺沟</a
                    ></strong
                  ><a href="/gonglve/mdd-11327.html" target="_blank"
                    >冰川温泉的童话世界</a
                  >
                </li>
                <li>
                  <em class="rank-num">4</em
                  ><strong
                    ><a href="/gonglve/mdd-10087.html" target="_blank"
                      >壶口瀑布</a
                    ></strong
                  ><a href="/gonglve/mdd-10087.html" target="_blank"
                    >绝美的冰瀑玉壶奇观</a
                  >
                </li>
                <li>
                  <em class="rank-num">5</em
                  ><strong
                    ><a href="/gonglve/mdd-18084.html" target="_blank"
                      >西岭雪山</a
                    ></strong
                  ><a href="/gonglve/mdd-18084.html" target="_blank"
                    >成都周边最大滑雪场</a
                  >
                </li>
                <li>
                  <em class="rank-num">6</em
                  ><strong
                    ><a href="/gonglve/mdd-10809.html" target="_blank"
                      >西双版纳</a
                    ></strong
                  ><a href="/gonglve/mdd-10809.html" target="_blank"
                    >聆听欣赏原生态歌舞</a
                  >
                </li>
                <li>
                  <em class="rank-num">7</em
                  ><strong
                    ><a href="/gonglve/mdd-12491.html" target="_blank"
                      >霞浦</a
                    ></strong
                  ><a href="/gonglve/mdd-12491.html" target="_blank"
                    >红枫白荻的交相辉映</a
                  >
                </li>
                <li>
                  <em class="rank-num">8</em
                  ><strong
                    ><a href="/gonglve/mdd-10088.html" target="_blank"
                      >广州</a
                    ></strong
                  ><a href="/gonglve/mdd-10088.html" target="_blank"
                    >相约一起喝粤式早茶</a
                  >
                </li>
                <li>
                  <em class="rank-num">9</em
                  ><strong
                    ><a href="/gonglve/mdd-11065.html" target="_blank"
                      >高雄</a
                    ></strong
                  ><a href="/gonglve/mdd-11065.html" target="_blank"
                    >暖冬初阳遇最美台湾</a
                  >
                </li>
                <li>
                  <em class="rank-num">10</em
                  ><strong
                    ><a href="/gonglve/mdd-10030.html" target="_blank"
                      >三亚</a
                    ></strong
                  ><a href="/gonglve/mdd-10030.html" target="_blank"
                    >去热带海滩逃离寒冬</a
                  >
                </li>
              </ol>
            </div>
          </div>
          <div
            class="nav-item"
            data-cs-p="奔向海岛"
            @mouseenter="showIsland"
            @mouseleave="hideIsland"
          >
            <div class="nav-title">
              <h3>奔向海岛</h3>
              <b class="gn-arrow"></b>
            </div>
            <div class="nav-panel rank-panel" v-if="isShowIsland">
              <ol>
                <li class="top3">
                  <em class="rank-num">1</em
                  ><strong
                    ><a href="/gonglve/mdd-16209.html" target="_blank"
                      >象岛</a
                    ></strong
                  ><a href="/gonglve/mdd-16209.html" target="_blank"
                    >腻了普吉，来象岛玩个深度</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">2</em
                  ><strong
                    ><a href="/gonglve/mdd-10460.html" target="_blank"
                      >巴厘岛</a
                    ></strong
                  ><a href="/gonglve/mdd-10460.html" target="_blank"
                    >巴厘岛免签啦</a
                  >
                </li>
                <li class="top3">
                  <em class="rank-num">3</em
                  ><strong
                    ><a href="/gonglve/mdd-11761.html" target="_blank"
                      >毛里求斯</a
                    ></strong
                  ><a href="/gonglve/mdd-11761.html" target="_blank"
                    >印度洋上的海上明珠</a
                  >
                </li>
                <li>
                  <em class="rank-num">4</em
                  ><strong
                    ><a href="/gonglve/mdd-10077.html" target="_blank"
                      >塞班岛</a
                    ></strong
                  ><a href="/gonglve/mdd-10077.html" target="_blank"
                    >错“季”出行，也有惊喜</a
                  >
                </li>
                <li>
                  <em class="rank-num">5</em
                  ><strong
                    ><a href="/gonglve/mdd-10737.html" target="_blank"
                      >长滩岛</a
                    ></strong
                  ><a href="/gonglve/mdd-10737.html" target="_blank"
                    >潜水与蜜月的天堂</a
                  >
                </li>
                <li>
                  <em class="rank-num">6</em
                  ><strong
                    ><a href="/gonglve/mdd-16095.html" target="_blank"
                      >圣托里尼</a
                    ></strong
                  ><a href="/gonglve/mdd-16095.html" target="_blank"
                    >蓝白之城映衬着海风吹拂</a
                  >
                </li>
                <li>
                  <em class="rank-num">7</em
                  ><strong
                    ><a href="/gonglve/mdd-15289.html" target="_blank"
                      >沙美岛</a
                    ></strong
                  ><a href="/gonglve/mdd-15289.html" target="_blank"
                    >如果你厌倦了芭提雅</a
                  >
                </li>
                <li>
                  <em class="rank-num">8</em
                  ><strong
                    ><a href="/gonglve/mdd-29500.html" target="_blank"
                      >杜马盖地</a
                    ></strong
                  ><a href="/gonglve/mdd-29500.html" target="_blank"
                    >找小丑鱼做客去！</a
                  >
                </li>
                <li>
                  <em class="rank-num">9</em
                  ><strong
                    ><a href="/gonglve/mdd-11051.html" target="_blank"
                      >兰卡威</a
                    ></strong
                  ><a href="/gonglve/mdd-11051.html" target="_blank"
                    >海钓、潜水，看蓝天</a
                  >
                </li>
                <li>
                  <em class="rank-num">10</em
                  ><strong
                    ><a href="/gonglve/mdd-10760.html" target="_blank"
                      >沙巴</a
                    ></strong
                  ><a href="/gonglve/mdd-10760.html" target="_blank"
                    >这里有世界上最美的落日</a
                  >
                </li>
              </ol>
            </div>
          </div>
          <div
            class="nav-item"
            data-cs-p="主题推荐"
            @mouseenter="showTheme"
            @mouseleave="hideTheme"
          >
            <div class="nav-title">
              <h3>主题推荐</h3>
              <b class="gn-arrow"></b>
            </div>
            <div class="nav-panel category-panel" v-if="isShowTheme">
              <dl class="clearfix">
                <dt>骑行</dt>
                <dd>
                  <a title="海南" href="/gonglve/zt-359.html" target="_blank"
                    >海南</a
                  >
                </dd>
                <dd>
                  <a title="青海湖" href="/gonglve/zt-381.html" target="_blank"
                    >青海湖</a
                  >
                </dd>
                <dd>
                  <a title="敦煌" href="/gonglve/mdd-10240.html" target="_blank"
                    >敦煌</a
                  >
                </dd>
                <dd>
                  <a title="漠河" href="/gonglve/mdd-10427.html" target="_blank"
                    >漠河</a
                  >
                </dd>
                <dd>
                  <a title="台湾" href="/gonglve/mdd-12684.html" target="_blank"
                    >台湾</a
                  >
                </dd>
                <dd>
                  <a title="北京" href="/gonglve/zt-425.html" target="_blank"
                    >北京</a
                  >
                </dd>
                <dd>
                  <a title="杭州" href="/gonglve/mdd-10156.html" target="_blank"
                    >杭州</a
                  >
                </dd>
                <dd>
                  <a title="双廊" href="/gonglve/mdd-15950.html" target="_blank"
                    >双廊</a
                  >
                </dd>
                <dd>
                  <a title="婺源" href="/gonglve/mdd-10045.html" target="_blank"
                    >婺源</a
                  >
                </dd>
                <dd>
                  <a
                    title="阿尔山"
                    href="/gonglve/mdd-10390.html"
                    target="_blank"
                    >阿尔山</a
                  >
                </dd>
                <dd>
                  <a title="法国" href="/gonglve/mdd-10171.html" target="_blank"
                    >法国</a
                  >
                </dd>
                <dd>
                  <a title="厦门" href="/gonglve/mdd-10132.html" target="_blank"
                    >厦门</a
                  >
                </dd>
                <dd>
                  <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                    >阳朔</a
                  >
                </dd>
                <dd>
                  <a
                    title="香格里拉"
                    href="/gonglve/mdd-10482.html"
                    target="_blank"
                    >香格里拉</a
                  >
                </dd>
                <dd>
                  <a title="太湖" href="/gonglve/mdd-10140.html" target="_blank"
                    >太湖</a
                  >
                </dd>
                <dd>
                  <a title="西藏" href="/gonglve/mdd-12700.html" target="_blank"
                    >西藏</a
                  >
                </dd>
                <dd>
                  <a title="大理" href="/gonglve/mdd-10487.html" target="_blank"
                    >大理</a
                  >
                </dd>
                <dd>
                  <a title="成都" href="/gonglve/mdd-10035.html" target="_blank"
                    >成都</a
                  >
                </dd>
                <dd>
                  <a
                    title="乌鲁木齐"
                    href="/gonglve/mdd-10218.html"
                    target="_blank"
                    >乌鲁木齐</a
                  >
                </dd>
              </dl>
              <dl class="clearfix">
                <dt>潜水</dt>
                <dd>
                  <a title="沙巴" href="/gonglve/mdd-10760.html" target="_blank"
                    >沙巴</a
                  >
                </dd>
                <dd>
                  <a title="三亚" href="/gonglve/mdd-10030.html" target="_blank"
                    >三亚</a
                  >
                </dd>
                <dd>
                  <a title="斐济" href="/gonglve/mdd-11044.html" target="_blank"
                    >斐济</a
                  >
                </dd>
                <dd>
                  <a
                    title="巴厘岛"
                    href="/gonglve/mdd-10460.html"
                    target="_blank"
                    >巴厘岛</a
                  >
                </dd>
                <dd>
                  <a
                    title="长滩岛"
                    href="/gonglve/mdd-10737.html"
                    target="_blank"
                    >长滩岛</a
                  >
                </dd>
                <dd>
                  <a
                    title="马尔代夫"
                    href="/gonglve/mdd-10101.html"
                    target="_blank"
                    >马尔代夫</a
                  >
                </dd>
                <dd>
                  <a
                    title="苏梅岛"
                    href="/gonglve/mdd-14210.html"
                    target="_blank"
                    >苏梅岛</a
                  >
                </dd>
                <dd>
                  <a
                    title="普吉岛"
                    href="/gonglve/mdd-11047.html"
                    target="_blank"
                    >普吉岛</a
                  >
                </dd>
                <dd>
                  <a
                    title="夏威夷"
                    href="/gonglve/mdd-10927.html"
                    target="_blank"
                    >夏威夷</a
                  >
                </dd>
                <dd>
                  <a
                    title="巴拉望"
                    href="/gonglve/mdd-16116.html"
                    target="_blank"
                    >巴拉望</a
                  >
                </dd>
                <dd>
                  <a
                    title="马来西亚"
                    href="/gonglve/mdd-10097.html"
                    target="_blank"
                    >马来西亚</a
                  >
                </dd>
                <dd>
                  <a
                    title="兰卡威"
                    href="/gonglve/mdd-11051.html"
                    target="_blank"
                    >兰卡威</a
                  >
                </dd>
                <dd>
                  <a title="埃及" href="/gonglve/mdd-10178.html" target="_blank"
                    >埃及</a
                  >
                </dd>
                <dd>
                  <a
                    title="印度尼西亚"
                    href="/gonglve/mdd-10181.html"
                    target="_blank"
                    >印度尼西亚</a
                  >
                </dd>
                <dd>
                  <a title="泰国" href="/gonglve/mdd-10083.html" target="_blank"
                    >泰国</a
                  >
                </dd>
              </dl>
              <dl class="clearfix">
                <dt>徒步</dt>
                <dd>
                  <a title="尼泊尔" href="/gonglve/zt-329.html" target="_blank"
                    >尼泊尔</a
                  >
                </dd>
                <dd>
                  <a title="虎跳峡" href="/gonglve/zt-398.html" target="_blank"
                    >虎跳峡</a
                  >
                </dd>
                <dd>
                  <a
                    title="喀纳斯"
                    href="/gonglve/mdd-10732.html"
                    target="_blank"
                    >喀纳斯</a
                  >
                </dd>
                <dd>
                  <a title="墨脱" href="/gonglve/mdd-10079.html" target="_blank"
                    >墨脱</a
                  >
                </dd>
                <dd>
                  <a
                    title="小五台"
                    href="/gonglve/mdd-10230.html"
                    target="_blank"
                    >小五台</a
                  >
                </dd>
                <dd>
                  <a
                    title="贡嘎雪山"
                    href="/gonglve/mdd-10347.html"
                    target="_blank"
                    >贡嘎雪山</a
                  >
                </dd>
                <dd>
                  <a
                    title="海陀山"
                    href="/gonglve/mdd-10713.html"
                    target="_blank"
                    >海陀山</a
                  >
                </dd>
                <dd>
                  <a
                    title="海螺沟"
                    href="/gonglve/mdd-11327.html"
                    target="_blank"
                    >海螺沟</a
                  >
                </dd>
                <dd>
                  <a title="雨崩" href="/gonglve/mdd-12141.html" target="_blank"
                    >雨崩</a
                  >
                </dd>
                <dd>
                  <a title="三峡" href="/gonglve/mdd-10705.html" target="_blank"
                    >三峡</a
                  >
                </dd>
                <dd>
                  <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                    >阳朔</a
                  >
                </dd>
                <dd>
                  <a
                    title="新都桥"
                    href="/gonglve/mdd-14727.html"
                    target="_blank"
                    >新都桥</a
                  >
                </dd>
                <dd>
                  <a
                    title="楠溪江"
                    href="/gonglve/mdd-10090.html"
                    target="_blank"
                    >楠溪江</a
                  >
                </dd>
                <dd>
                  <a
                    title="梅里雪山"
                    href="/gonglve/mdd-10806.html"
                    target="_blank"
                    >梅里雪山</a
                  >
                </dd>
                <dd>
                  <a
                    title="野三坡"
                    href="/gonglve/mdd-11262.html"
                    target="_blank"
                    >野三坡</a
                  >
                </dd>
                <dd>
                  <a
                    title="西双版纳"
                    href="/gonglve/mdd-10809.html"
                    target="_blank"
                    >西双版纳</a
                  >
                </dd>
              </dl>
              <dl class="clearfix">
                <dt>登山</dt>
                <dd>
                  <a
                    title="珠穆朗玛峰"
                    href="/gonglve/mdd-10811.html"
                    target="_blank"
                    >珠穆朗玛峰</a
                  >
                </dd>
                <dd>
                  <a
                    title="乞力马扎罗"
                    href="/gonglve/zt-321.html"
                    target="_blank"
                    >乞力马扎罗</a
                  >
                </dd>
                <dd>
                  <a
                    title="牛背山"
                    href="/gonglve/mdd-17315.html"
                    target="_blank"
                    >牛背山</a
                  >
                </dd>
                <dd>
                  <a
                    title="太白山"
                    href="/gonglve/mdd-10531.html"
                    target="_blank"
                    >太白山</a
                  >
                </dd>
                <dd>
                  <a
                    title="四姑娘山"
                    href="/gonglve/mdd-10134.html"
                    target="_blank"
                    >四姑娘山</a
                  >
                </dd>
                <dd>
                  <a
                    title="雁荡山"
                    href="/gonglve/mdd-11746.html"
                    target="_blank"
                    >雁荡山</a
                  >
                </dd>
                <dd>
                  <a
                    title="云台山"
                    href="/gonglve/mdd-11527.html"
                    target="_blank"
                    >云台山</a
                  >
                </dd>
                <dd>
                  <a
                    title="三清山"
                    href="/gonglve/mdd-11465.html"
                    target="_blank"
                    >三清山</a
                  >
                </dd>
                <dd>
                  <a
                    title="普陀山"
                    href="/gonglve/mdd-11534.html"
                    target="_blank"
                    >普陀山</a
                  >
                </dd>
                <dd>
                  <a title="庐山" href="/gonglve/mdd-10244.html" target="_blank"
                    >庐山</a
                  >
                </dd>
                <dd>
                  <a
                    title="海陀山"
                    href="/gonglve/mdd-10713.html"
                    target="_blank"
                    >海陀山</a
                  >
                </dd>
                <dd>
                  <a
                    title="小五台"
                    href="/gonglve/mdd-10230.html"
                    target="_blank"
                    >小五台</a
                  >
                </dd>
                <dd>
                  <a title="华山" href="/gonglve/mdd-10577.html" target="_blank"
                    >华山</a
                  >
                </dd>
                <dd>
                  <a title="泰山" href="/gonglve/mdd-10284.html" target="_blank"
                    >泰山</a
                  >
                </dd>
                <dd>
                  <a
                    title="黄山 "
                    href="/gonglve/mdd-10440.html"
                    target="_blank"
                    >黄山
                  </a>
                </dd>
                <dd>
                  <a
                    title="武功山"
                    href="/gonglve/mdd-12702.html"
                    target="_blank"
                    >武功山</a
                  >
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="input_like">
          <div>
            <span></span>
            <input
              id="search_word"
              type="text"
              placeholder="请输入想去的地方，如:香港"
            />
            <div class="clear"></div>
          </div>
          <div class="search_resu" id="search_result"></div>
        </div>
      </div>

      <div class="slide">
        <Swiper :imgs="imgs" />
      </div>
    </section>
    <section class="strategy_bottom">
      <div class="gonglve_wrap clearfix">
        <div class="cont-main _j_feed_list">
          <div class="hd clearfix">
            <h3>推荐攻略</h3>
          </div>
          <div class="gl-post">
            <div
              data-cs-t="gonglve_feed"
              class="_j_feed_data"
              data-feed='[{"fid":"381117","type":"3"},{"fid":"292353","type":"1"},{"fid":"419509","type":"3"},{"fid":"305517","type":"1"},{"fid":"130182","type":"3"},{"fid":"249946","type":"1"},{"fid":"154674","type":"1"},{"fid":"441859","type":"1"},{"fid":"30262","type":"3"},{"fid":"187326","type":"3"}]'
            >
              <div
                class="feed-item _j_feed_item"
                data-fid="381117"
                data-type="3"
                data-cs-p="位置_1"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/350656.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">
                    拥有12项世界纪录！广东周边游！快去清远古龙峡消暑！
                  </div>
                  <div class="txt">
                    <div class="info"></div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s16/M00/C8/C5/CoUBUl8EFZ2AImzwAAKCA3Ag7go82.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s16/M00/C6/E8/CoUBUl8EFIeACdSgAATXKD3MaMA98.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s16/M00/C6/E8/CoUBUl8EFIiAIILzAASIrHg4NPs76.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">26607浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="292353"
                data-type="1"
                data-cs-p="位置_2"
              >
                <a
                  href="https://www.mafengwo.cn/i/17505631.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">127</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">踏沙西行，梦寐以求的敦煌之旅</div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://p1-q.mafengwo.net/s15/M00/E4/48/CoUBGV2s2fWAaoLNAASn1IeP4_E341.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        写在前面
                        不知从什么时候起，心里便对敦煌，这座隐于荒漠的西域之城有了一种想象，前几日和好友闲谈，又说起敦煌，想去敦煌的执念又一次充斥了大脑，于是决定前往西域边陲，一探当年盛大之城的究竟。
                        带着记忆中的些许印象看完纪录片《敦煌》终于能把故事...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://b1-q.mafengwo.net/s12/M00/F4/68/wKgED1v76FuAddNXAACQa4g1tFA44.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />一把小刀</span
                        ><span class="nums">12490浏览，8评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="419509"
                data-type="3"
                data-cs-p="位置_3"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/378064.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">
                    华山自由行攻略/一日游/两日游/夜爬都在此
                  </div>
                  <div class="txt">
                    <div class="info">
                      为了更好描述华山路线，本人亲自绘制比官方更直观的地图来制作攻略，感动不感动？至少我自己感动了，哈哈
                    </div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s17/M00/90/BC/CoUBXl-8AXiACP23AAlef46jZuI54.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s17/M00/97/C6/CoUBXl-8A3yACbTYAAA-Ifu41H009.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s17/M00/B4/D3/CoUBXl-8DuOAfa70AAOsMqwHj_s575.jpg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">21317浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="305517"
                data-type="1"
                data-cs-p="位置_4"
              >
                <a
                  href="https://www.mafengwo.cn/i/17944906.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">126</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">
                    坐着火车唱着歌，感受天堂般的宁静与红色之浪漫——瑞士、布...
                  </div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://b1-q.mafengwo.net/s14/M00/4B/30/wKgE2l0WLi-ABlebABCI6RbDloE874.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        这次瑞士之行，原本并没有太强烈，但总有一些东西，要用消失来证明它的珍贵，从尼泊尔、死海、大洋路十二门徒，到马耳他蓝窗、巴黎圣母院、巴西博物馆……一次次对无法再现的人文、自然景观而感到心痛。如果我只剩下一场旅行，那就让我先登上欧洲最高级别...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://b1-q.mafengwo.net/s6/M00/C9/5E/wKgB4lNeXS-AEaoxAAIJAFhOyGQ76.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />滑过紫薇星</span
                        ><span class="nums">1012浏览，9评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="130182"
                data-type="3"
                data-cs-p="位置_5"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/223687.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">大理独一无二的特色美食</div>
                  <div class="txt">
                    <div class="info">
                      大理是一座温柔的城市，苍山雪，洱海月，都美得不需添加任何修饰便让人流连忘返；而且美食众多，吃货们不必拘束，大可在饱览大理山水美景的同时来一场美食之旅。
                    </div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s12/M00/17/6F/wKgED1wUcDGATDzLAAKFi-ewPFI02.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s12/M00/FD/A2/wKgED1wUU72AQY3zAAJIApAYGpM19.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s12/M00/FD/A2/wKgED1wUU72AWrz5AAIKSjC-dXg82.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">56666浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="249946"
                data-type="1"
                data-cs-p="位置_6"
              >
                <a
                  href="https://www.mafengwo.cn/i/15727038.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">143</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">
                    日本纪伊山地禅修之旅——熊野古道、高野山、伊势志摩
                  </div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://p1-q.mafengwo.net/s14/M00/44/11/wKgE2l0rEweAKUuVAAhIfOy1wWA064.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        心路历程
                        自前收集西班牙圣地亚哥朝圣之路的时候，发现还有一条朝圣之路就在日本，就是熊野古道。在上个月去日本中部北陆升龙道之前，就想走一趟熊野古道了。这次看到有特价机票，就头脑发热订了机票。
                        继上次11年独自在新疆喀纳斯重装徒步3天2夜之后，至...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://b1-q.mafengwo.net/s10/M00/9B/67/wKgBZ1orzrqAayzNAACigQ2WR7E18.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />mac</span
                        ><span class="nums">1396浏览，12评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="154674"
                data-type="1"
                data-cs-p="位置_7"
              >
                <a
                  href="https://www.mafengwo.cn/i/11691438.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">14</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">EBC，因为救赎，因为信仰。</div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/4D/35/wKgED1v8lJWAA4pjAAi8MxzYjHE33.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        回想
                        回到成都，已然秋末，空气中多了几分水气，艳阳明晃晃地挂在头顶，因为醉氧，我忍不住频频地打呵欠。恍然间，自己还沉浸在那高原的日子中不能自拔。
                        事隔这么久，在写下这些文字，整理这些影像时，会隐隐感到这次行走也许让自己产生了某种变化。这件...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://n1-q.mafengwo.net/s10/M00/EA/1B/wKgBZ1mTuJeATXCCAAYDKU3a1zM01.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />holytale5996</span
                        ><span class="nums">407浏览，0评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="441859"
                data-type="1"
                data-cs-p="位置_8"
              >
                <a
                  href="https://www.mafengwo.cn/i/22096426.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">64</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">
                    黔所未有，云上贵州【自驾贵州保姆级多图攻略】
                  </div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://b1-q.mafengwo.net/s18/M00/B0/90/CoUBYGBBzWuAP-ToAAHjRuG8sH8919.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        写在前面的话。
                        虽然是海边人但还是非常喜欢海，出游总是优先考虑东南亚，因为疫情的关系没办法出国，心里一直默默的在找到第下一程要去哪，直到无意间刷到一篇贵州的攻略，才发现了贵州这个宝地，终于找到了机会，空出8天的时间，好好的走了一趟黔所未有...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://n1-q.mafengwo.net/s17/M00/91/9B/CoUBXl93BlmATkFtADqhOcoLpxM06.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />宸胤</span
                        ><span class="nums">1336浏览，0评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="30262"
                data-type="3"
                data-cs-p="位置_9"
              >
                <a
                  href="https://www.mafengwo.cn/localdeals/mdd_topic_21382/?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">188</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">去丽江玩需要花多少钱？怎么才能省钱？</div>
                  <div class="txt">
                    <div class="info">
                      去丽江旅游，很多人都会关心花费的问题。丽江是滇西北旅游重镇，旅游资源丰富，交通相对便利，你可以根据自己的喜好选择景点，所以去哪些景点，玩几天，就和个人预算息息相关了。下面给大家列出了几种不同的玩法和预算，相信看完后，对于花费你心里就有底了。
                    </div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s10/M00/8D/E1/wKgBZ1mbzPmAQ7TxAAmpnIdmy3o15.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s8/M00/7E/FD/wKgBpVVCbaiATROUABgggntOsr462.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s5/M00/1F/8B/wKgB3FGr74GAdcWoAAGHP6QjV0E35.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">70961浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="187326"
                data-type="3"
                data-cs-p="位置_10"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/250648.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">大理租车自驾攻略（深度环洱海篇）</div>
                  <div class="txt">
                    <div class="info">
                      洱海很美 需要静下心来欣赏 自驾环海感受不一样的洱海
                    </div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s13/M00/E6/60/wKgEaVxzkY2AY6vQAAOzYc9YR5g95.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s13/M00/3F/CB/wKgEaVyHKHWAbfhtABWW13wMcvk59.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s13/M00/D2/91/wKgEaVxzho6ASrXNAA4Kq5ngmRY45.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">279909浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
            </div>
            <div
              data-cs-t="gonglve_feed"
              class="_j_feed_data"
              data-feed='[{"fid":"231842","type":"1"},{"fid":"438886","type":"3"},{"fid":"32764","type":"2"},{"fid":"107390","type":"3"},{"fid":"10952","type":"4"}]'
            >
              <div
                class="feed-item _j_feed_item"
                data-fid="231842"
                data-type="1"
                data-cs-p="位置_11"
              >
                <a
                  href="https://www.mafengwo.cn/i/12760962.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">25</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">你好，布隆迪</div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://n1-q.mafengwo.net/s13/M00/8E/EC/wKgEaVzaTxaAesL-AADVFexqIbc32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                        style="width: 220px"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        说起非洲，你会想到什么？神秘，狂野，热情如火？还是贫穷，战乱，草原广阔？我们总会听到他，在新闻里，或是别人的谈资里。若你不曾去过，凭着想象与耳闻妄议他，未免有失公允。如果不是被派到布隆迪工作，我可能永远都不会来非洲吧，可能也就人云亦云了...
                      </div>
                      <div class="ext-r">
                        <span class="author"
                          ><img
                            src="http://n1-q.mafengwo.net/s13/M00/96/A2/wKgEaVzaDxaAauvnABJxy8nZ2xI26.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                          />lina小糊涂</span
                        ><span class="nums">1642浏览，10评论</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="438886"
                data-type="3"
                data-cs-p="位置_12"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/396312.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">初到青岛必游地</div>
                  <div class="txt">
                    <div class="info"></div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s18/M00/6F/4F/CoUBYGBtZ5mASoigAASeiDSajXo19.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s12/M00/B5/78/wKgED1vfFzGAKeLlAAtuOjhplFw96.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s11/M00/CD/79/wKgBEFuCuweAHKEQADUuH-_37XI95.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">23057浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="32764"
                data-type="2"
                data-cs-p="位置_13"
              >
                <a
                  href="https://www.mafengwo.cn/wenda/detail-7520092.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">110</span> 蜂蜂赞<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-wenda"></i>来自
                      <strong>问答</strong></span
                    >
                  </div>
                  <div class="title">
                    芭提雅附近哪个海岛好玩？沙美岛、格兰岛、金沙岛怎么选？
                  </div>
                  <dl class="art clearfix">
                    <dt>
                      <img
                        src="http://b1-q.mafengwo.net/s10/M00/D9/F7/wKgBZ1kvteqAHlhoAAGkGMHce5s271.png?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
                      />
                    </dt>
                    <dd>
                      <div class="info">
                        芭提雅附近三个游客最多的海岛：格兰岛、沙美岛、金沙岛
                        水上项目——首选格兰岛 体验潜水——首选沙美岛
                        爱好浮潜——首选金沙岛 1.格兰岛-玩水上项目首选
                        格兰岛又称可兰岛／珊瑚岛，金沙岛，是芭堤雅海滩外最大的岛，岛的四周有许多沙滩，沙白细绵，海底又有许多珊瑚和热带鱼，这个岛的娱乐项目最...
                      </div>
                      <div class="ext-r">
                        <span class="nums">341580浏览，13回答</span>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="107390"
                data-type="3"
                data-cs-p="位置_14"
              >
                <a
                  href="https://www.mafengwo.cn/gonglve/ziyouxing/168850.html?cid=1010616"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">0</span> 蜂蜂体验过<i
                        class="icon-cart"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-sales"></i>来自
                      <strong>自由行攻略</strong></span
                    >
                  </div>
                  <div class="title">慈溪的两天一夜，让周末假期更多选择</div>
                  <div class="txt">
                    <div class="info">登古道 听梵音 玩滑翔伞</div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s12/M00/E3/E9/wKgED1u6uT-AO_gaAAIhCI0ZerU05.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://p1-q.mafengwo.net/s12/M00/E2/8D/wKgED1u6uJ-ANDvzAAh9uV_bX58207.gif?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s12/M00/E2/8E/wKgED1u6uKCAEt6KAAC1H4h46XI50.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">4673浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="10952"
                data-type="4"
                data-cs-p="位置_15"
              >
                <a
                  href="https://www.mafengwo.cn/weixin/article-924.html"
                  target="_blank"
                >
                  <div class="bar clearfix">
                    <span class="stat"
                      ><span class="num">106</span> 蜂蜂喜欢<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-notes"></i>来自
                      <strong>官方账号</strong></span
                    >
                  </div>
                  <div class="title">5家酒店，带你邂逅优雅的墨尔本</div>
                  <div class="txt">
                    <div class="info">
                      墨尔本这样一座充满优雅气质的城市，走在街头，那些或高贵典雅的奢华酒店或艺术感十足的设计酒店，也为这座城市增添了一丝独特的韵味。
                    </div>
                  </div>
                  <div class="imgs">
                    <ul class="clearfix">
                      <li>
                        <img
                          src="http://n1-q.mafengwo.net/s9/M00/D6/92/wKgBs1ga7R6Aea2YAAPdbFOYEe065.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s9/M00/D6/99/wKgBs1ga7SaAUfn5AADHsrx2pYU61.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li>
                        <img
                          src="http://b1-q.mafengwo.net/s9/M00/D6/9E/wKgBs1ga7SqAFMyVAACtrI6O51I51.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                        />
                      </li>
                      <li class="ext-r">26057浏览</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="hr"></div>
              <a
                rel="nofollow"
                data-page="2"
                class="_j_page_loader"
                data-cs-p="加载更多_1"
                ><span>加载更多</span><i></i
              ></a>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="side-hd">旅游攻略导航</div>
          <div class="nav-drop">
            <div class="drop-item">
              <div class="trigger"><i></i>国内</div>
              <div class="drop-pop">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/mdd-bj-0-0-1.html#list" target="_blank"
                        >北京(30)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sc-0-0-1.html#list" target="_blank"
                        >四川(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-yn-0-0-1.html#list" target="_blank"
                        >云南(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-js-0-0-1.html#list" target="_blank"
                        >江苏(26)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-zj-0-0-1.html#list" target="_blank"
                        >浙江(21)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gd-0-0-1.html#list" target="_blank"
                        >广东(19)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-heb-0-0-1.html#list" target="_blank"
                        >河北(16)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-tw-0-0-1.html#list" target="_blank"
                        >台湾(16)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gz-0-0-1.html#list" target="_blank"
                        >贵州(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sd-0-0-1.html#list" target="_blank"
                        >山东(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nm-0-0-1.html#list" target="_blank"
                        >内蒙古(14)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xz-0-0-1.html#list" target="_blank"
                        >西藏(13)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gx-0-0-1.html#list" target="_blank"
                        >广西(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-jx-0-0-1.html#list" target="_blank"
                        >江西(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-qh-0-0-1.html#list" target="_blank"
                        >青海(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hn-0-0-1.html#list" target="_blank"
                        >河南(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hlj-0-0-1.html#list" target="_blank"
                        >黑龙江(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xj-0-0-1.html#list" target="_blank"
                        >新疆(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ah-0-0-1.html#list" target="_blank"
                        >安徽(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-fj-0-0-1.html#list" target="_blank"
                        >福建(9)</a
                      >
                    </li>
                    <li>
                      <a
                        href="/gonglve/mdd-hainan-0-0-1.html#list"
                        target="_blank"
                        >海南(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hub-0-0-1.html#list" target="_blank"
                        >湖北(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-jl-0-0-1.html#list" target="_blank"
                        >吉林(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gs-0-0-1.html#list" target="_blank"
                        >甘肃(8)</a
                      >
                    </li>
                    <li>
                      <a
                        href="/gonglve/mdd-hunan-0-0-1.html#list"
                        target="_blank"
                        >湖南(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-s1x-0-0-1.html#list" target="_blank"
                        >山西(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-s3x-0-0-1.html#list" target="_blank"
                        >陕西(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ln-0-0-1.html#list" target="_blank"
                        >辽宁(6)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-mc-0-0-1.html#list" target="_blank"
                        >澳门(5)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hk-0-0-1.html#list" target="_blank"
                        >香港(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-cq-0-0-1.html#list" target="_blank"
                        >重庆(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sh-0-0-1.html#list" target="_blank"
                        >上海(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nx-0-0-1.html#list" target="_blank"
                        >宁夏(2)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-tj-0-0-1.html#list" target="_blank"
                        >天津(2)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="drop-item">
              <div class="trigger"><i></i>国外</div>
              <div class="drop-pop">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/mdd-oz-0-0-1.html#list" target="_blank"
                        >欧洲(102)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dny-0-0-1.html#list" target="_blank"
                        >东南亚(73)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-bmz-0-0-1.html#list" target="_blank"
                        >北美洲(41)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dy-0-0-1.html#list" target="_blank"
                        >东亚(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dyz-0-0-1.html#list" target="_blank"
                        >大洋洲(23)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ny-0-0-1.html#list" target="_blank"
                        >南亚(20)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-fz-0-0-1.html#list" target="_blank"
                        >非洲(17)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xy-0-0-1.html#list" target="_blank"
                        >西亚(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nmz-0-0-1.html#list" target="_blank"
                        >南美洲(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-njz-0-0-1.html#list" target="_blank"
                        >南极洲(1)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="drop-item">
              <div class="trigger"><i></i>主题</div>
              <div class="drop-pop">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/zt-1051-1-0-0.html#list" target="_blank"
                        >数据报告(47)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1049-0-0-0.html#list" target="_blank"
                        >休闲(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1037-0-0-0.html#list" target="_blank"
                        >户外(18)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1022-0-0-0.html#list" target="_blank"
                        >文化(17)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1046-0-0-0.html#list" target="_blank"
                        >特别策划(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1006-0-0-0.html#list" target="_blank"
                        >美食(14)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1027-0-0-0.html#list" target="_blank"
                        >购物(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1017-0-0-0.html#list" target="_blank"
                        >自驾(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1044-0-0-0.html#list" target="_blank"
                        >节庆(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1023-0-0-0.html#list" target="_blank"
                        >必备(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1026-0-0-0.html#list" target="_blank"
                        >观赏(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1014-0-0-0.html#list" target="_blank"
                        >周边(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1016-0-0-0.html#list" target="_blank"
                        >摄影(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1050-0-0-0.html#list" target="_blank"
                        >旅行主义(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1047-0-0-0.html#list" target="_blank"
                        >建筑(5)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1033-0-0-0.html#list" target="_blank"
                        >家庭(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1045-0-0-0.html#list" target="_blank"
                        >星旅行(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1003-0-0-0.html#list" target="_blank"
                        >滑雪(1)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1028-0-0-0.html#list" target="_blank"
                        >登山(1)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rank">
            <ul>
              <li class="gl_list">
                <a href="/gonglve/mdd-10035.html" title="成都" target="_blank">
                  <img
                    src="http://b1-q.mafengwo.net/s9/M00/6F/96/wKgBs1au-wuAcJRRAAli-UGtV0E29.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90"
                    alt="成都"
                  />
                </a>
                <p class="time">更新日期:2016-02-01</p>
                <div class="down_cout">
                  <span></span>
                  <p>5047210人下载</p>
                </div>
              </li>
              <li>
                <span class="num">2</span>
                <a href="/gonglve/mdd-10208.html" title="重庆" target="_blank"
                  >重庆</a
                >
              </li>
              <li>
                <span class="num">3</span>
                <a href="/gonglve/mdd-10195.html" title="西安" target="_blank"
                  >西安</a
                >
              </li>
              <li>
                <span class="num">4</span>
                <a href="/gonglve/mdd-10156.html" title="杭州" target="_blank"
                  >杭州</a
                >
              </li>
              <li>
                <span class="num">5</span>
                <a href="/gonglve/mdd-10466.html" title="长沙" target="_blank"
                  >长沙</a
                >
              </li>
              <li>
                <span class="num">6</span>
                <a href="/gonglve/mdd-10207.html" title="苏州" target="_blank"
                  >苏州</a
                >
              </li>
              <li>
                <span class="num">7</span>
                <a href="/gonglve/mdd-10088.html" title="广州" target="_blank"
                  >广州</a
                >
              </li>
              <li>
                <span class="num">8</span>
                <a href="/gonglve/mdd-10684.html" title="南京" target="_blank"
                  >南京</a
                >
              </li>
              <li>
                <span class="num">9</span>
                <a href="/gonglve/mdd-10132.html" title="厦门" target="_blank"
                  >厦门</a
                >
              </li>
              <li>
                <span class="num">10</span>
                <a href="/gonglve/mdd-10128.html" title="扬州" target="_blank"
                  >扬州</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>

    <!-- 攻略导航 -->
    <!-- <StrategyNav /> -->
    <!-- 发布攻略按钮1 md以下 -->
    <!-- <StrategyPuba /> -->
    <!-- 攻略首页内容 -->
  </section>
</template>
<script>
// 导入接口API
// import { getMainStrategy, getHotStrategy } from "@/api/getData.js";

import Swiper from "../../components/Swiper";
import StrategyNav from "./components/StrategyNav";
// import StrategyPuba from "../Strategy/components/StrategyPuba";
export default {
  name: "Strategy",
  components: {
    Swiper,
    StrategyNav,
    // StrategyPuba,
  },
  data() {
    return {
      arts: [],
      currentPage: 1,
      hots: [],
      // 图片地址数组
      imgs: [
        require("../../assets/img/Swiper/swiper01.png"),
        require("../../assets/img/Swiper/swiper02.png"),
        require("../../assets/img/Swiper/swiper03.png"),
        require("../../assets/img/Swiper/swiper04.png"),
        require("../../assets/img/Swiper/swiper05.png"),
      ],
      imgWidth: "700px",
      imgHeight: "340px",

      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      allPage: 4,

      isShowSelect: false,
      isShowRecommend: false,
      isShowIsland: false,
      isShowTheme: false,
    };
  },
  computed: {
    resultPage() {
      const page = [];
      for (
        let i = (this.currentPage - 1) * this.allPage;
        i < this.currentPage * this.allPage;
        i++
      ) {
        page.push(this.arts[i]);
      }
      return page;
    },
  },
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
    // this.getMainData();
    // this.getHotData();
  },
  methods: {
    showSelect() {
      this.isShowSelect = true;
    },
    hideSelect() {
      this.isShowSelect = false;
    },
    showRecommend() {
      this.isShowRecommend = true;
    },
    hideRecommend() {
      this.isShowRecommend = false;
    },
    showIsland() {
      this.isShowIsland = true;
    },
    hideIsland() {
      this.isShowIsland = false;
    },
    showTheme() {
      this.isShowTheme = true;
    },
    hideTheme() {
      this.isShowTheme = false;
    },
    // 异步调用 strategy 接口
    // 获取 main 数据
    async getMainData() {
      // // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getMainStrategy();
        console.log("攻略 Main 数据", result);
        this.arts = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },

    async getHotData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getHotStrategy();
        console.log("攻略 Hot 数据", result);
        // this.Tourlist = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },

    // handleSizeChange(val) {
    //   this.allPage = val; // 每页
    // },
    // handleCurrentChange(val) {
    //   this.currentPage = val; // 当前页
    // },
    // setSize: function () {
    //   // 通过浏览器宽度(图片宽度)计算高度
    //   this.bannerHeight = (400 / 1920) * this.screenWidth;
    // },
    // publishStr() {
    //   this.$router.push("/strategy_add");
    // },
    // mounted() {
    //   // 首次加载时,需要调用一次
    //   this.screenWidth = window.innerWidth;
    //   this.setSize();
    //   // 窗口大小发生改变时,调用一次
    //   window.onresize = () => {
    //     this.screenWidth = window.innerWidth;
    //     this.setSize();
    //   };
    // },
    // details(index) {
    //   this.$router.push({
    //     name: "stdetails",
    //     params: { strategy_id: index },
    //   });
    //   console.log(index);
    // },
  },
};
</script>

<style>
.strategy_top {
  display: flex;
  flex-direction: row;
}

.mdd_nav {
  width: 260px;
}

.slide {
  width: 700px;
  height: 340px;
}

.gonglve-nav {
  width: 260px;
  border: 1px solid #ddd;
  border-bottom: 0;
  box-shadow: 0 0.5px 2px rgb(0 0 0 / 10%);
  position: relative;
  z-index: 10;
}

.gonglve-nav .nav-title {
  height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  cursor: default;
  position: relative;
  z-index: 2;
}

.gonglve-nav .nav-title .gn-arrow {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 6px;
  height: 10px;
  background: url(../../assets/img/icon/new-gl-icon6@2x.png) no-repeat -20px -40px;
  overflow: hidden;
}

.gonglve-nav .nav-title .gn-arrow {
  background-image: url(../../assets/img/icon/new-gl-icon6@2x.png);
  background-size: 60px auto;
}

.gonglve-nav .nav-panel {
  position: absolute;
  left: 258px;
  top: -1px;
  width: 350px;
  height: 338px;
  border: 1px solid #ddd;
  background-color: #fff;
  /* display: none; */
  box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
}

.gonglve-nav .rank-panel ol {
  position: absolute;
  z-index: 2;
  padding: 15px 10px;
  width: 260px;
  line-height: 30px;
}

.gonglve-nav .rank-panel li {
  height: 30px;
  overflow: hidden;
}

.gonglve-nav .rank-panel .top3 .rank-num,
.gonglve-nav .rank-panel .top3 strong a {
  color: #ffa800;
}

.gonglve-nav .rank-panel .rank-num {
  float: left;
  width: 30px;
  font-size: 20px;
  font-family: Letter Gothic Std, Verdana, Geneva, sans-serif;
  text-align: right;
  color: #aaa;
  font-weight: bold;
}

.gonglve-nav .rank-panel strong {
  padding: 0 15px;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}

.gonglve-nav .nav-panel a {
  color: #999;
}

.gonglve-nav .nav-banner {
  position: absolute;
  _top: 1px;
  z-index: 1;
  width: 506px;
  height: 345px;
  background-repeat: no-repeat;
  background-position: right bottom;
  /* display: none; */
}

.gonglve-nav .category-panel {
  width: 490px;
  padding: 10px 0;
  height: 318px;
}

.gonglve-nav .category-panel .nav-panel {
  position: absolute;
  left: 258px;
  top: -1px;
  width: 350px;
  height: 338px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: none;
  box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
}

.category-panel dl {
  margin: 0 0 0 20px;
  padding-left: 60px;
  border: 0;
  font-size: 12px;
  width: auto;
  height: auto;
  line-height: 20px;
}

.category-panel dt {
  float: left;
  display: inline;
  width: 60px;
  height: 20px;
  background: none;
  margin: 5px 0 5px -60px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  line-height: 20px;
  font-size: 12px;
  cursor: default;
  color: #666;
  font-weight: bold;
}

.category-panel dd {
  display: inline;
  position: static;
  border: 0;
  width: auto;
  padding: 0;
  float: left;
  margin: 5px 15px 5px 0;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 20px;
}

.input_like {
  border: 2px #ffa800 solid;
  height: 40px;
  margin-top: 10px;
  position: relative;
  z-index: 10;
}

.input_like span {
  float: left;
  height: 27px;
  width: 29px;
  background: url(../../assets/img/icon/new-gl-icon6@2x.png) -20px -60px
    no-repeat;
  margin-top: 7px;
  margin-left: 8px;
}

.input_like span {
  background-image: url(../../assets/img/icon/new-gl-icon6@2x.png);
  background-size: 60px auto;
}

.input_like input {
  line-height: normal;
}

.input_like input {
  height: 30px;
  line-height: 30px;
  float: left;
  width: 206px;
  padding: 3px 0px;
  border: 0px;
  font-size: 12px;
  color: #888888;
  margin-left: 8px;
  margin-top: 2px;
  outline: none;
  font-family: "Microsoft Yahei", Tahoma, Arial, Helvetica, STHeiti;
  _font-family: Tahoma, Arial, Helvetica, STHeiti;
}

.clear {
  clear: both;
  display: block;
  height: 0;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}

.search_resu {
  border: 1px #ffa800 solid;
  width: 518px;
  position: absolute;
  z-index: 50;
  top: 41px;
  left: -2px;
  background: #fff;
  padding-bottom: 30px;
  display: none;
}
</style>
