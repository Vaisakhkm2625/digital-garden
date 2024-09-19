---
{"dg-publish":true,"permalink":"/fleeting-notes/powerautomate-confluence-autobackup-mails/"}
---


## the  Confluence
### getting the attachment uri
go to confluence page
... at top corner
Attachments 
right click on the attachment, copy the url 

### getting access token
go to confluence page , click on profile at top-right corner, then `ssettings>psersonal access tokens`
click on 'create token' .... and copy the token

### Testing the token

go to a new a confluence page, and open devtools

on console, type
```javascript
let a = await fetch("https...<attachment uri>", method: 'GET', headers: {'Authorization': 'Bearer <paste token here>'} )
let b = await a.blob()
console.log(b)

```
if it is a blob type of big size and type of the attachment (excel?) then api token is working

## power automate automation
in teams, open (+) apps button, search for microsoft workflow

click on 'create from blank' button
### schedule
search for 'recurrence(under schedule)' 
set frequency as 'day'
### http download

next click 'new step'

search for *http* action
 URI - paste attachment uri
 Method - GET
Heaaders - Authorization - Bearer `<paste personal access token>` 
Content-Type - application/json

the response body willl be used in next step
## Senting the mail

search outlook 365 -> select 'send an email(v2)'

add 'to', 'subject', 'body'

click on 'show advanced option'

click on attachment -  
click on 'body' on the popup that came (this is the body of the response)
click on attachment Name - 1 and give a name to the attachment file (test.xlsx)

## Saving and running the flow
click on 'save' button on left top
click on 'run button at top'

