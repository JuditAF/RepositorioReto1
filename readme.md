Primer repositorio local a remoto.
# Como realizar un Proyecto en Git
<Descripción de los pasos a seguir>

***
## Pasos Previos

Previamente se decargó el programa en: [GitForWindows](https://gitforwindows.org/); y se procedió a su correcta configuración, incluyendo su inicialización a través del cmd
con de la instrucción :
                                $ git config --global user.name "Tu nombre igual al que te diste de alta en GitHub"
                                $ git config --global user.email cuentaAltaGitHub@gmail.com
                                ***
## Lista de Pasos a Seguir

1. [Crear una Carpeta de Proyecto](#Crear-una-Carpeta-de-Proyecto)
* Crea una carpeta donde quieras generar tu próximo Repositorio, en tu equipo local.

2. [Crear mi Repositorio](#Crear-mi-Repositorio)
* Asegúrate que te encuentras en el directorio correcto:  $ cd /path/to/your/existing/code
* Sobre este escribe la instrución:                       $ git init nombreRepositorio
* Posicionate en el repositorio en el que quieres trabajar, puedes acceder a través de VisualStudio con la opción de despliegue tras un click sobre la misma: <open in integarted terminal>
![Creo Carpeta RepositorioReto1.4]["C:\Users\Usuario\Desktop\BootCampCodeNotch\CapturasPantallaGitBash\reto_2\Creo Carpeta RepositorioReto1.4.png"]

3. [Vincula tu Repositorio Local en Remoto](#Vincula-tu-Repositorio-Local-en-Remoto)
* Entra en la pestaña de tus Repositorios y crea un nuevo repositorio en remoto asignándole el mismo nombre que usaste para crear tu carpeta de Repositorio Local.
<Cuidado con la configuración del Repositorio, elegid un uso de ámbito PÚBLICO>
* Sube tu Repositorio escogiendo la opción de repositorio existente, copia el code adjunto: $ git remote add origin url
                                                                                            $ git branch -M main
                                                                                            $ git push -u origin main
<Asegúrate de estar en el directorio correcto de tu carpeta>

4. [Crear un archivo Readme](#Crear-un-archico-Readme)
* Usa el icono <New file> de VisualStudio para crear tu archivo: <readme.md>
* Dentro de tu archivo realiza una primera descripción de la funcionalidad de la carpeta creada con anterioridad o nota significativa y guarda.
* Añade el archivo al Stage:                                                            $ git add .
* Confirma que estás de acuerdo con subir a tu repositorio dicho archivo y coméntalo:   $ git commit -m"Comentario"
* Sube tu archivo:                                                                      $ git push

5. [Crear un Proyecto Node](#Crear-un-Proyecto-Node)
* Crea una carpeta que contenga el proyecto a desarrollar usando VisualStudio <New File>
* Colócate dentro de tu Repositorio y crear el paquete node usando la terminal con las instrucciones:   $ npm init
                                                                                                        $ npm i
* Añade los archivos creados al Stage:          $ git add .
* Confirma los mismos:                          $ git commit -m"Comentario"
* Sube los archivos a tu repositorio:           $ git push

6. [Actualiza tu versión](#Actualiza-tu-versión)
* Usa el comando:                               $ git pull