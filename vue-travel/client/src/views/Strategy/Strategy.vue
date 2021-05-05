<template>
  <section class="strategy">
    <!-- 攻略导航 -->
    <section class="strategy_top">
      <div class="mdd_nav">
        <div class="gonglve-nav" data-cs-t="攻略导航">
          <navSelect />
          <navRecommend />
          <navIsland />
          <navTheme />
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
        <Swiper :imgs="imgs" :width="imgWidth" :height="imgHeight"/>
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
import navSelect from "../Strategy/components/navSelect"
import navRecommend from "../Strategy/components/navRecommend"
import navIsland from "../Strategy/components/navIsland"
import navTheme from "../Strategy/components/navTheme"
// import navSelect from "../Strategy/components/navSelect"
// import navSelect from "../Strategy/components/navSelect"
import Swiper from "../../components/Swiper";
import StrategyNav from "./components/StrategyNav";
// import StrategyPuba from "../Strategy/components/StrategyPuba";
export default {
  name: "Strategy",
  components: {
    navSelect,
    navRecommend,
    navIsland,
    navTheme,
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
      imgWidth: "960px",
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
  justify-content: space-evenly;
  margin-top: 15px;
}

.mdd_nav {
  width: 260px;
}

.slide {
  width: 960px;
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

.gonglve_wrap {
    margin-top: 15px;
    padding-bottom: 20px;
}

.cont-main {
    float: right;
    width: 790px;
    margin-bottom: 20px;
}

.cont-main .hd {
    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 48px;
}

.cont-main .hd h3 {
    float: left;
    font-weight: normal;
    font-size: 20px;
    color: #333;
}

.feed-item {
    padding: 20px 0;
    font-size: 14px;
    line-height: 24px;
}

.feed-item a {
    display: block;
}

.feed-item .stat {
    float: right;
    padding: 0 15px;
    line-height: 30px;
    border: 1px solid #ff9d00;
    border-radius: 15px;
    font-size: 14px;
    background-color: #fff;
    color: #666;
}

.feed-item .stat .num {
    color: #ff9d00;
}
</style>
