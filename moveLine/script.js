// Code goes here
function OnClick(option) {
  var elem = option.elem;  
  var t = 0;
  var a = option.a;
  var v0 = option.v0;
  
  option.timer = setInterval(function() {
        var procent = v0*t + a*t*t/2; 
		t =t+ 0.01;
        elem.style.left =  procent + '%';
        
        //if (option.)
        option.distance.value = Math.round(procent*10);
        if (procent > 99) clearInterval(option.timer);

      }, 25);  
}
function Stop(option){
	clearInterval(option.timer);
	option.elem.style.left = 0;
	}
