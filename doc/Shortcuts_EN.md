# Docker Shortcuts

## Index

1. [Basic Commands](#1---basic-commands)
    - [Pull Images](#11---pull-images)
    - [Run Containers](#12---run-containers)

## 1 - Basic Commands

### 1.1 - Pull Images

Descarga la imagen correspondiente.

Comandos:
```bash
docker pull NOMBRE_IMAGEN
docker pull NOMBRE_IMAGEN:TAG
```

Ejemplo:
```bash
docker pull postgres
docker pull postgres:15.1
```

### 1.2 - Run Containers

Ejecuta el contenedor de docker

Comandos:
```bash
docker container run NOMBRE_IMAGEN
```

Ejemplo (en el puerto 80, en segundo plano con la imagen docker/getting-started):
```bash
docker container run -d -p 80:80 docker/getting-started
```

`-d`: Ejecuta la imagen en segundo plano.
`-p 80:80`: Mapea el puerto 80 al puerto 80 del contenedor de docker
`docker/getting-started`: Imagen a ejecutar