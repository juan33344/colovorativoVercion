# Evidencias de la actividad

## Primera parte

- Se creó el proyecto de aplicación de tareas colaborativas.
- Se generó el repositorio local con los archivos:
  - `index.html`
  - `styles.css`
  - `app.js`
  - `README.md`
  - `Dockerfile`
- Se preparó README con la descripción del proyecto y las instrucciones de ejecución.

## Segunda parte

### Ramas propuestas

- `feature/compañero-1`
- `feature/compañero-2`

### Tareas por rama

- `feature/compañero-1`:
  - Mejorar el diseño de los botones.
  - Agregar más estilos y mejorar la experiencia.

- `feature/compañero-2`:
  - Añadir validación de entrada.
  - Optimizar la lista de tareas y comportamientos.

### Flujo de trabajo esperado

1. El dueño del repositorio comparte el enlace con los compañeros.
2. Cada compañero clona el repositorio y trabaja en su rama asignada.
3. Cada compañero realiza commits descriptivos y hace push de su rama.
4. El propietario descarga cambios remotos y revisa cada rama.
5. Se integran las ramas en `main` con merge o Pull Request.
6. Se resuelven conflictos si aparecen.

## Docker (opcional)

- Se agregó `Dockerfile` para desplegar el sitio estático con Nginx.
- Se incluyó `.dockerignore` para excluir archivos innecesarios.
- Comandos de prueba:
  - `docker build -t app-tareas-colaborativas .`
  - `docker run -d -p 8080:80 app-tareas-colaborativas`

## Enlace del repositorio

- [Agrega aquí el enlace de tu repositorio GitHub]
