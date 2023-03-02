# BCG Take Home assignment.

El proyecto es una aplicación web dividida en dos partes: un frontend y un backend sencillos. El frontend está desarrollado con React. El backend está desarrollado con FastAPI, un framework con el que no tenía experiencia previa.

La aplicación web permite mostrar y editar una lista de objetos en la página, utilizando el método GET y un hook useEffect para renderizarlo directamente. Se pueden actualizar los objetos con un PUT. La comunicación entre el frontend y el backend se realiza a través de HTTP Requests..

 Además, el proyecto utiliza CORS Middleware para permitir solicitudes de origen cruzado desde el puerto localhost 3000 (donde se ejecuta el frontend con React) y el puerto localhost 8000 (donde se ejecuta el servidor backend con FastAPI).

## Table of contents
* [Tecnologías usadas](#tecnologías-usadas)
* [Instalación](#instalación)
* [Uso](#uso)
* [Ejemplos](#ejemplos)
* [Contribución](#contribución)
* [Licencia](#licencia)
* [Contacto](#contacto)

## Tecnologías usadas

### Frontend

* ReactJS
* HTML
* CSS
* JavaScript
* Axios (para manejo de peticiones HTTP)
### Backend

* FastAPI (framework de Python)
* Python
* Uvicorn (servidor web compatible con ASGI para Python)
* Logging (para la configuración de registro)
* CORS Middleware (para la configuración de Cross-Origin Resource Sharing)

## Instalación
Es necesario clonar el repositorio. Habrá que tener instaladas las dependencias necesarias:
* Frontend: react, react-dom, react-scripts, axios, react-router-dom, JavaScript, axios
* Backend: fastapi, python, uvicorn


## Uso

En primer lugar, hay que arrancar los servidores:

1. Backend: en la carpeta del backend, ejecutar el comando:
~~~
python3 -m uvicorn main:app --reload
~~~

2. Frontend: en la carpeta del frontend, ejecutar el comando:
~~~
npm start
~~~

## Ejemplo de uso

https://www.youtube.com/watch?v=qzZRRTHCbW4

## Pasos futuros: Docker y Kubernetes

1. Dockerizar la aplicación: Crearemos un archivo Dockerfile que describa cómo construir la imagen de contenedor para la aplicación. Habrá que crear diferentes Dockerfiles para el servicio del frontend y backend.

2. Subir las imágenes a un registro de contenedores, como Docker Hub, para que Kubernetes pueda acceder a las imágenes.

3. Crear los archivos YAML para los objetos de Kubernetes, como Deployment, Service y ConfigMap. Estos archivos deben definir cómo se implementará la aplicación y cómo se accederá a ella.

4. Desplegar la aplicación en Kubernetes: Utilizaremos kubectl para desplegar la aplicación en un clúster de Kubernetes. Una vez que se haya implementado la aplicación, podremos escalarla horizontalmente ajustando el número de réplicas del Deployment.


## Contacto

fparejamayo@gmail.com


