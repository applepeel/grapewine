function encodec(texto) {
	var result = "";	
	for (i = 0;i < texto.length;i++) {
		if (texto.charAt(i) == " ") result += "+";
		else result += texto.charAt(i);
	}
	return encodeURI(result);
}
function addtoXmark(param, link, txt){
	switch(param)
	{
	case 'ask':
	  window.open('http://myjeeves.ask.com/mysearch/BookmarkIt?v=1.2&t=webpages&url='+link+'&title='+encodec(txt));
	  break;
	case 'digg':	  
	  window.open('http://digg.com/submit/?phase=2&partner=%5bpartner%5d&url='+link+'&title='+encodec(txt));
	  break;
	case 'delicious':
	  window.open('http://delicious.com/save?jump=yes&v=4&partner=[partner]&noui&url='+link+'&title='+encodec(txt));
	  break;
	case 'facebook':
	  window.open('http://www.facebook.com/sharer.php?u='+link+'&t='+encodec(txt));
	  break;
	case 'google':
	  window.open('http://www.google.com/bookmarks/mark?op=add&bkmk='+link+'&title='+encodec(txt));
	  break;
	case 'linkedin':
	  window.open('http://www.linkedin.com/shareArticle?mini=true&url='+link+'&title='+encodec(txt)+'&ro=false&summary=&source=');
	  break;
	case 'live':
	  window.open('https://skydrive.live.com/sharefavorite.aspx/.SharedFavorites??marklet=1&mkt=en-us&url='+link+'&title='+encodec(txt)+'&top=1&jump=1&wa=wsignin1.0');
	  break;
	case 'multiply':
	  window.open('http://expertmedialda.multiply.com/journal/compose?body=&url='+link+'&subject='+encodec(txt));
	  break;
	case 'myspace':
	  window.open('http://www.myspace.com/Modules/PostTo/Pages/?u='+link+'&t='+encodec(txt)+'&c=%20');
	  break;
	case 'reddit':
	  window.open('http://www.reddit.com/submit?url='+link+'&title='+encodec(txt));	  
	  break;
	case 'stumbleupon':
	  window.open('http://www.stumbleupon.com/submit?url='+link+'&title='+encodec(txt));
	  break;
	case 'tumblr':
	  window.open('http://www.tumblr.com/new/text?post[one]='+encodec(txt)+'&post[two]=%3Cp%3E%3Ca+href%3D%22'+link+'%3E'+encodec(txt)+'%3C%2Fa%3E');
	  break;
	case 'twitter':
	  window.open('http://twitter.com/home?status='+link);
	  break;
	case 'yahoo':
	  window.open('http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u='+link+'&t='+encodec(txt));
	  break;
	}
}