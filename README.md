![image](https://user-images.githubusercontent.com/44384347/116373914-718df980-a7d3-11eb-9938-ff305f34b65b.png)


# Prueba Tecnica Teleperfomance

Resumen de la prueba:

- Debes crear un proyecto en NodeJs desde 0.
- Integra expressJS al proyecto.
- Creen 1 API que debe consumir algún recurso JSON o apiRest gratuita y devolver la info.
- Cree/implemente/Integre un sistema de autorización/seguridad para proteger las API. (Esto implica un sistema de generación de “llaves únicas” con expiración y el método que es capaz de autenticar esa llave).
- Cree otra API que genere y retorne una llave de autorización con el método anterior.
- Cree otra API que esté protegida con el sistema creado y que permita su consumo con la llave de autorización.
- Cree una base en Mongo, con datos random.
- Una nueva API que retorne la info de esa base (Esta API debe estar protegida)
- Cree un proyecto en angular y consuma las API creadas.

## Tecnologias utilizadas

- Nodejs
- Angular
- ExpressJs
- Auth0
- Cloud.mongodb for database

## Abordamiento del problema

Para la realizacion de cada una de las API's se realizo un vesionamiento entre ellas, es decir, por ejemplo para la primera la cual se tomo como la ApiV1 con sus rutas especificas y para la siguiente seria ApiV2, etc. Para asi tener cada API separada y con sus diferentes rutas.

Para el tema de la autenticacion se utilizo Auth0 que nos ayuda a facilitar este proceso por medio de su API. Para el manejo de las base de datos se utilizo un cluster gratuito de MongoDb para cubrir este tema.

La estructura del proyecto esta pensada de una forma que sea escalable y que sea facil agregar nuevas funcionalidades que se requieran.

## Variables de entorno

Variables configuradas en el archivo  `.env` en la carpeta root del proyecto

- API_IDENTIFIER_AUTHO -> Identificador de Auth0
- DOMAIN_AUTHO -> Dominio de la API Auth0
- CLIENT_ID_AUTHO -> Identificacion del cliente Auth0
- CLIENT_SECRET_AUTHO -> Clave secreta del cliente
- DB_NAME -> Nombre de la base de datos de Mongo
- PORT -> Puerto en que corre el servidor
- URL_MONGO -> Host mongo
- MONGO_USER -> Usuario MongoDb
- MONGO_PASSWORD -> Contraseña MongoDb

## Peticiones

### v1
- /api/v1 -> Retorna informacion de usuarios de una API gratiuta

### v2
- /api/v2/generate-token -> Retorna el token Auth0

### v3
- /api/v3 -> Retorna informacion de usuarios de una API gratiuta pero con la diferencia de que necesita autenticacion

### v4
- /api/v4 -> Retorna nombre de una coleccion en la base de datos en Mongo, tambien necesita autenticacion
