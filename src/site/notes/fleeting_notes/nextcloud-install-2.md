---
{"dg-publish":true,"permalink":"/fleeting-notes/nextcloud-install-2/"}
---

# Next cloud installation on Oracle cloud

https://www.youtube.com/watch?v=fpr37FJSgrw

https://www.youtube.com/watch?v=OCLq62KOqNU
https://docs.docker.com/engine/network/packet-filtering-firewalls/#docker-and-ufw

advanced manual install with learnlinuxtv
https://www.youtube.com/watch?v=fpr37FJSgrw


- make a instance
- point a domain to it
## Initial Server Configuration

### Creating new user

> this is on linode, oracle cloud does creates a user called *ubuntu* by default

```sh
# add a new user
adduser <user> 

# add user to sudo group
usermod -aG sudo <user>

# checking if user added to sudo currectly
groups <user>
```

### Adding hostname
```sh
vi /etc/hostname
```
remove localhost and add domain name to that file (cloud.linuxwith.in)

add this to hosts file for making the services resolve itself 
```
127.0.1.1 cloud.linuxwith.in cloud
```

### update the machines

```sh
sudo apt  update && sudo apt dist-upgrade
```

### install and configure firewall

> `firewalld` has a lot more features and greater controller than `ufw`

```
sudo apt -y install firewalld

sudo ufw disable
sudo firewall-cmd --state

# open ports
sudo firewall-cmd --zone=public --permanent --add-port=80/tcp 
sudo firewall-cmd --zone=public --permanent --add-port=443/tcp
sudo firewall-cmd --zone=public --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
sudo firewall-cmd --list-ports

```


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## [Integration with firewalld](https://docs.docker.com/engine/network/packet-filtering-firewalls/#integration-with-firewalld)

If you are running Docker with the `iptables` option set to `true`, and [firewalld](https://firewalld.org)

is enabled on your system, Docker automatically creates a `firewalld` zone called `docker`, with target `ACCEPT`.

All network interfaces created by Docker (for example, `docker0`) are inserted into the `docker` zone.

Docker also creates a forwarding policy called `docker-forwarding` that allows forwarding from `ANY` zone to the `docker` zone.

</div></div>


https://github.com/nextcloud/all-in-one/tree/main?tab=readme-ov-file#how-to-resolve-firewall-problems-with-fedora-linux-rhel-os-centos-suse-linux-and-others
```
sudo sed -i 's/FirewallBackend=nftables/FirewallBackend=iptables/g' /etc/firewalld/firewalld.conf
sudo systemctl restart firewalld docker
```

### reboot the system

```
sudo reboot
```

---
## install docker

```
curl -fsSL https://get.docker.com | sudo sh
```

install docker compose

https://docs.docker.com/compose/install/standalone/


WARNING: get new link from about location
```sh
curl -SL https://github.com/docker/compose/releases/download/v2.29.6/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```


```sh
sudo chmod +x /usr/local/bin/docker-compose
```

add user to docker group so we dont need to use sudo
```sh
sudo usermod -aG docker ubuntu
```

now logout and login and check group `docker` is added to current user's(ubuntu) group


## Setting up nginx proxy manager
ref: https://www.youtube.com/watch?v=RBVcnxTiIL0

create folder ~/docker/nginxproxymanager
```sh
mkdir -p docker/nginxproxymanager/
```
https://nginxproxymanager.com/setup/

copy that dockercompose file and put it in `docker-compose.yml` file
then run 
```
docker-compose up -d
```

go to *ip address*/*domain name*:81 and login with default username and password
```
Email:    admin@example.com
Password: changeme
```

then immediately change those password

## setting up next cloud

create folder docker/nextcloud
```sh
mkdir -p docker/nextcloud
```

get latest docker compose file from next  cloud  AIO

```sh
https://github.com/nextcloud/all-in-one/blob/main/compose.yaml
curl that raw text > docker-compose.yml
```

to work with reverse proxy
changes needed to be done to work with reverse proxy
https://www.youtube.com/watch?v=OCLq62KOqNU  check this for explanation and chage accounding to below

https://github.com/nextcloud/all-in-one/discussions/588

```
services:
  nextcloud-aio-mastercontainer:
    image: nextcloud/all-in-one:latest
    init: true
    restart: always
    depends_on:
      - nextcloud-aio-db
    container_name: nextcloud-aio-mastercontainer
    volumes:
      - nextcloud_aio_mastercontainer:/mnt/docker-aio-config
      - /var/run/docker.sock:/var/run/docker.sock:ro
    ports:
      - 8080:8080 # Nextcloud AIO web interface, make sure this port is not in conflict
    environment:
      - APACHE_PORT=11000 # Ensure this port doesn't conflict with existing services
      - APACHE_IP_BINDING=127.0.0.1
      - NEXTCLOUD_DATADIR=/mnt/nextclouddata
      - NEXTCLOUD_ADDITIONAL_APKS=imagemagick exiftool

volumes:
  nextcloud_aio_mastercontainer:
    name: nextcloud_aio_mastercontainer

```

 - go to https://<ipaddress>:8080/ copy the login passcode and login with it.

- now go to https://<ipaddress>:81/ and 
- create a new host mapping from cloud.<hostname> to 11000
check "block common exploits" adnd "websockets support"

go to ssl tab
- ssl certificate - Request a new SSL certificate
 - check "force SSL" and "HTTP/2 Supprot" and "I Agree" buttons 
if it goes away without any errors, everything is good (takes some time)

- then go to https://<ipaddress>:8080/ tab,
- give the domain name *cloud.linuxwith.in*








