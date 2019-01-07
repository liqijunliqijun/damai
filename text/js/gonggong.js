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


































