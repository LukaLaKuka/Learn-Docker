Maria DB Command
```bash
docker container run --name world-db -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db --network world-app --volume world-db:/var/lib/mysql -dp 3307:3306 mariadb:jammy
```

PHPMyAdmin
```bash
docker pull phpmyadmin:5.2.1-apache
```

Execute PHPMyAdmin:
```bash
docker container run --name phpmyadmin -dp 8080:80 -e PMA_ARBITRARY=1 --network world-app phpmyadmin:5.2.1-apache
```

Laboratory

Postgres Container
```bash
docker container run \
--name postgres-db \
-e POSTGRES_PASSWORD=123456 \
-v postgres-db:/var/lib/postgresql \
-d \
postgres:15.1
```

pgAdmin Container
```bash
docker container run \
--name pgAdmin \
-e PGADMIN_DEFAULT_PASSWORD=123456 \
-e PGADMIN_DEFAULT_EMAIL=superman@google.com \
-dp 8080:80 \
dpage/pgadmin4:6.17
```

How to build image:
```bash
docker build --tag ${new_image_name}:${version} ${path-to-dockerfile}

# Version can be empty empty an just use "--tag ${new_image_name}"
# but the version gonna be by default "latest"
```

Example:
```bash
ls
# app.js  Dockerfile  node_modules  package.json

docker build --tag my_new_app:0.0.1 .
```