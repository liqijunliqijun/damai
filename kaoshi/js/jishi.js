



//$(function(){
//	
//	$("#inp").bind("keypress",function(event){
//		if (event.keyCode ==13) {
//			let newDiv = '<div class="teText">'+
//			'<span ></span>'+
//			'<input type="checkbox"  id="check" value="" />'+
//			'<p></p>' +
//			'<img id="Img" src="img/yinwenyemian.png"/>'+
//			'</div>'
//			$('#hind').html(newDiv);
//			$('#hind #teText p').html($('#inp').value);
//		}
//	})
//	
//})	


window.onload = function(){
//	回车创建
	function sayInfo(){
		let  Div = document.createElement("div");
		let  Span = document.createElement("span");
		let  Input = document.createElement("input");
		let  Ps = document.createElement("p");
		let  IMg = document.createElement("img");
		
			Input.type = "checkbox";

			IMg.src = "img/yinwenyemian.png";
			Div.className = "tetxt"
			
			$('#hind').appendChild(Div);
			Div.appendChild(Span);
			Div.appendChild(Input);
			Div.appendChild(Ps);
			Div.appendChild(IMg);
			
//			IMg.className = 'jian';
			
			Div.style.cssText = "margin:0 20px 10px 20px; display: inline-block;height: 30px;width: 560px;background: white;border-top-left-radius:4px ;border-bottom-left-radius:4px ;";
			Span.style.cssText = "margin-right: 15px;display: block;height: 30px;width: 5px;border-top-left-radius:4px ;border-bottom-left-radius:4px ;background:cadetblue;float: left;";
			Input.style.cssText = "width: 15px;height: 15px;background-color: white;margin-top: 7.5px;float: left;margin-right: 20px;";
			Ps.style.cssText = "display: block;height: 30px;width:300px;float: left;line-height: 30px;font-weight: 600;font-size: 16px;";
			IMg.style.cssText = "cursor: pointer;	 margin: 5px;display: block;height: 20px;width: 20px;float: right;;";
		
		let shuru = $("#inp").value;

			Ps.innerHTML = shuru;
			$("#inp").value="";
	}
	let num =0;
//	键盘事件-----------------
	$("#inp").onkeydown = function(event){
		let evt = event || window.event;
		if($("#inp").value != "" && evt.keyCode==13 ){
			sayInfo();
			num ++;
		}
	$("#tou").innerHTML = num;
 	delets(num);

 	
 	checken();
	}
	
//----删除 1-------

	function delets(num){
//	let  sun = $("#tou").innerHTML;
	let jian = $("#hind").getElementsByTagName("img");

		for(let i = 0; i< jian.length; i++){
			jian[i].onclick = function(){
				let kk = confirm("你确定要删除吗了？");
				console.log('nn--')
				if(kk){
					this.parentNode.remove();
					num --;
				}
				$("#tou").innerHTML = num;
				$("#inp").onkeydown = function(event){
					let evt = event || window.event;
					if($("#inp").value != "" && evt.keyCode==13 ){
						sayInfo();
						num ++;
					}
				$("#tou").innerHTML = num;
				delets(num);
 				checken();
				}

			}
		}
	}
//------------------------------------
//点击创建
function sayInfo2(){
		let  Div = document.createElement("div");
		let  Span = document.createElement("span");
		let  Input = document.createElement("input");
		let  Ps = document.createElement("p");
		let  IMg = document.createElement("img");
		
			Input.type = "checkbox";
			Input.checked=true;

			IMg.src = "img/yinwenyemian.png";
			Div.className = "tetxt"
			
			$('#fonten').appendChild(Div);
			Div.appendChild(Span);
			Div.appendChild(Input);
			Div.appendChild(Ps);
			Div.appendChild(IMg);
			
			Div.className = "box";
			Div.style.cssText = "margin:0 20px 10px 20px; display: inline-block;height: 30px;width: 560px;background: #EEEEEE;border-top-left-radius:4px ;border-bottom-left-radius:4px ;";
			Span.style.cssText = "margin-right: 15px;display: block;height: 30px;width: 5px;border-top-left-radius:4px ;border-bottom-left-radius:4px ;background:#A9A9A9;float: left;";
			Input.style.cssText = "width: 15px;height: 15px;background-color: white;margin-top: 7.5px;float: left;margin-right: 20px;";
			Ps.style.cssText = "display: block;height: 30px;width:300px;float: left;line-height: 30px;font-weight: 600;font-size: 16px;";
			IMg.style.cssText = "cursor: pointer;	 margin: 5px;display: block;height: 20px;width: 20px;float: right;;";
			
		}
//第二个删除 -2
	function delet2(){
		let  sun2 = $("#end").innerHTML;
		let jian = $("#fonten").getElementsByTagName("img");
		let ji =   $("#fonten").getElementsByClassName("tetxt");
		for(let i = 0; i< jian.length; i++){
			jian[i].onclick = function(){
				let kk = confirm("你确定要删除吗了？");
//				console.log('nn--')
				if(kk){
					this.parentNode.remove();
					sun2 --;
				}
				$("#end").innerHTML = sun2;
			}
		}
	}	
//点击事件
	function checken(){
		let sun = $("#tou").innerHTML;
			let num2 =0;
			var v=0;
		let check = $("#hind").getElementsByTagName("input");
		let pls = $("#hind").getElementsByTagName("p");
		for(let i = 0; i< check.length; i++){
			
			check[i].onclick = function(){
				var  innText = this.nextSibling.innerHTML;
					console.log(innText);
				
				let kk = confirm("你确定好了吗？");
				if( kk == true){
					this.parentNode.remove();
					sayInfo2();
					num2 ++;
					sun --;
					console.log(i);
					$("#end").innerHTML = num2;
					$("#tou").innerHTML = sun;

					$(".box")[v].children[2].innerHTML = innText
						v++;
				}
				delet2()
				
				
			}
		}
	}
	

}