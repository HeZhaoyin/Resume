webpackJsonp([1],{33:function(n,e,t){t(72);var o=t(78)(t(35),t(79),null,null);n.exports=o.exports},35:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(20),r=t.n(o),s=t(38),i=t.n(s),a=t(37),u=t.n(a),l=t(74),c=t.n(l),d=t(73),f=t.n(d);e.default={name:"app",data:function(){return{isMarked:!1,styleCode:"",finalStyleCode:"\n/*大家好，我是何兆殷\n想应聘的岗位是前端工程师\n在写简历的时候，我在想，该做成什么样，才能给HR留下深刻的印象呢？\n对了，我来用CSS和JS写一份简历吧\n*/\n\n/*先给各种元素添加一个过渡效果吧*/\n*{\n  transition: all .3s;\n  -webkit-transition: all .3s;\n}\n\n/*先给背景和文字换个颜色*/\nbody{\n  color:#fff;\n  background:#003D79;\n  transform-style: preserve-3d;\n}\n/*文字距离旁边好像有点太近了，我来调一下*/\n.content{\n  width:45vw;\n  height:80vh;\n  margin-top:40px;\n  margin-left:20px;\n  padding-left:20px;\n  border:1px solid #fff;\n  overflow:auto;\n}\n\n/*设置一个代码高亮*/\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/*加个3D效果好了*/\nbody{\n  perspective:800px;\n}\n.content{\n  transform-origin:left;\n  transform:rotateY(5deg);\n}\n\n/*我来准备一下简历的版面*/\n.resume{\n  position:fixed;\n  right:20px;\n  top:5px;\n  width:40vw;\n  height:90vh;\n  padding:20px;\n  background:#fff;\n  color:#000;\n  font-size: 14px;\n}\n/*好，我开始写简历了.....*/\n",resumeCode:"",finalResumeCode:"## 何兆殷的简历\n---\n联系方式\n- 手机：15521040565\n- Email：2561033753@qq.com\n- QQ/微信号：2561033753 / Monster679914\n---\n个人信息\n - 何兆殷/男/1994\n - 本科/广州大学华软软件学院软件工程系\n - 工作年限：1年\n - 技术博客：http://www.echobunny.com\n - Github: [BunnyWithYou](https://github.com/BunnyWithYou/)\n - 期望职位：Web前端工程师\n - 期望薪资：税前月薪10k~15k\n - 期望城市：广州\n---\n技能清单\n以下均为我熟练使用的技能\n- Web开发：CSS/HTML/JavaScript\n- 前端框架：Bootstrap/AngularJS/Vue/HTML5/\n- 前端工具：Webpack\n- 数据库相关：MySQL/MSSQL\n- 版本管理、文档和自动化部署工具：Svn/Git\n",continueStyleCode:"\n/*对了，我的简历是用MarkDown做的，让我来用插件转换成html格式吧*/\n"}},created:function(){this.writeResume()},methods:{writeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.showStyleCode();case 2:return n.next=4,this.showResumeCode();case 4:return n.next=6,this.markedIt();case 6:console.log("ok");case 7:case"end":return n.stop()}},n,this)}));return n}(),showStyleCode:function(){var n=this;return new r.a(function(e,t){var o=0,r=n.finalStyleCode.length,s=setInterval(function(){n.styleCode=n.finalStyleCode.substring(0,o),n.$nextTick(function(){n.$refs.content.scrollTop=1e5}),o===r?(clearInterval(s),e()):o++},10)})},showResumeCode:function(){var n=this;return new r.a(function(e,t){var o=0,r=n.finalResumeCode.length,s=setInterval(function(){n.resumeCode=n.finalResumeCode.substring(0,o),n.$nextTick(function(){n.$refs.resumeBox.scrollTop=1e5}),o===r?(clearInterval(s),e()):o++},10)})},markedIt:function(){var n=this,e=this.continueStyleCode.length,t=0,o=setInterval(function(){n.styleCode=n.styleCode+n.continueStyleCode.substring(t-1,t),n.$nextTick(function(){n.$refs.content.scrollTop=1e5}),t>=e&&(clearInterval(o),n.isMarked=!0),t++},20)}},computed:{highlightedCode:function(){return c.a.highlight(this.styleCode,c.a.languages.css)},writeStyleCode:function(){return"<style>"+this.styleCode+"</style>"},resumeCodeResult:function(){return this.isMarked?f()(this.resumeCode):this.resumeCode}}}},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(34),r=t(33),s=t.n(r);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:s.a}})},72:function(n,e){},79:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{ref:"content",staticClass:"content",attrs:{id:"app"}},[t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}},[n._v(n._s(n.styleCode))])]),n._v(" "),t("div",{ref:"resumeBox",staticClass:"resume"},[t("div",{domProps:{innerHTML:n._s(n.resumeCodeResult)}})]),n._v(" "),t("div",{domProps:{innerHTML:n._s(n.writeStyleCode)}})])},staticRenderFns:[]}}},[36]);
//# sourceMappingURL=app.888b72371425217dded0.js.map