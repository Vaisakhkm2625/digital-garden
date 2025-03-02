---
{"dg-publish":true,"permalink":"/fleeting-notes/integration-with-firewalld-for-docker/"}
---

## [Integration with firewalld](https://docs.docker.com/engine/network/packet-filtering-firewalls/#integration-with-firewalld)

If you are running Docker with the `iptables` option set to `true`, and [firewalld](https://firewalld.org)

is enabled on your system, Docker automatically creates a `firewalld` zone called `docker`, with target `ACCEPT`.

All network interfaces created by Docker (for example, `docker0`) are inserted into the `docker` zone.

Docker also creates a forwarding policy called `docker-forwarding` that allows forwarding from `ANY` zone to the `docker` zone.