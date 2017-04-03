<template>
	<div>
		<div id="app" class="content" ref="content">
			<pre v-html="highlightedCode">{{styleCode}}</pre>
		</div>
		<div class="resume" ref="resumeBox">
			<pre>{{resumeCode}}</pre>
		</div>
	    <div v-html="writeStyleCode">
	    </div>
	</div>
</template>

<script>
import Prism from 'prismjs'
export default {
  name: 'app',
  data(){
	  return {
		  styleCode:``,
		  finalStyleCode:`
/*大家好，我是何兆殷
想应聘的岗位是前端工程师
在写简历的时候，我在想，该做成什么样，才能给HR留下深刻的印象呢？
对了，我来用CSS和JS写一份简历吧
*/

/*先给各种元素添加一个过渡效果吧*/
*{
  transition: all .3s;
  -webkit-transition: all .3s;
}

/*先给背景和文字换个颜色*/
body{
  color:#fff;
  background:#003D79;
  transform-style: preserve-3d;
}
/*文字距离旁边好像有点太近了，我来调一下*/
.content{
  width:40vw;
  height:70vh;
  margin-top:40px;
  margin-left:20px;
  padding-left:20px;
  border:1px solid #fff;
  overflow:auto;
}
/*加个3D效果好了*/
body{
  perspective:800px;
}
.content{
  transform-origin:left;
  transform:rotateY(5deg);
}
/*设置一个代码高亮*/
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/*我来准备一下简历的版面*/
.resume{
  position:fixed;
  right:20px;
  top:5px;
  width:40vw;
  height:90vh;
  padding:20px;
  background:#fff;
  color:#000;
}
/*好，我开始写简历了.....*/
`,
resumeCode:'',
finalResumeCode:`
# 何兆殷的简历

---


# 联系方式

- 手机：15521040565
- Email：2561033753@qq.com
- QQ/微信号：2561033753 / Monster679914

---

# 个人信息

 - 何兆殷/男/1994
 - 本科/广州大学华软软件学院软件工程系
 - 工作年限：1年
 - 技术博客：http://www.echobunny.com
 - Github: [BunnyWithYou](https://github.com/BunnyWithYou/)

 - 期望职位：Web前端工程师
 - 期望薪资：税前月薪10k~15k
 - 期望城市：广州

---

# 技能清单
以下均为我熟练使用的技能

- Web开发：CSS/HTML/JavaScript
- 前端框架：Bootstrap/AngularJS/Vue/HTML5/
- 前端工具：Webpack
- 数据库相关：MySQL/MSSQL
- 版本管理、文档和自动化部署工具：Svn/Git
`,
	  }
  },
  created(){
	  this.writeResume();
  },
  methods:{
	  writeResume: async function(){
		  await this.showStyleCode();
		  await this.showResumeCode();
		  console.log('ok');
	  },
	  showStyleCode(){
		  return new Promise((resolve, reject)=>{
			  var n = 0;
			  var styleCodeLen = this.finalStyleCode.length;
			  var timer = setInterval(()=>{
				  this.styleCode = this.finalStyleCode.substring(0,n);
				  this.$nextTick(()=>{
					  this.$refs.content.scrollTop = 100000;
				  })
				  if (n === styleCodeLen) {
					  clearInterval(timer);
					  resolve();
				  }else{
  				  	  n++;
				  }
			  },15)
		  })
	  },
	  showResumeCode(){
		  return new Promise((resolve, reject)=>{
			  var n = 0;
			  var resumeCodeLen = this.finalResumeCode.length;
			  var timer = setInterval(()=>{
				  this.resumeCode = this.finalResumeCode.substring(0,n);
				//   this.$nextTick(()=>{
				// 	  this.$refs.resumeBox.scrollTop = 100000;
				//   })
				  if (n === resumeCodeLen) {
					  clearInterval(timer);
					  resolve();
				  }else{
						  n++;
				  }
			  },30)
		  })
	  }
  },
  computed:{
	  highlightedCode:function(){
		  return Prism.highlight(this.styleCode,Prism.languages.css)
	  },
	  writeStyleCode(){
		  return '<style>' + this.styleCode + '</style>';
	  }
  }
}
</script>
<style>
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
	white-space: pre-wrap;
}
.resume{
	white-space: pre-wrap;
}
</style>
