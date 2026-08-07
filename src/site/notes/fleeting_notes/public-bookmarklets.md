---
{"dg-publish":true,"permalink":"/fleeting-notes/public-bookmarklets/","dg-note-properties":{}}
---

[📥 Download SASTRA LMS PDF](javascript:(function(){var p=null;function w(r,d){if(d>8)return;try{var q=r.querySelectorAll('*');for(var i=0;i<q.length;i++){var e=q[i];if(e.shadowRoot){var f=w(e.shadowRoot,d+1);if(f)return f}if(e.contentDocument){var f=w(e.contentDocument,d+1);if(f)return f}}}catch(e){}try{var w2=r.defaultView||r.ownerDocument.defaultView;if(w2.PDFViewerApplication&&w2.PDFViewerApplication.pdfDocument)return w2.PDFViewerApplication.pdfDocument}catch(e){}try{var e=r.querySelector('d2l-pdf-viewer');if(e&&e._pdfDocument)return e._pdfDocument}catch(e){}return null}p=w(document,0);if(p){p.getData().then(function(b){var u=URL.createObjectURL(new Blob([b],{type:'application/pdf'}));var a=document.createElement('a');a.href=u;a.download='document.pdf';a.click()})}else{alert('Not a SASTRA PDF viewer page')}})())

## Related
- [[fleeting_notes/sastra university\|fleeting_notes/sastra university]]
- [[fleeting_notes/sastra university welcome\|fleeting_notes/sastra university welcome]]
- [[fleeting_notes/iitm-instrutionbeforesubmit\|fleeting_notes/iitm-instrutionbeforesubmit]]
