---
{"dg-publish":true,"permalink":"/fleeting-notes/hibernate-proxies/"}
---


# Hibernate Proxies

- generate proxies as sub class of  the main class
- 
we can check if a we something is a hibernate proxy by check if it's instance of `HibernateProxy.class` method

```java
assertThat(chessGame.getPlayerWhite()).isInstanceOf(HibernateProxy.class)
```

and we can check if's initialised by using

```java
assertThat(Hibernate.isInitialized(chessGame.getPlayerWhite())).isFalse();
```













[[fleeting_notes/hibernate\|hibernate]]

