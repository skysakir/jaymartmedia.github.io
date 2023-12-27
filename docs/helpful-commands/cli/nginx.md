# NGINX

NGINX is a multi-purpose web server which can serve static files, act as a reverse-proxy/load-balancer, and more.

Search for file with extension and fallback to nginx 404 when not found:
```conf
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|pdf|woff|woff2|pdf)$ {
        try_files $uri =404;
    }
```

`nginx -c $(pwd)/nginx.conf` Run nginx conf in current directory
