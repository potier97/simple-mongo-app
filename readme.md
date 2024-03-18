

## Ejecución en desarrollo

Para poder conectarse a la base de datos, se debe crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```bash
MONGODB_URI="mongodb://root:example@localhost:27017/dn-name"
MONGO_INITDB_ROOT_USERNAME="root"
MONGO_INITDB_ROOT_PASSWORD="example"
MONGO_DATABASE="dn-name"
MONGO_DATABASE_HOST="localhost"
MONGO_DATABASE_PORT="27017"
```

Se debe crear la carpeta `mongo` para que la base de datos pueda persistir los datos si el volumne de docker se elimna.


Para correr la base de datos con docker-compose y que corra en segundo plano:

```bash
docler-compose up -d
```

Importante definir el nombre de la base de datos en el archivo docker-compose.yml para saber a cual conectarse.

