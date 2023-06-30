# 📚 Library Api 

Api de librerías y libros, con la posibilidad de crear, editar, eliminar y listar librerías y libros. Con función de registro/logueo de users para operaciones que requieran autenticación.

## 🧩 Capas lógicas

Se da una estructura de capas lógicas, para separar las responsabilidades de cada una de ellas, y así poder tener un código más limpio y mantenible.

###  Nivel de Aplicación: 

- **Routes**: Se encarga de recibir las request http, y de llamar a los controllers correspondientes.

- **Controllers**: Se encarga de recibir los datos de las request, y de llamar a los services correspondientes.

- **Middlewares**: Se utiliza para verificar el logueo de los usuarios para las operaciones que requieran autenticación.

### - Nivel Persistencia:

- **Models**: Se encarga de definir los modelos de la base de datos.

- **Providers**: Se encarga de definir los métodos de acceso a la base de datos.

- **Services**: Define la lógica de negocio y llama a los providers para acceder a la base de datos.


## - Detalles

- Para la creación se usuarios se debe enviar a la ruta `/register` a través del método POST un objeto con name y password:

    ```
    {
      "name": "usuario",
      "password": "usuario"
    }
    ```

- Para el logueo el formato es el mismo pero el POST debe hacerse en la ruta `/login`.
<br>

- La creación de librerías se realiza a través de la ruta `/api/library` con el método POST, y se debe enviar un objeto con el siguiente formato (se le asignará un id automáticamente autoincremental):

    ```
    {
      "name": "Librería de ejemplo",
      "location": "Calle falsa 123",
      "phone": "+541100000000"
    }
    ```

- Para la creación de libros se debe enviar a la ruta `/api/book` un objeto con el siguiente formato (también se le asignará un id automáticamente autoincremental):

    ```
    {
      "isbn": 9781400034956,
      "title": "Cronica de una muerte anunciada",
      "author": "Gabriel García Márquez",
      "year": "2003",
      "libraryId": 1
    }
    ```

- Los libros pueden o no pertenecer a una librería, en el caso de ejemplo anterior se usa la key "libraryId" para apuntar a la creada anteriormente, la cual está activa. También existe la posibilidad de crear un libro sin asignarle una librería, en ese caso el campo libraryId debe omitirse. La API posee una validación por si elegimos que el libro sí pertenezca a una librería pero elegimos un ID que no existe o bien existió pero fue eliminada, en ambos casos devolverá un warning detallando la situación.

- Para el borrado, tanto de libros como de librerías, se aplica un borrado lógico, es decir que no se elimina el registro de la base de datos, sino que se le asigna un estado de "inactivo" para que no sea listado en las consultas.

- Inicialmente la DB cuenta con datos precargados, estos es 1 librería que tiene 2 libros asociados a la misma y una librería sin libros asociados. En cuanto a libros, hay 2 que pertenecen a la librería activa y 1 que no pertenece a ninguna librería. Por último, ya hay un usuario "admin" con pass "admin" precargado.
