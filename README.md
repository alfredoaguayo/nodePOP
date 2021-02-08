# nodePOP

##Aplicación API para inserción y consumo de información remota por sistemas móviles.

### Ajustes.

1. La aplicación corre en modo de desarrollo con el comando $ npm run dev
2. Ocupa el puerto 3500 de localhost
3 Cuenta con una base de datos Mongo alojada en AWS
3. No requiere inicialización la base de datos
4. La respuesta del servicio es un arreglo JSON
5. Cuenta con campos como:
  * ID del documento (-id)
  * Nombre del producto (name)
  * Estatus comercial (comStatus) que puede ser Venta o Busco
  * Precio (price)
  * Se permite el uso de 1 imagen ilustrativa.
  * Se incluye un campo de *tags* para categorizar el producto
6. El filtro de precio puede realizarse por rango de precio, con las etiquetas *max* y *min*


### Consumo del servicio API.

* La URL para el consonsumo general del servicio es localhost:3500/api/products
* Se permite el filtrado por uno o varios criterios.
* Se cuenta con un límite de documentos (registros) por vista, con ayuda del filtro *limit*
* La paginación se realiza definiendo la cantidad de documentos (registros) que se desea saltar. Esto es con el filtro *skip*
* Se puede ordenar los registros por cualquiera de los campos incluidos, con ayuda del comando sort. Cuando se incluye, éste se hace por default en orden ascendente. Si se desea voltear el orden, sólo es necesario agregar un signo - previo al campo a ordenar.
* Se permite la inserción de registros por la URL localhost:3500/api/products con el verbo post.

### La base de datos.

La base de datos es accesible desde compas con la cadena:
mongodb+srv://keepcoding:Airclic100132@cluster0.5dppz.mongodb.net/cursonode?authSource=admin&replicaSet=atlas-g0bsqx-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true

