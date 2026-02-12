# Nombre_proyecto

## descripcion de la idea/app/solucion
lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.

## tecnologias utilizadas
- Express: Lo usamos para crear el servidor y las rutas
- MongoDB: Lo usamos para guardar los datos
- JWT: Lo usamos para autenticar usuarios
- CORS: Lo usamos para permitir peticiones desde otros dominios
- Nodemailer: Lo usamos para enviar correos
- Bcrypt: Lo usamos para encriptar contraseñas
- Mongoose

## Tipo de autenticación

## Que permite la API

## API REST

### Endpoints

- POST /api/auth/register: Registra un nuevo usuario
    ejemplo de body:
    {
        "username": "usuario",
        "email": "[EMAIL_ADDRESS]",
        "password": "[PASSWORD]"
    }

    ejemplo de respuesta:
    {
        "ok": true,
        "status": 201,
        "message": "Usuario registrado correctamente",
        "data": {
            "user": {
                "_id": "60d5ec49f1c2d3a4b5c6d7e8",
                "username": "usuario",
                "email": "[EMAIL_ADDRESS]",
                "createdAt": "2022-01-01T00:00:00.000Z",
                "updatedAt": "2022-01-01T00:00:00.000Z"
            }
        }
    }

- POST /api/auth/login: Inicia sesion
- GET /api/workspace: Obtiene los espacios de trabajo del usuario
- POST /api/workspace: Crea un nuevo espacio de trabajo
- DELETE /api/workspace/:id: Elimina un espacio de trabajo
- POST /api/workspace/:id/members: Agrega un miembro al espacio de trabajo
- GET /api/workspace/:id/members: Obtiene los miembros del espacio de trabajo
- GET /api/workspace/:id/members/:id: Obtiene un miembro del espacio de trabajo
- DELETE /api/workspace/:id/members/:id: Elimina un miembro del espacio de trabajo


## Instrucciones para ejecutar la API
- configurar las variables de entorno en el archivo .env
    - MONGO_DB_URI
    - MONGO_DB_NAME
    - JWT_SECRET_KEY
    - GMAIL_PASSWORD
    - GMAIL_USERNAME
    - URL_FRONTEND
    - URL_BACKEND
    - MYSQL_DB_HOST
    - MYSQL_DB_USER
    - MYSQL_DB_PASSWORD
    - MYSQL_DB_NAME
    - API_KEY

- npm install
- npm run dev 
