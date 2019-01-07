

//--------------------------
//侧栏,返回顶部事件
	document.onclick = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		setInterval(function(){
			if ( long >= 0){
				long -=200;
				document.documentElement.scrollTop = long;
			}
		},20);
	}
	//返回顶部滚动事件，，，在一定范围时出现，
	document.onscroll = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		if(long >=600){
			console.log($('.retop'));
			$('.retop')[0].style.display = 'block';
	
		}else{
			$('.retop')[0].style.display = 'none';
		}
	}
//----------------------------

//轮播图
	//设置定时器
//	let myTime = null ; 
	//思路： 此题，我们要让图片和圆点的顺序，样式改变，所以要以改变下标的方式
	//    改变下标，再给他的值从新赋值的思路；
	//需要创建的函数有； 一.;遍历图片和圆点，改变样式
//					     二.  改变下标；
//					   三. 启动定时器，使其运动的函数；
//					 四. 停止定时器的函数；
//				        五. 圆点和图片之间的函数，点击圆点，改变图片顺序；
//				      六.鼠标移上图片，图片停止运动，离开运动；
	//需要定义属性；  定时器；；下标，，
		var inbiao = 0;
	var moveTime = null;

//一.遍历图片和圆点，改变样式
function showImg(inOrd,outOrd){
		if(inOrd == outOrd){
			return;
		}
	let imgs = $('.active');
	imgs[inOrd].style.opacity = 0;
		imgs[outOrd].style.opacity = 1;

		//2)淡入淡出效果
		fadeInOut(imgs[inOrd],imgs[outOrd],500);
	}
function showLi(){
		let lis = $('.q');
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor = "#999";
		}
		lis[inbiao].style.backgroundColor = "red";
	}
// 三. 启动定时器，使其运动的函数；
	function playImg(){
		moveTime = setInterval(function(){
		let outOrd = inbiao;
			inbiao ++;
	
			if(inbiao > 4){
				inbiao = 0;
			}
			
			showImg(inbiao,outOrd);
			showLi();
		},3000);
	}
//四. 停止定时器的函数；	
	function stopImg(){
		window.clearInterval(moveTime);
	}

	function goImg(transOrd){
		let outOrd = inbiao;//让当前图片淡出
		inbiao = transOrd;
		showImg(inbiao,outOrd);
		showLi();
	}
	
	
//-----------------------------
//页面加载事件；，在一个页面里面只能有一个；

window.onload = function(){
	
		playImg();
		$('#box').onmouseover = stopImg;
		$('#box').onmouseout = playImg;
		let lis =$('.q');
		for(let i =0 ; i < lis.length; i++){			
			lis[i].setAttribute("index",i);
			lis[i].onclick = function(){
				let index = lis[i].getAttribute("index");
				goImg(index);
			}
		
		}
		$('.p-right')[0].onclick = function (){
			var inbiao1 = inbiao+1;
			
			if(inbiao1 >lis.length-1){
				inbiao1 =0;
			}
			stopImg()
			goImg(inbiao1);
		}
		$('.p-left')[0].onclick = function (){
			
			var inbiao1 = inbiao-1;
			
			if(inbiao1 <0){
				inbiao1 =lis.length-1;
			}
			stopImg()
			
			goImg(inbiao1);
		}
	//-----------------------
	//地址栏,事件
		for(let j = 0; j< $('.name-city').length-1; j++ ){
				
			 $('.name-city')[j].onclick = function(){
				$('#cityheaderwrap').style.display = 'none';
			          console.log(this);
			    $('#dizhi').innerHTML=this.innerHTML;
			}
		}
		$('.heardOne-1')[0].onmouseover = function(){
			$('#cityheaderwrap').style.display = 'block';
	
			$('#cityheaderwrap').style.background="#EBEBEB";
			
		}
		$(".heardOne-1")[0].onmouseout = function(){
			$('#cityheaderwrap').style.display = 'none';
		}
	//登录	
$('#denglu').onmouseover = function(){
		$('.zhanghao')[0].style.display = 'block';
	
		$('.zhanghao')[0].style.background="#FF0078";
			var aa =$('.zhan');
			for(let i =0 ; i<aa.length; i++ ){
				aa[i].onmouseover = function(){
					aa[i].style.background = 'thistle';
				}
				aa[i].onmouseout = function(){
					aa[i].style.background = 'white';
				}
			}
		}
		$('#denglu').onmouseout = function(){
			$('.zhanghao')[0].style.display = 'none';
		}
		
		
	$('#jiaobrat').onmouseover = function(){
			$('.xiazai')[0].style.display = 'block';
		}
	$("#jiaobrat").onmouseout = function(){
			$('.xiazai')[0].style.display = 'none';
		}
		
	
	// --------------------------
// ------------------------------
var www = $(".deng")[0];
var w1 = $(".denglu")[0];
var w2 = $(".denglu")[1];
var w3 = $(".denglu")[2];
//			console.log(w3);
var kuaisu = $(".zhuce")[0].getElementsByTagName("span")[0];
var shoujidenglu = $(".zhuce")[1].getElementsByTagName("span")[0];
var lijizhuce =$("#lijizhuce");
var qita   = $(".zhuce")[2].getElementsByTagName("span")[0];
var InpTxHidText   = $(".InpTxHidText")[0];
var InpTxHidden   = $(".InpTxHidden")[0];
//			console.log(InpTxHidText);
//			console.log(shouji);
	
	
var ccc = $(".zhanghao")[0].getElementsByTagName("a")[0];

var bbb = $(".zhanghao")[0].getElementsByTagName("a")[1];



bbb.onclick = function(){
	$("#xxx").style.display = "block";
	www.style.display = "block";
	w1.style.display = "block"; //d登陆
	$("#opsecity")[0].style.display = "block";
	kuaisu.onclick = function(){
		w1.style.display = "none";
		w2.style.display = "block"; //
		w3.style.display = "none";
			
		lijizhuce.onclick = function(){
			w2.style.display = "none";
			w3.style.display = "none";
			w1.style.display = "block";
			
			qita.onclick = function(){
				w2.style.display = "block";
				w1.style.display = "none";
				w3.style.display = "none";
			}
		}
	}
}
InpTxHidText.onclick = function(){
	InpTxHidden.style.display = "block";
	InpTxHidText.style.display = "none";
}
shoujidenglu.onclick = function(){
	w3.style.display = "block";//手机登陆  -- 其他登陆
	w2.style.display = "none";//登陆  ---立即注册 --其手机登陆
	w1.style.display = "none";//注册 ----- 快速登陆
}
//		console.log($("#lijizhuce"));
ccc.onclick = function(){
	$("#xxx").style.display = "block";

	www.style.display = "block";
	w2.style.display = "block"; //登陆  ---立即注册 --其手机登陆
	w1.style.display = "none";  //注册 ----- 快速登陆
	w3.style.display = "none"; //手机登陆  -- 其他登陆
	$("#opsecity").style.display = "block";

lijizhuce.onclick = function(){
		w2.style.display = "none";
		w3.style.display = "none";
		w1.style.display = "block";//zhuce

	kuaisu.onclick = function(){
		w1.style.display = "none";
		w2.style.display = "block"; //
		w3.style.display = "none";
	}		
}
}
//w2. //登陆  ---立即注册 --其手机登陆
//w1.  //注册 ----- 快速登陆
//w3. //手机登陆  -- 其他登陆
qita.onclick = function(){
w1.style.display = "none";
w2.style.display = "block"; //
w3.style.display = "none";
}		
//		console.log($("#lijizhuce"));

//	
$("#xxx").onclick = function(){
$(".deng")[0].style.display = "none";
$("#opsecity").style.display = "none"; //
w1.style.display = "none";
w2.style.display = "none"; //
w3.style.display = "none";
}		

// 	$("#xxx")[0].click(function(){
//		$(".deng")[0].css({"dispaly":"none"})
//		$("#opsecity")[0].css({"display":"none"})	
//	})
//	console.log($("#xxx")[0])
//
//-------------------

}	
	
	













