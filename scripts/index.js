window.onload=function(){
	var row=10;
	var sence=document.getElementById('cence');
	for(var i=0;i<row;i++){
		var hh=document.createElement('div');
		hh.setAttribute=('class','block');
		hh.style.position='absolute';
		hh.style.top=((500/row)/2+(500/row)*i)+'px';
		hh.style.width='500px';
		hh.style.height='1px';
		// hh.style.boxShadow='0px 0px 5px black';
		hh.style.background='#4a370f';
		sence.appendChild(hh);

		var ss=document.createElement('div');
		ss.setAttribute=('class','block');
		ss.style.position='absolute';
		ss.style.left=((500/row)/2+(500/row)*i)+'px';
		ss.style.width='1px';
		ss.style.height='500px';
		// ss.style.boxShadow='2px 2px 5px black';

		ss.style.background='#4a370f';
		sence.appendChild(ss);

	}
	var width=Math.floor((500-row)/row)+'px';
	var height=Math.floor((500-row)/row)+'px';
	var el=document.getElementById('cence');
	for(var i=0;i<row;i++){
		for(var j=0;j<row;j++){
			var aa=document.createElement('div');
			aa.setAttribute('class','block');
			aa.setAttribute('id',i+'_'+j);
			aa.style.width=width;
			aa.style.height=height;
			el.appendChild(aa);
		}
	}
var panduan=function(id,dict){
  var x=Number(id.split('_')[0]);
  var y=Number(id.split('_')[1]);
  var tx ,ty;
  var heng=1;
  tx=x;ty=y;
  while(dict[tx+'_'+(ty+1)]){heng++;ty++;}
  tx=x;;ty=y;
  while(dict[tx+'_'+(ty-1)]){heng++;ty--;}
  if(heng==5){return true;}

  var lie=1;
  tx=x;ty=y;
  while(dict[(tx-1)+'_'+ty]){lie++;tx--;}
  tx=x;ty=y;
  while(dict[(tx+1)+'_'+ty]){lie++;tx++;}
  if(lie==5){return true;}

  var zx=1; tx=x;ty=y;
  while(dict[(tx-1)+'_'+(ty+1)]){zx++;tx--;ty++;}
  tx=x;ty=y;
  while(dict[(tx+1)+'_'+(ty-1)]){zx++;tx++;ty--;}
  if(zx==5){return true;}

   var yx=1; tx=x;ty=y;
  while(dict[(tx-1)+'_'+(ty-1)]){yx++;tx--;ty--;}
  tx=x;ty=y;
  while(dict[(tx+1)+'_'+(ty+1)]){yx++;tx++;ty++;}
  if(yx==5){return true;}
};
var kaiguan=true;
var dict1={};
var dict2={};
var blocks=document.getElementsByClassName('block');

var tc=document.getElementById('tc');
for(i=0;i<blocks.length;i++){
	blocks[i].onclick=function(){	
		if(this.hasAttribute('hasColor')){return;}
		this.style.position='relative';
		this.style.zIndex='99999';
		this.style.borderRadius=(500/row)+'px';
		if(kaiguan){
			this.style.background='white';
			this.style.boxShadow='inset -5px -5px 10px #999999';
			kaiguan =false;
			var id=this.getAttribute('id');
			dict1[id]=true;
			if(panduan(id,dict1)){
				// alert('白棋获胜！');
				tc.style.display='block';
				tc.innerHTML='白棋获胜';
			}

		}
		else{
			this.style.background='#2C2C2C';
			this.style.boxShadow='inset -5px -5px 12px black';

			kaiguan= true;
			var id=this.getAttribute('id');
			dict2[id]=true;
			if(panduan(id,dict2)){
				// alert('黑棋获胜！');
				tc.style.display='block';
				tc.innerHTML='黑棋获胜';

			}
		}
		// return;
		this.setAttribute('hasColor',true);
	}
}

var zlyj=document.getElementById('zlyj');
zlyj.onclick=function(){
	location.reload();
};



var bangzhu=document.getElementById('bangzhu');
var bangzi=document.getElementById('bangzi');
var bb=document.getElementById('bb');
bangzhu.onclick=function(){
	bangzi.style.display='block';
}
bb.onclick=function(){
	bangzi.style.display='none';
}

























};