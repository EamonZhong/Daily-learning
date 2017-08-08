let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let list1 = Array.from(ul1.children);
let result = []; //存放点击数据的


if(localStorage.getItem('mmm')){
	result = JSON.parse(localStorage.getItem('mmm'));
	addHtml(result);		
}

window.addEventListener('storage',function(){
	if(localStorage.getItem('mmm')){
		result = JSON.parse(localStorage.getItem('mmm'));
		addHtml(result);
	}
	
});

list1.forEach((e,i)=>{
	e.onclick = function(){
		if(!result.includes(e.innerHTML)){
			result.push(e.innerHTML);
			addHtml(result);
			localStorage.setItem('mmm',JSON.stringify(result));
		}
	}
});

function addHtml(arr){
	let html = '';
	arr.forEach(e=>{
		html += `<li>${e}</li>`;
	});
	
	ul2.innerHTML = html;
}

ul2.onclick=function(ev){
	let cn=ev.target.innerText;
	var s=result.findIndex(e=>e==cn)
	result.splice(s,1)
	//console.log(result)
	ev.target.remove();
	localStorage.setItem('mmm',JSON.stringify(result))
}



