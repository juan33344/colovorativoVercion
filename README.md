# Aplicación de Tareas Colaborativas

## Descripción del proyecto

Aplicación web simple para gestionar una lista de tareas. Permite agregar, marcar como completadas y eliminar tareas localmente en el navegador.

Este repositorio está diseñado para apoyar la actividad de control de versiones con Git y GitHub en dos fases:

1. Primera parte: desarrollo de la aplicación y subida a GitHub.
2. Segunda parte: trabajo colaborativo con ramas y merge.

## Estructura del proyecto

- `index.html` - Interfaz principal de la aplicación.
- `styles.css` - Estilos de la aplicación.
- `app.js` - Lógica del cliente para agregar y administrar tareas.
- `Dockerfile` - Configuración para crear una imagen Docker de la aplicación.
- `.dockerignore` - Archivos excluidos de la imagen Docker.
- `evidence.md` - Registro de evidencias y pasos realizados.

## Instrucciones para ejecutar localmente

1. Abrir `index.html` en el navegador.
2. O usar un servidor local simple:
   - Python 3: `python -m http.server 8000`
   - Luego abrir `http://localhost:8000`

## Docker (opcional)

1. Construir la imagen:
   ```bash
   docker build -t app-tareas-colaborativas .
   ```
2. Ejecutar el contenedor:
   ```bash
   docker run -d -p 8080:80 app-tareas-colaborativas
   ```
3. Abrir en el navegador:
   `http://localhost:8080`

## Flujo de Git sugerido

### Primera parte

- Crear repositorio en GitHub.
- Clonar el repositorio.
- Inicializar Git si es necesario: `git init`.
- Agregar archivos: `git add .`
- Primer commit: `git commit -m "Inicializar aplicación de tareas colaborativas"`
- Subir a `main`: `git push origin main`

### Segunda parte

- Crear ramas a partir de `main`:
  - `feature/compañero-1`
  - `feature/compañero-2`
- Cada compañero trabaja solo en su rama.
- Realizar commits frecuentes con mensajes descriptivos.
- Subir cada rama al remoto: `git push origin feature/compañero-1`
  y `git push origin feature/compañero-2`
- Verificar cada rama localmente:
  - `git checkout feature/compañero-1`
  - Probar la aplicación.
- Integrar cambios en `main` mediante merge o Pull Request.
- Resolver conflictos si aparecen.

## Resultados esperados

- Aplicación funcional.
- Repositorio en GitHub con commits registrados.
- Dos ramas creadas y con cambios.
- Integración de ambas ramas en `main`.
- Opcional: configuración Docker incluida.
