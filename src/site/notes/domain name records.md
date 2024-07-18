---
{"dg-publish":true,"permalink":"/domain-name-records/"}
---


# Domain names

- Name servers
- dns records
	
DNS Record s

points people to emails etc

## Different categories for dns record s

Mail records
MX records

Website records
A records

Informational records
TXT records

- and much more
## NS Records

- Everything starts with NS Records
- NS Record point to the "Control center"
- This is where all dns records live

- The NS Records are hosted by the company we buy domain names from

- Minimum 2 NS Records
- Rarely there will be more than 2 NS Records

godaddy
ns11.domaincontrol.com 
ns12.domaincontrol.com

cloudflare
anne.ns.cloudflare.com
jeff.ns.cloudflare.com

- *Default* NS Record will points to where you registered domain

## A Records

- A Records are related to your website
- website name - Ip address
2 feilds we see are:
	- Domain name
	- ip address
- commonly for just a website, domain name willl be @ symbol
- @ means root domain

name for A record will be:
if there is no subdomain - @ (for yoursite.com)
if there is subdomain - subdomain    (for subdomain.yoursite.com)


- we can only have 1 ipaddress for a A record
- but we can have different A record ipaddress for a subdomain

## MX Records ( mail exchange recoreds )

normally there will be 2-5 MX records for managing email hosting

- people using gmail all will have same MX records
- sometimes for microsoft exchange/ office 365, MX records and configs may very

### Feilds
- Name/ Domain feild - "@" or "yourdomain.com"
- Mail server - "mx.zoho.com", "mx2.zoho.com"
- priority - "1", "10","20","50" (1 to 60000)
- TTL - 3600 (time to live)


for MS exchange, priority sometimes are "0"

## CNAME
used for redirects

- Name
- Desitinations
common CNAME entries
Name: www
Destination: @

- '\*' is a catch all name  
name: \*.yourdomain.com -> 123.yourdomain.com

##  TXT Records types

used for wide range of things
- verifiing domains

Name:
Content:

## Pitfalls to avoid
### Migration
- your clients domain in your dns, change all the records,
	- eg: redirected websites, but not mails, so mails will get bounced 



# References
https://www.youtube.com/watch?v=YV5tkQYcvfg&t=1467s











