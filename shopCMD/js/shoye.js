window.onload=function(){
			var oBox=document.getElementById('box');
			var oUl=oBox.children[0];
			var aLi=oUl.children;
			var oOl=oBox.children[1];
			var aBtn=oOl.children;
			var iNow=0;
			var timer=null;
			//布局转化
			oUl.innerHTML+=oUl.innerHTML;
			oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
			var w=oUl.offsetWidth/2;

			for(var i=0;i<aBtn.length;i++){
				(function(index){
					aBtn[i].onclick=function(){
						iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
						tab();

					}
				})(i)
			}

		
			function tab(){
				clearInterval(timer);
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className='';
				}
				aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
				startMove(oUl,-iNow*aLi[0].offsetWidth);
				
			}
			var left=0;
			function startMove(obj,iTarget){
				var count=Math.floor(1000/30);
				var start=left;
				var dis=iTarget-start;
				var n=0;
				timer=setInterval(function(){
					n++;
					var a=1-n/count;
					left=start+dis*(1-Math.pow(a,3));
					obj.style.left=(left%w-w)%w+'px';
					if(n==count){
						clearInterval(timer);
					}
				},30);
			}
		}