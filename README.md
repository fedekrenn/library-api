# 📚 Library Api 

## 📝 Description

Api de librerías y libros, con la posibilidad de crear, editar, eliminar y listar librerías y libros.

## Detalles 

- Los libros pueden o no pertenecer a una librería, en el caso de que no necesiten pertenecer a una librería, el json de entrada debe contener el valor null en el campo libraryId o en su defecto puede no tenerlo. A su vez, cuenta con una validación que si al crear un libro con una librería que no existe (libraryId), el sistema no lo permite, enviando feedback al usuario.