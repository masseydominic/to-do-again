(function(){
	'use strict';
	angular.module("apptodo", [])
	.controller("appdocontroller", appdocontroller)
	.service("appDoService", appDoService);


	appdocontroller.$inject=['appDoService'];
	 function appdocontroller(appDoService){
		var adc = this;
		adc.test="ToDo App";
		adc.item='';
		adc.item1='';
		adc.list = appDoService.getitem();
		adc.blank=0;
		adc.x=0;
		adc.add = function(data){
			adc.x=0;
			document.getElementById("no_items1").innerHTML= "";
			if(data==""){
					return (adc.blank="Poof! Enter a task Please!");
				}
			else{
				appDoService.additem(data);
				adc.blank=0;
				adc.item='';
			}
		}
		adc.searchItem = function(task){
			appDoService.delitem2();
			var temp='';
			console.log(adc.list.length);
			if(adc.list<=0){
				document.getElementById("no_items1").innerHTML= "No items added";
				adc.item1 = '';
			}
			else{
				task= task.toLowerCase();
			for (var i = 0; i <=adc.list.length-1; i++) {
				temp= adc.list[i];
					// console.log(temp);
					// if (temp.toLowerCase().indexOf(data)!==-1) {
					if (temp.toLowerCase().indexOf(task)!==-1 && task!='') {
						adc.x=0;
						// console.log(task);
						adc.item1 = '';
						appDoService.additem2(temp);
						adc.list2 = appDoService.getitem2();
					} else{
						adc.x=1;
						adc.item1 = '';
					}
				
				}

			}

		if (adc.list2.length>0){
					adc.x=0;
					console.log("hello");
				}
				else{
					adc.x=1;
					// console.log(adc.list2.length);
				}
	
	}

	adc.move = function(x, index){
			adc.x=0;
			appDoService.delitem(index);
			console.log('asdasd');
		}
}

	function appDoService(){
		var ads= this;
		var list1= [];
		var list2 = [];
		ads.additem = function(data){
				list1.push(data);
				// tds.getitem();
			}
			ads.additem2 = function(task){
			list2.push(task);
		}

		ads.getitem = function(){
			// console.log(list1);
			return list1;
		}
		ads.getitem2 = function(){
			// console.log(list1);
			return list2;
		}

		ads.delitem = function(x){
			list1.splice(x,1);
			console.log("asdasd");
		}
		ads.delitem2 = function(){
			list2.splice(0,list2.length);
			console.log("asdasd");
		}


	}
})();