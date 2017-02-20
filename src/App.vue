<template>
  <div>      
  	<router-view></router-view>
  	<div id="app">
  		<ul>
    		<li>
    			<a href="#/"><img src="./assets/nav_home_selected.png"/></a>
    			<p>主页</p>
    		</li>
    		<li>
    			<a href="#/home"><img src="./assets/footer_classify.png"/></a>
    			<p>分类</p>
    		</li>
    		<li>
    			<a href="#/per"><img src="./assets/nav_eat.png"/></a>
    			<p>吃饭吧</p>
    		</li>
    		<li>
    			<a href="#/car"><img src="./assets/nav_list.png"/></a>
    			<p>购物车</p>
    		</li>
    		<li>
    			<a href="#/mine"><img src="./assets/nav_user.png"/></a>
    			<p>我的易果</p>
    		</li>
    	</ul>
  	</div> 	
   </div>
</template>

<script>
export default {
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
body,html{
	font-size:62.5% ;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
	color:
}
/*a:hover{
		background: url(assets/nav_home_selected.png);
}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.6rem;
  color: #2c3e50;
 	border-top:1px solid #ccc;
	width: 100%;
	position: fixed;
	z-index: 99999;
	bottom:0;
	background: white;
}
#app li{
	 float: left;
	 width:20%;
}
#app li a img{
	width: 60%;
}

</style>
