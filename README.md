# AlmundoGui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

Es recomendable instalar angular-cli, antes de intentar desplegar el proyecto en desarrollo o productivo, ejecutando:<br />
<br />
npm install -g @angular/cli@7.3.8.

## Desarrollo

Para desplegar el proyecto en desarrollo, debe estar en ejecución el api almundo el cuál se puede descargar desde: https://github.com/joseluis8906/almundo-api.git, verificar que el proyecto api almuno está escuchando en la dirección http://localhost:3000, luego seguir las siguientes instrucciones: <br />
<br />
1). cd "ruta hasta el directorio del proyecto almundo-gui" <br />
2). npm install <br />
3). npm run dev <br />
<br />
Abrir la dirección http://localhost:4200/


## Producción

En entorno productivo, no es necesario tener una instancia de la api almundo en ejecución pues se realiza la conexión automaticamente a la url https://portafolio.josecaceres.info/almundo.<br />
<br />
Para desplegar el proyecto en un entorno productivo, seguir las siguientes instrucciones:<br />
<br />
1). cd "ruta hasta el directorio del proyecto almundo-gui"<br />
2). npm install<br />
3). npm run build:ssr<br />
4). npm run serve:ssr<br />
<br />
Abrir la direccion http://localhost:4200/<br />


## Ejecución alternativa en producción

Una manera alternativa si se cuenta con docker instalado, es ejecutar la siguiente linea de comandos:<br />
<br />
docker run -it -p 4200:4200 -d joseluis8906/almundo-gui:latest<br />
<br />
Abrir la dirección http://localhost:4200


## Ejemplo de prueba online

En la dirección https://almundo-portafolio.josecaceres.info se encuentra desplegado el proyecto a modo de demostración, el cual se despliega en forma continua mediante jenkins.
