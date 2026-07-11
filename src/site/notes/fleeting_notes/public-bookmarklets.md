---
{"dg-publish":true,"permalink":"/fleeting-notes/public-bookmarklets/","dg-note-properties":{}}
---


```
javascript:(function(){function dfs(r){try{var f=r.getElementById('content');if(f&&f.src&&/View/.test(f.src)){window.open(f.src,'_blank');return 1}}catch(e){}try{var els=r.querySelectorAll('*');for(var i=0;i<els.length;i++){var e=els[i];if(e.shadowRoot&&dfs(e.shadowRoot))return 1;if(e.tagName=='IFRAME'&&e.contentDocument&&dfs(e.contentDocument))return 1}}catch(e){}return 0}dfs(document)})();
```

<a href="javascript:(function(){function dfs(r){try{var f=r.getElementById('content');if(f&&f.src&&/View/.test(f.src)){window.open(f.src,'_blank');return 1}}catch(e){}try{var els=r.querySelectorAll('*');for(var i=0;i<els.length;i++){var e=els[i];if(e.shadowRoot&&dfs(e.shadowRoot))return 1;if(e.tagName=='IFRAME'&&e.contentDocument&&dfs(e.contentDocument))return 1}}catch(e){}return 0}dfs(document)})();"> </a>