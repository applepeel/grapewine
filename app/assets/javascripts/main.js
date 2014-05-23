var ajaxObjects = new Array();
var ajaxObjectsDelayProtect = new Array();

function trim(str) {
    return str.replace(/^\s*|\s*$/g, "");
}

var is = new function() {
    this.VER = navigator.appVersion
    this.AGENT = navigator.userAgent
    this.DOM = document.getElementById ? 1 : 0
    this.IE = (document.all && !this.DOM) ? 1 : 0;
    this.MAC = this.AGENT.indexOf("Mac") > -1
    this.NS6 = document.getElementById && !document.all ? 1 : 0
    this.NS4 = (document.layers && !this.DOM) ? 1 : 0;
    this.OPERA = this.AGENT.indexOf('Opera') > -1
    return this
}

function getElement(id) {
    if (is.DOM) return document.getElementById(id)
    else
        if (is.IE) return eval("document.all." + id)
    else
        if (is.NS) return eval("document." + id)
}

function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
	  e.style.display = 'none';
   else
	  e.style.display = 'block';
}

function AddToFavorites()
{
    var title = document.title;
    var url = "http://www.filmam.com";
    if (window.sidebar) // Firefox
	    window.sidebar.addPanel(title, url, '');
    else if(window.opera && window.print) // Opera
    {
	    var elem = document.createElement('a');
	    elem.setAttribute('href',url);
	    elem.setAttribute('title',title);
	    elem.setAttribute('rel','sidebar'); // required to work in opera 7+
	    elem.click();
    } 
    else if(document.all) // IE
	    window.external.AddFavorite(url, title);
}

function emailink(){
window.location = "mailto:"+"?subject=MCL North Africa - http://www.filmam.com" + "&body="+window.location.href;
}
function Imprimir() {
    var a = window.open('', '', 'scrollbars=yes,width=720,height=500');
    a.document.open("text/html");
    a.document.write('<html>\n<head>\n<link rel="stylesheet" href="/css/main.css" media="all" type="text/css" />\n<style>\n.noprint{display:none}\n<\/style>\n</head>\n<body style="background-image:none;background-color:#FFFFFF;">\n');
    a.document.write('<table align="center" width="700" border="0" cellpadding="10" cellspacing="0">\n<tr>\n<td align="left">\n<img align="absmiddle" src="/images/banner_impressao.jpg" border="0" alt="" /><br/><br/>');
    a.document.write('<tr>\n<td>\n');
    a.document.write(document.getElementById('print').innerHTML);
    a.document.write('\n<\/td>\n<\/tr>\n');
    a.document.write('<\/table>\n');
    a.document.write('<\/body>\n<\/html>');
    a.document.close();
    a.print();
}

function set_style(idx, stl) {
    var obj = document.getElementById(idx)
    //alert(obj.className);
    obj.className = stl;
}

function testField(field) {
    var regExpr = new RegExp("^\d*\.?\d*$");
    if (!regExpr.test(field.value)) {
      // Case of error
      field.value = "";
    }
}


//***************************************

function changeSize(obj, value) {
    try {
        elements = obj.split(",");
        for (i = 0; i < elements.length; i++)
            document.getElementById(elements[i]).style.fontSize = (parseInt(document.getElementById(elements[i]).style.fontSize) + value) + 'px';
    } catch (e) {
        alert(e.description);
    }
}

function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
}

function testaIE6() {
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ 
		var ieversion=new Number(RegExp.$1)
		if (ieversion<7) {
			return true;
		} else  {
			return false;
		}
	} else  {
		return false;
	}
}

/* ****/

function CheckIsIE() {
    if (navigator.appName.toUpperCase() == 'MICROSOFT INTERNET EXPLORER') { return true; }
    else { return false; }
}


/*----------------Ajax getContent -------------------*/
function getContent(url,divobj,fnc_completo,params){
	try {
	pageTracker._trackPageview(url);
	} catch(err) {}
	var ajaxIndex = ajaxObjects.length;
	ajaxObjectsDelayProtect[url] = ajaxIndex;
	ajaxObjects[ajaxIndex] = new sack();
	ajaxObjects[ajaxIndex].requestFile = url;
	ajaxObjects[ajaxIndex].encodeURIString = false;
	ajaxObjects[ajaxIndex].onCompletion = function() {showContent(divobj,ajaxIndex,url,fnc_completo);};
	ajaxObjects[ajaxIndex].runAJAX(params);
	showWaitMessage(divobj);
} 

function showWaitMessage(divobj){
	divobj.innerHTML = '<img src="/images/ajax-loader.gif" alt="A carregar dados..." />';
}

function showContent(divobj,index,url,fnc_completo){
	if (ajaxObjectsDelayProtect[url] == index){divobj.innerHTML = ajaxObjects[index].response;	}
	if (fnc_completo)eval(fnc_completo);
}

function showhide2(id) {
    obj = getElement(id);
    viz = obj.style.display;
    if (viz == 'block') {
        obj.style.display = "none";
    } else {
        obj.style.display = "block";
    }
}


function Reload(obj1, id) {
    window.parent.document.getElementById('iframe_recomendar').src = "/form_recomendar.aspx?idcont=" + id;
}

function mostrar_pedirinfo(obj, obj1) {
    document.getElementById(obj1).style.display = 'block';
    pos = findPos(obj);
    pos_x = pos[0];
    document.getElementById(obj1).style.left = pos_x-180 + 'px';
    pos_y = pos[1];
    pos_y = pos_y;
    document.getElementById(obj1).style.top = pos_y+20 + 'px';
}

function esconder_pedirinfo(obj1) {
    //getElement(obj1).style.display = 'none';
    window.parent.document.getElementById(obj1).style.display = 'none';
}

function mostrar_lang(obj,obj1)
{
    if(document.getElementById(obj1).style.display == 'block'){
        document.getElementById(obj1).style.display = 'none';
    } else {
        document.getElementById(obj1).style.display = 'block';
        pos = findPos(obj);
        pos_x = pos[0]-110;
        document.getElementById(obj1).style.left =  pos_x+'px';
        pos_y = pos[1];
        pos_y = pos_y-190;
        document.getElementById(obj1).style.top = pos_y+'px';
    }
}
