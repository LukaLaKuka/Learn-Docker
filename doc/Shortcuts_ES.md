# Docker Shortcuts

## Índice
1. [Comandos básicos](#1---comandos-básicos)
    - [Descargar una imagen](#11---descargar-una-imagen)
    - [Ejecutar un contenedor](#12---ejecutar-un-contenedor)
2. [Comandos adicionales](#2---comandos-adicionales)
    - [Mezclar banderas](#21---mezclar-banderas)
    - [Obtener ayuda](#22---obtener-ayuda-de-comando)
    - [Asignar nombre al contenedor a ejecutar](#23---asignar-un-nombre-al-contenedor-al-ejecutar)
    - [Mostrar listado de contenedores ejecutados](#24---mostrar-listado-de-los-contenedores-corriendo-en-el-sistema)
    - [Mostrar listado de contenedores en el sistema](#25---mostrar-todos-los-contenedores-del-sistema)
    - [Detener contenedor y eliminarlo](#26---detener-contenedor-y-eliminarlo)
    - [Iniciar contenedor previamente creado](#27---iniciar-contendor-previamente-creado)
    - [Detener contenedor y eliminarlo de forma forzada](#28---detener-contenedor-y-eliminarlo-de-forma-forzada)
    - [Iniciar sesión en Docker Hub](#29---iniciar-sesión-en-dockerhub)

## 1 - Comandos básicos

### 1.1 - Descargar una imagen

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

### 1.2 - Ejecutar un contenedor

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

## 2 - Comandos adicionales

### 2.1 - Mezclar banderas

Se pueden combinar banderas en el mismo comando:

Comando sin combinar:
```bash
docker container run -d -p 80:80 docker/getting-started
```

Comando combinando:
```bash
docker container run -dp 80:80 docker/getting-started
```

`-dp`: Se combinan para no poner 2 banderas.

### 2.2 - Obtener ayuda de comando:

Obtienes ayuda sobre el comando

```bash
docker <comando> --help
```

`comando`: comando con el que hay dudas.

### 2.3 - Asignar un nombre al contenedor al ejecutar

Ejecutas un contenedor bajo un nombre personalizado

```bash
docker container run --name myName docker/getting-started
```

`--name`: asignar un nombre al contenedor
`myName`: nombre que se asigna al contenedor

### 2.4 - Mostrar listado de los contenedores corriendo en el sistema

Muestra el listado de todos los contenedores que se están ejecutando en la máquina local

```bash
docker container ls
docker ps
```

### 2.5 - Mostrar todos los contenedores del sistema

Muestra el listado de todos los contenedores que están alojados en la máquina local

```bash
docker container ls -a
docker ps -a
```

### 2.6 - Detener contenedor y eliminarlo

Detiene un contenedor que está en ejecución y lo elimina

```bash
docker container stop <container-id> # Pararlo
docker container rm <container-id> # Eliminarlo
```

`container-id`: Id del contenedor a eliminar

### 2.7 - Iniciar contendor previamente creado

Ejecuta un contenedor previamente creado

```bash
docker container start <container-id>
```

`container-id`: Id del contenedor a ejecutar

### 2.8 - Detener contenedor y eliminarlo de forma forzada

Detiene un contenedor (o varios) y los remueve de forma forzada

Uno solo:
```bash
docker container rm -f <container-id>
```

Varios:
```bash
docker container rm -f <container-id-1> <container-id-2> <container-id-3>
```

`container-id`: Id del contenedor a eliminar

### 2.9 - Iniciar sesión en DockerHub

```bash
doocker login -u <USER>
```

`<User>`: Usuario para hacer inicio de sesión