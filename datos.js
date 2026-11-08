const libros = [
  {
    "id": 1,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 42000,
    "sinopsis": "La familia Buendía funda Macondo y atraviesa generaciones de amores, guerras y secretos. Una historia donde lo extraordinario se vuelve cotidiano.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9788439732471-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 2,
    "titulo": "El amor en los tiempos del cólera",
    "autor": "Gabriel García Márquez",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 56000,
    "sinopsis": "Florentino Ariza espera durante décadas el amor de Fermina Daza. El paso del tiempo pone a prueba la memoria, el deseo y la esperanza.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9788497592451-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Jhoan Manrique",
        "comentario": "¡Una maravilla! La forma en que García Márquez cuenta este amor me emocionó de principio a fin. Es de esos libros que quiero volver a leer y recomendar a todo el mundo.",
        "calificacion": 5
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 3,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 70000,
    "sinopsis": "Un hidalgo se convierte en caballero andante y sale con Sancho Panza a transformar el mundo. La imaginación se enfrenta a la realidad en cada camino.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9789707700611-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 4,
    "titulo": "1984",
    "autor": "George Orwell",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 84000,
    "sinopsis": "Winston Smith vive bajo la vigilancia del Gran Hermano. Cuando empieza a cuestionar el sistema, descubre el precio de conservar su libertad.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9786073844321-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 5,
    "titulo": "El principito",
    "autor": "Antoine de Saint-Exupéry",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 32000,
    "sinopsis": "Un pequeño viajero llega del espacio para conversar con un aviador. Sus encuentros revelan lo que los adultos han olvidado sobre el amor y la amistad.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9788498381498-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 6,
    "titulo": "La metamorfosis",
    "autor": "Franz Kafka",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 46000,
    "sinopsis": "Gregor Samsa despierta transformado en un insecto. Su familia debe enfrentarse a una nueva realidad que expone la fragilidad del afecto.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 7,
    "titulo": "Crimen y castigo",
    "autor": "Fiódor Dostoyevski",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 60000,
    "sinopsis": "Un estudiante comete un crimen para probar una teoría moral. La culpa y la búsqueda de redención desmantelan sus certezas.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/12328823-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 8,
    "titulo": "El extranjero",
    "autor": "Albert Camus",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 74000,
    "sinopsis": "Meursault observa la vida con una indiferencia que desconcierta a quienes lo rodean. Un crimen lo coloca frente al juicio de la sociedad.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 9,
    "titulo": "Rayuela",
    "autor": "Julio Cortázar",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 88000,
    "sinopsis": "Horacio Oliveira busca sentido entre París y Buenos Aires. Amistad, jazz y amor componen una novela que invita a elegir caminos de lectura.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/1047466-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 10,
    "titulo": "Pedro Páramo",
    "autor": "Juan Rulfo",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 36000,
    "sinopsis": "Juan Preciado llega a Comala buscando a su padre. Las voces de sus habitantes reconstruyen un pueblo lleno de recuerdos y ausencias.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/5419076-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 11,
    "titulo": "La casa de los espíritus",
    "autor": "Isabel Allende",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 50000,
    "sinopsis": "Cuatro generaciones de una familia atraviesan amores y conflictos políticos. La memoria femenina enlaza los secretos de la casa.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/3205226-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 12,
    "titulo": "Rebelión en la granja",
    "autor": "George Orwell",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 64000,
    "sinopsis": "Los animales derrocan al granjero para construir una sociedad justa. Sus nuevos dirigentes convierten la promesa de igualdad en otra forma de opresión.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 13,
    "titulo": "El retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 78000,
    "sinopsis": "Un joven desea conservar su belleza mientras su retrato envejece por él. Cada decisión deja una huella que solo el cuadro revela.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 14,
    "titulo": "Los miserables",
    "autor": "Victor Hugo",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 92000,
    "sinopsis": "Jean Valjean intenta comenzar de nuevo tras años de prisión. La persecución de un inspector se cruza con historias de amor, pobreza y justicia.",
    "calificacion": 4.0,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 15,
    "titulo": "Ana Karenina",
    "autor": "León Tolstói",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 40000,
    "sinopsis": "Una mujer desafía las convenciones de su sociedad por amor. Su historia dialoga con la búsqueda de una vida honesta en el campo.",
    "calificacion": 4.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 16,
    "titulo": "Madame Bovary",
    "autor": "Gustave Flaubert",
    "categoria": "Ficción",
    "catalogo": "clasicos",
    "precio": 54000,
    "sinopsis": "Emma busca en el amor y el lujo una salida a su vida provinciana. Sus sueños chocan con una realidad que no puede sostenerlos.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/id/12993424-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 17,
    "titulo": "La biblioteca de la medianoche",
    "autor": "Matt Haig",
    "categoria": "Ficción",
    "catalogo": "populares",
    "precio": 68000,
    "sinopsis": "Nora descubre una biblioteca entre la vida y la muerte. Cada libro le permite explorar una existencia que pudo haber vivido.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9788413621654-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 18,
    "titulo": "La sombra del viento",
    "autor": "Carlos Ruiz Zafón",
    "categoria": "Ficción",
    "catalogo": "populares",
    "precio": 82000,
    "sinopsis": "Daniel encuentra un libro olvidado en la Barcelona de posguerra. La búsqueda de su autor lo lleva a un laberinto de secretos.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9780143034902-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 19,
    "titulo": "Los siete maridos de Evelyn Hugo",
    "autor": "Taylor Jenkins Reid",
    "categoria": "Ficción",
    "catalogo": "populares",
    "precio": 30000,
    "sinopsis": "Una estrella de cine decide contar la verdad sobre su vida. Una periodista descubre que detrás del glamour existe una historia inesperada.",
    "calificacion": 3.9,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 20,
    "titulo": "El olvido que seremos",
    "autor": "Héctor Abad Faciolince",
    "categoria": "Ficción",
    "catalogo": "populares",
    "precio": 44000,
    "sinopsis": "Un hijo reconstruye la vida de su padre y el amor que compartieron. El retrato familiar también recuerda la violencia que marcó a Colombia.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/2293071-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 21,
    "titulo": "Harry Potter y la piedra filosofal",
    "autor": "J. K. Rowling",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 58000,
    "sinopsis": "Harry descubre que es mago y llega a Hogwarts. Entre nuevas amistades y lecciones, encuentra un misterio ligado a su pasado.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9781644732076-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 22,
    "titulo": "El hobbit",
    "autor": "J. R. R. Tolkien",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 72000,
    "sinopsis": "Bilbo Bolsón abandona su casa para acompañar a un grupo de enanos. Un dragón y un anillo misterioso cambian el rumbo de su aventura.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 23,
    "titulo": "La comunidad del anillo",
    "autor": "J. R. R. Tolkien",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 86000,
    "sinopsis": "Frodo recibe un anillo que amenaza toda la Tierra Media. Una comunidad de viajeros lo acompaña en una misión casi imposible.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 24,
    "titulo": "Las dos torres",
    "autor": "J. R. R. Tolkien",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 34000,
    "sinopsis": "La comunidad se dispersa mientras la guerra se acerca. Frodo y Sam continúan su camino hacia Mordor entre peligros y alianzas inciertas.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 25,
    "titulo": "El retorno del rey",
    "autor": "J. R. R. Tolkien",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 48000,
    "sinopsis": "La batalla por la Tierra Media llega a su desenlace. Mientras los ejércitos resisten, dos hobbits afrontan la última etapa de su misión.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 26,
    "titulo": "El león, la bruja y el armario",
    "autor": "C. S. Lewis",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 62000,
    "sinopsis": "Cuatro hermanos atraviesan un armario hacia Narnia. Allí encuentran un invierno interminable y la esperanza del regreso de Aslan.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780064471046-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 27,
    "titulo": "El sobrino del mago",
    "autor": "C. S. Lewis",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 76000,
    "sinopsis": "Dos niños descubren anillos capaces de llevarlos a otros mundos. Su viaje los convierte en testigos del nacimiento de Narnia.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/13165702-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 28,
    "titulo": "Alicia en el país de las maravillas",
    "autor": "Lewis Carroll",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 90000,
    "sinopsis": "Alicia sigue a un conejo y cae en un mundo de reglas imposibles. Sus encuentros juegan con el lenguaje, el tamaño y la lógica.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141321073-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 29,
    "titulo": "Peter Pan",
    "autor": "J. M. Barrie",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 38000,
    "sinopsis": "Wendy y sus hermanos viajan a Nunca Jamás. Junto a Peter viven aventuras que exploran la infancia y el deseo de no crecer.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/8237052-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 30,
    "titulo": "El maravilloso mago de Oz",
    "autor": "L. Frank Baum",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 52000,
    "sinopsis": "Dorothy llega a Oz arrastrada por un tornado. Con tres compañeros busca al mago que podría ayudarla a regresar a casa.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141321028-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 31,
    "titulo": "La historia interminable",
    "autor": "Michael Ende",
    "categoria": "Fantasía",
    "catalogo": "clasicos",
    "precio": 66000,
    "sinopsis": "Bastián abre un libro que lo conecta con Fantasía. La imaginación puede salvar ese mundo, pero también ponerlo en peligro.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/id/10448326-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 32,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 80000,
    "sinopsis": "Kvothe narra cómo llegó a convertirse en leyenda. Música, magia y pérdidas acompañan su aprendizaje en la Universidad.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 33,
    "titulo": "El temor de un hombre sabio",
    "autor": "Patrick Rothfuss",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 28000,
    "sinopsis": "Kvothe continúa su formación lejos de la Universidad. Nuevos maestros y tierras desconocidas amplían su poder y sus dudas.",
    "calificacion": 4.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 34,
    "titulo": "El imperio final",
    "autor": "Brandon Sanderson",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 42000,
    "sinopsis": "Una joven descubre su capacidad para usar metales como fuente de poder. Un grupo de rebeldes planea derrocar a un gobernante inmortal.",
    "calificacion": 3.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 35,
    "titulo": "El pozo de la ascensión",
    "autor": "Brandon Sanderson",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 56000,
    "sinopsis": "Tras la caída del imperio, Vin y Elend intentan construir un nuevo orden. Los ejércitos y una fuerza antigua amenazan su ciudad.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/id/13540548-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 36,
    "titulo": "El héroe de las eras",
    "autor": "Brandon Sanderson",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 70000,
    "sinopsis": "Las cenizas y la niebla cubren un mundo al borde de desaparecer. Vin busca respuestas en una profecía que podría haber sido manipulada.",
    "calificacion": 3.2,
    "portada": "",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 37,
    "titulo": "El camino de los reyes",
    "autor": "Brandon Sanderson",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 84000,
    "sinopsis": "En un mundo azotado por tormentas, varias vidas se cruzan en una guerra interminable. El honor y poderes olvidados empiezan a despertar.",
    "calificacion": 3.9,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 38,
    "titulo": "Una corte de rosas y espinas",
    "autor": "Sarah J. Maas",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 32000,
    "sinopsis": "Feyre mata a un lobo y debe abandonar su hogar. En el territorio de los fae descubre una amenaza escondida tras la belleza.",
    "calificacion": 4.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 39,
    "titulo": "Alas de sangre",
    "autor": "Rebecca Yarros",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 46000,
    "sinopsis": "Violet entra en una escuela militar donde los dragones eligen a sus jinetes. Sobrevivir exige inteligencia, coraje y alianzas arriesgadas.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/id/15227502-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 40,
    "titulo": "La vida invisible de Addie LaRue",
    "autor": "V. E. Schwab",
    "categoria": "Fantasía",
    "catalogo": "populares",
    "precio": 60000,
    "sinopsis": "Addie obtiene la libertad de vivir para siempre a cambio de ser olvidada. Siglos después, alguien consigue recordar su nombre.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9780765387561-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 41,
    "titulo": "Orgullo y prejuicio",
    "autor": "Jane Austen",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 74000,
    "sinopsis": "Elizabeth Bennet y el señor Darcy se juzgan antes de conocerse. Sus encuentros cuestionan las diferencias sociales y las primeras impresiones.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9788497648813-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 42,
    "titulo": "Sentido y sensibilidad",
    "autor": "Jane Austen",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 88000,
    "sinopsis": "Dos hermanas afrontan el amor de formas distintas. La prudencia y la pasión se ponen a prueba tras un cambio en su fortuna.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439662-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 43,
    "titulo": "Emma",
    "autor": "Jane Austen",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 36000,
    "sinopsis": "Emma cree conocer los sentimientos de todos y organiza parejas. Sus buenas intenciones desencadenan equívocos que la obligan a mirarse a sí misma.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439587-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 44,
    "titulo": "Persuasión",
    "autor": "Jane Austen",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 50000,
    "sinopsis": "Anne Elliot vuelve a encontrarse con el hombre al que renunció años atrás. El tiempo ofrece una nueva oportunidad para escuchar su corazón.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439686-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 45,
    "titulo": "Jane Eyre",
    "autor": "Charlotte Brontë",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 64000,
    "sinopsis": "Una joven institutriz llega a una casa marcada por secretos. Su amor por Rochester entra en conflicto con su independencia y sus principios.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 46,
    "titulo": "Cumbres borrascosas",
    "autor": "Emily Brontë",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 78000,
    "sinopsis": "El vínculo entre Catherine y Heathcliff se vuelve una fuerza destructiva. En los páramos, dos familias heredan sus pasiones y heridas.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 47,
    "titulo": "La dama de las camelias",
    "autor": "Alexandre Dumas hijo",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 92000,
    "sinopsis": "Marguerite y Armand intentan vivir un amor que la sociedad rechaza. El sacrificio y los prejuicios determinan sus decisiones.",
    "calificacion": 3.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 48,
    "titulo": "Romeo y Julieta",
    "autor": "William Shakespeare",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 40000,
    "sinopsis": "Dos jóvenes se enamoran pese a la enemistad entre sus familias. Sus decisiones precipitadas convierten el amor en una tragedia.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/id/13818614-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 49,
    "titulo": "La edad de la inocencia",
    "autor": "Edith Wharton",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 54000,
    "sinopsis": "Newland Archer se debate entre el deber y un amor inesperado. La alta sociedad neoyorquina vigila cada gesto de su elección.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9780140189704-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 50,
    "titulo": "Una habitación con vistas",
    "autor": "E. M. Forster",
    "categoria": "Romance",
    "catalogo": "clasicos",
    "precio": 68000,
    "sinopsis": "Lucy viaja a Florencia y descubre emociones que no esperaba. Al volver a Inglaterra debe elegir entre la convención y la autenticidad.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/id/3324629-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 51,
    "titulo": "La canción de Aquiles",
    "autor": "Madeline Miller",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 82000,
    "sinopsis": "Patroclo recuerda su vínculo con Aquiles desde la juventud hasta Troya. El amor se enfrenta al destino de un héroe.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/isbn/9788413622132-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 52,
    "titulo": "Antes de ti",
    "autor": "Jojo Moyes",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 30000,
    "sinopsis": "Louisa acepta cuidar a Will, cuya vida cambió tras un accidente. Su relación los obliga a replantear el futuro y sus propias decisiones.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9780143124542-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 53,
    "titulo": "Yo después de ti",
    "autor": "Jojo Moyes",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 44000,
    "sinopsis": "Louisa intenta reconstruir su vida después de una pérdida. Personas inesperadas le muestran que comenzar de nuevo también requiere valentía.",
    "calificacion": 4.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 54,
    "titulo": "Bajo la misma estrella",
    "autor": "John Green",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 58000,
    "sinopsis": "Hazel y Augustus se conocen en un grupo de apoyo. Entre libros y conversaciones construyen un amor marcado por la incertidumbre.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 55,
    "titulo": "Rojo, blanco y sangre azul",
    "autor": "Casey McQuiston",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 72000,
    "sinopsis": "El hijo de la presidenta de Estados Unidos y un príncipe británico deben fingir amistad. La cercanía transforma su rivalidad en algo más.",
    "calificacion": 3.9,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 56,
    "titulo": "La hipótesis del amor",
    "autor": "Ali Hazelwood",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 86000,
    "sinopsis": "Una investigadora finge una relación con un profesor para ayudar a una amiga. El experimento sentimental comienza a escapar de su control.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9780593336823-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 57,
    "titulo": "Gente normal",
    "autor": "Sally Rooney",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 34000,
    "sinopsis": "Marianne y Connell se encuentran y se alejan durante años. La intimidad y las diferencias de clase complican una conexión profunda.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9781984822178-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 58,
    "titulo": "Romper el círculo",
    "autor": "Colleen Hoover",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 48000,
    "sinopsis": "Lily inicia una relación que la enfrenta a heridas de su infancia. Tomar una decisión implica cuestionar lo que entiende por amor.",
    "calificacion": 4.2,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 59,
    "titulo": "Un cuento perfecto",
    "autor": "Elísabet Benavent",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 62000,
    "sinopsis": "Margot y David llevan vidas muy diferentes y comparten una crisis. Un acuerdo para recuperar a sus parejas cambia sus expectativas.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/10095339-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 60,
    "titulo": "El duque y yo",
    "autor": "Julia Quinn",
    "categoria": "Romance",
    "catalogo": "populares",
    "precio": 76000,
    "sinopsis": "Daphne y Simon fingen un cortejo para sortear presiones sociales. El acuerdo se complica cuando aparecen sentimientos reales.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/id/10582148-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 61,
    "titulo": "El sabueso de los Baskerville",
    "autor": "Arthur Conan Doyle",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 90000,
    "sinopsis": "Una antigua maldición amenaza a una familia inglesa. Holmes y Watson investigan las huellas de un perro que parece imposible.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/14279159-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 62,
    "titulo": "Estudio en escarlata",
    "autor": "Arthur Conan Doyle",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 38000,
    "sinopsis": "Holmes y Watson se conocen mientras investigan un asesinato extraño. Las pistas conducen a una historia de venganza que comenzó lejos de Londres.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/id/13574672-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 63,
    "titulo": "El signo de los cuatro",
    "autor": "Arthur Conan Doyle",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 52000,
    "sinopsis": "Una joven recibe perlas y una invitación anónima. Holmes sigue el rastro de un tesoro y de un secreto familiar.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/14083533-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 64,
    "titulo": "Las aventuras de Sherlock Holmes",
    "autor": "Arthur Conan Doyle",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 66000,
    "sinopsis": "Holmes resuelve casos que desconciertan a sus clientes. La observación convierte detalles cotidianos en claves decisivas.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/10547050-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 65,
    "titulo": "El asesinato de Roger Ackroyd",
    "autor": "Agatha Christie",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 80000,
    "sinopsis": "Poirot investiga la muerte de un hombre en una tranquila localidad. Cada vecino guarda información que altera la lectura del caso.",
    "calificacion": 3.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 66,
    "titulo": "Asesinato en el Orient Express",
    "autor": "Agatha Christie",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 28000,
    "sinopsis": "Un pasajero aparece muerto en un tren detenido por la nieve. Poirot interroga a viajeros cuyas historias no encajan.",
    "calificacion": 4.4,
    "portada": "",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 67,
    "titulo": "Diez negritos",
    "autor": "Agatha Christie",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 42000,
    "sinopsis": "Diez desconocidos llegan a una isla bajo distintas invitaciones. Una acusación común precede a una serie de muertes inquietantes.",
    "calificacion": 3.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 68,
    "titulo": "Muerte en el Nilo",
    "autor": "Agatha Christie",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 56000,
    "sinopsis": "Un viaje por Egipto termina con el asesinato de una heredera. Poirot debe distinguir los celos y las coartadas de los pasajeros.",
    "calificacion": 4.0,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 69,
    "titulo": "El misterio del cuarto amarillo",
    "autor": "Gaston Leroux",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 70000,
    "sinopsis": "Una mujer es atacada en una habitación aparentemente cerrada. Un joven periodista cuestiona las explicaciones de la policía.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/id/13574882-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 70,
    "titulo": "La piedra lunar",
    "autor": "Wilkie Collins",
    "categoria": "Misterio",
    "catalogo": "clasicos",
    "precio": 84000,
    "sinopsis": "Un valioso diamante desaparece tras una celebración familiar. Diferentes testimonios reconstruyen un misterio atravesado por prejuicios y secretos.",
    "calificacion": 3.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 71,
    "titulo": "El nombre de la rosa",
    "autor": "Umberto Eco",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 32000,
    "sinopsis": "Un fraile investiga muertes en una abadía medieval. La biblioteca guarda respuestas entre debates sobre fe y conocimiento.",
    "calificacion": 4.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 72,
    "titulo": "La verdad sobre el caso Harry Quebert",
    "autor": "Joël Dicker",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 46000,
    "sinopsis": "Un escritor investiga a su mentor, acusado de un crimen antiguo. La historia de una joven desaparecida cambia con cada revelación.",
    "calificacion": 3.2,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 73,
    "titulo": "La chica del tren",
    "autor": "Paula Hawkins",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 60000,
    "sinopsis": "Rachel observa una pareja desde su viaje diario. Una desaparición la lleva a desconfiar de sus recuerdos y de los demás.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9781594634024-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 74,
    "titulo": "Perdida",
    "autor": "Gillian Flynn",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 74000,
    "sinopsis": "Amy desaparece y las sospechas recaen sobre su esposo. Sus versiones muestran un matrimonio mucho menos sencillo de lo que parece.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 75,
    "titulo": "La paciente silenciosa",
    "autor": "Alex Michaelides",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 88000,
    "sinopsis": "Una pintora deja de hablar después de matar a su marido. Un terapeuta intenta comprender el silencio que rodea el crimen.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 76,
    "titulo": "La asistenta",
    "autor": "Freida McFadden",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 36000,
    "sinopsis": "Millie comienza a trabajar en una casa que promete una nueva vida. Pronto descubre que su habitación y sus empleadores esconden peligros.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9781538742570-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 77,
    "titulo": "La pareja de al lado",
    "autor": "Shari Lapena",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 50000,
    "sinopsis": "Un bebé desaparece mientras sus padres cenan en la casa vecina. La investigación expone secretos que amenazan a toda la familia.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/14487284-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 78,
    "titulo": "Los hombres que no amaban a las mujeres",
    "autor": "Stieg Larsson",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 64000,
    "sinopsis": "Un periodista y una hacker investigan una desaparición de décadas atrás. La historia de una familia revela una red de violencia.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/id/12150438-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 79,
    "titulo": "El código Da Vinci",
    "autor": "Dan Brown",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 78000,
    "sinopsis": "Un asesinato en el Louvre inicia una búsqueda entre obras de arte. Símbolos y sociedades secretas guían a Langdon por Europa.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 80,
    "titulo": "La novia gitana",
    "autor": "Carmen Mola",
    "categoria": "Misterio",
    "catalogo": "populares",
    "precio": 92000,
    "sinopsis": "Una inspectora investiga un asesinato que reproduce un caso anterior. La violencia contra dos hermanas obliga a revisar el pasado.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/id/8179815-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 81,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 40000,
    "sinopsis": "Paul Atreides llega a un planeta donde la especia determina el poder. La política, el desierto y una profecía transforman su destino.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 82,
    "titulo": "Fundación",
    "autor": "Isaac Asimov",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 54000,
    "sinopsis": "Un científico predice la caída de un imperio galáctico. Una comunidad debe preservar el conocimiento para acortar la era de oscuridad.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 83,
    "titulo": "Yo, robot",
    "autor": "Isaac Asimov",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 68000,
    "sinopsis": "Diversos relatos exploran la convivencia entre humanos y robots. Las leyes diseñadas para protegerlos generan dilemas inesperados.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/isbn/9780553294385-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 84,
    "titulo": "Fahrenheit 451",
    "autor": "Ray Bradbury",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 82000,
    "sinopsis": "Un bombero quema libros en una sociedad que rechaza el pensamiento crítico. Un encuentro lo lleva a cuestionar su trabajo y su mundo.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 85,
    "titulo": "Un mundo feliz",
    "autor": "Aldous Huxley",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 30000,
    "sinopsis": "Una sociedad fabrica ciudadanos destinados a funciones precisas. La llegada de alguien ajeno al sistema expone el costo de la estabilidad.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 86,
    "titulo": "La máquina del tiempo",
    "autor": "H. G. Wells",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 44000,
    "sinopsis": "Un inventor viaja al futuro y descubre una humanidad dividida. Su exploración cuestiona la idea de progreso inevitable.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439976-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 87,
    "titulo": "La guerra de los mundos",
    "autor": "H. G. Wells",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 58000,
    "sinopsis": "Naves marcianas llegan a Inglaterra y arrasan las ciudades. Un narrador intenta sobrevivir a una invasión que supera toda defensa.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/id/13499665-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 88,
    "titulo": "Veinte mil leguas de viaje submarino",
    "autor": "Julio Verne",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 72000,
    "sinopsis": "Tres hombres quedan a bordo del Nautilus del capitán Nemo. Un viaje por los océanos revela maravillas y una historia de aislamiento.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/id/13527935-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 89,
    "titulo": "Viaje al centro de la Tierra",
    "autor": "Julio Verne",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 86000,
    "sinopsis": "Un profesor encuentra un mensaje que indica una entrada al interior del planeta. La expedición descubre paisajes desconocidos bajo la superficie.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/id/2129972-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 90,
    "titulo": "Solaris",
    "autor": "Stanisław Lem",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 34000,
    "sinopsis": "Un psicólogo llega a una estación sobre un océano vivo. Sus recuerdos toman forma y desafían su comprensión de lo humano.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/id/12313764-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 91,
    "titulo": "¿Sueñan los androides con ovejas eléctricas?",
    "autor": "Philip K. Dick",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 48000,
    "sinopsis": "Un cazador de androides trabaja en una Tierra devastada. Cada encuentro vuelve menos clara la frontera entre máquina y persona.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/id/14120064-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 92,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 62000,
    "sinopsis": "Las potencias del Eje han ganado la guerra y dividido Estados Unidos. Un libro prohibido imagina una historia radicalmente diferente.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/13661291-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 93,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "categoria": "Ciencia ficción",
    "catalogo": "clasicos",
    "precio": 76000,
    "sinopsis": "Un hacker recibe una oferta para recuperar su acceso al ciberespacio. La misión lo enfrenta a corporaciones y a una inteligencia artificial.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 94,
    "titulo": "El juego de Ender",
    "autor": "Orson Scott Card",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 90000,
    "sinopsis": "Un niño es entrenado para dirigir una guerra contra una especie alienígena. Las pruebas ocultan decisiones éticas que aún no comprende.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/id/13704315-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 95,
    "titulo": "Guía del autoestopista galáctico",
    "autor": "Douglas Adams",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 38000,
    "sinopsis": "Arthur escapa de la destrucción de la Tierra con un amigo extraterrestre. Su viaje por el universo convierte el absurdo en compañía.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/15114331-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 96,
    "titulo": "El problema de los tres cuerpos",
    "autor": "Liu Cixin",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 52000,
    "sinopsis": "Una señal enviada al espacio conecta a la humanidad con otra civilización. Científicos y jugadores descubren una amenaza de escala cósmica.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780765382030-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 97,
    "titulo": "El bosque oscuro",
    "autor": "Liu Cixin",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 66000,
    "sinopsis": "La Tierra conoce la llegada de una flota enemiga. Cuatro personas reciben la misión de elaborar estrategias que nadie pueda anticipar.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/12606697-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 98,
    "titulo": "El fin de la muerte",
    "autor": "Liu Cixin",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 80000,
    "sinopsis": "La convivencia entre civilizaciones entra en una etapa frágil. Nuevas tecnologías y decisiones humanas cambian el futuro del universo.",
    "calificacion": 3.4,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 99,
    "titulo": "Proyecto Hail Mary",
    "autor": "Andy Weir",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 28000,
    "sinopsis": "Un hombre despierta solo en una nave sin recordar su misión. Reconstruir su pasado es la primera tarea para salvar a la Tierra.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 100,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "categoria": "Ciencia ficción",
    "catalogo": "populares",
    "precio": 42000,
    "sinopsis": "Un astronauta queda abandonado en Marte tras una tormenta. Su ingenio y conocimientos científicos son su principal herramienta para regresar.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 101,
    "titulo": "La Ilíada",
    "autor": "Homero",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 56000,
    "sinopsis": "La cólera de Aquiles altera el curso de la guerra de Troya. Héroes y dioses se enfrentan entre el honor, la pérdida y la muerte.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/643208-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 102,
    "titulo": "La Odisea",
    "autor": "Homero",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 70000,
    "sinopsis": "Ulises intenta regresar a Ítaca después de la guerra. Su viaje atraviesa monstruos, tentaciones y pruebas mientras su familia lo espera.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/id/13180792-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 103,
    "titulo": "Historia de dos ciudades",
    "autor": "Charles Dickens",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 84000,
    "sinopsis": "Dos familias quedan unidas durante la Revolución francesa. Londres y París enmarcan una historia de injusticia y sacrificio.",
    "calificacion": 3.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 104,
    "titulo": "Guerra y paz",
    "autor": "León Tolstói",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 32000,
    "sinopsis": "Varias familias rusas viven las guerras napoleónicas. Sus decisiones personales se entrelazan con acontecimientos que transforman el país.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/id/13859412-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 105,
    "titulo": "Los tres mosqueteros",
    "autor": "Alexandre Dumas",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 46000,
    "sinopsis": "D’Artagnan llega a París y se une a tres mosqueteros. Intrigas políticas y lealtades ponen a prueba su amistad.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/id/13713831-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 106,
    "titulo": "Ivanhoe",
    "autor": "Walter Scott",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 60000,
    "sinopsis": "Un caballero regresa a Inglaterra en tiempos de conflictos entre sajones y normandos. Torneos y disputas revelan tensiones de poder y fe.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/id/314235-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 107,
    "titulo": "Ben-Hur",
    "autor": "Lew Wallace",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 74000,
    "sinopsis": "Un joven noble pierde su libertad por una acusación injusta. Su búsqueda de venganza se cruza con el nacimiento del cristianismo.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/id/6456470-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 108,
    "titulo": "Sinuhé, el egipcio",
    "autor": "Mika Waltari",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 88000,
    "sinopsis": "Un médico recuerda su vida en el antiguo Egipto. Viajes, intrigas y cambios religiosos transforman su visión del mundo.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/id/1048737-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 109,
    "titulo": "Memorias de Adriano",
    "autor": "Marguerite Yourcenar",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 36000,
    "sinopsis": "El emperador reflexiona sobre su vida al acercarse a la muerte. Poder, amor y responsabilidad forman una íntima mirada al mundo romano.",
    "calificacion": 3.9,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 110,
    "titulo": "Yo, Claudio",
    "autor": "Robert Graves",
    "categoria": "Historia",
    "catalogo": "clasicos",
    "precio": 50000,
    "sinopsis": "Claudio narra su supervivencia entre las intrigas de la familia imperial. Su aparente debilidad le permite observar el poder desde dentro.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/13486265-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 111,
    "titulo": "Los pilares de la Tierra",
    "autor": "Ken Follett",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 64000,
    "sinopsis": "La construcción de una catedral une vidas en la Inglaterra medieval. Ambición, fe y trabajo se enfrentan a guerras y traiciones.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/id/12331263-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 112,
    "titulo": "Un mundo sin fin",
    "autor": "Ken Follett",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 78000,
    "sinopsis": "Los habitantes de Kingsbridge afrontan cambios y epidemias. Varias generaciones buscan independencia en una sociedad rígida.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/id/12337073-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 113,
    "titulo": "La caída de los gigantes",
    "autor": "Ken Follett",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 92000,
    "sinopsis": "Cinco familias atraviesan los años de la Primera Guerra Mundial. Sus vidas muestran cambios políticos y sociales que afectan varios continentes.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/12338911-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 114,
    "titulo": "La catedral del mar",
    "autor": "Ildefonso Falcones",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 40000,
    "sinopsis": "Un joven busca prosperar en la Barcelona medieval. La construcción de Santa María del Mar acompaña su lucha por la libertad.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/id/4904621-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 115,
    "titulo": "El tiempo entre costuras",
    "autor": "María Dueñas",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 54000,
    "sinopsis": "Una costurera deja Madrid y comienza una nueva vida en Marruecos. La guerra convierte su oficio en una vía hacia el espionaje.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/6665280-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 116,
    "titulo": "Sapiens",
    "autor": "Yuval Noah Harari",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 68000,
    "sinopsis": "Un recorrido por la historia humana desde sus orígenes hasta el presente. El relato examina las ideas que hicieron posible cooperar a gran escala.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 117,
    "titulo": "Homo Deus",
    "autor": "Yuval Noah Harari",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 82000,
    "sinopsis": "La tecnología abre posibilidades inéditas para la humanidad. El autor examina cómo el poder y los datos pueden redefinir nuestro futuro.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/8846275-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 118,
    "titulo": "Una breve historia de casi todo",
    "autor": "Bill Bryson",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 30000,
    "sinopsis": "Un viaje accesible por los descubrimientos científicos que explican nuestro mundo. Historias de investigadores enlazan el cosmos con la vida cotidiana.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/14058009-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 119,
    "titulo": "El infinito en un junco",
    "autor": "Irene Vallejo",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 44000,
    "sinopsis": "La historia del libro se recorre desde el mundo antiguo. Lectores, bibliotecas y narradores muestran la resistencia de la palabra escrita.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/isbn/9788417860790-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 120,
    "titulo": "El diario de Ana Frank",
    "autor": "Ana Frank",
    "categoria": "Historia",
    "catalogo": "populares",
    "precio": 58000,
    "sinopsis": "Una adolescente escribe mientras su familia se esconde de la persecución nazi. Su diario conserva deseos cotidianos y una mirada lúcida al encierro.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 121,
    "titulo": "Drácula",
    "autor": "Bram Stoker",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 72000,
    "sinopsis": "Un abogado viaja al castillo de un conde en Transilvania. El peligro que encuentra se extiende hasta Inglaterra y amenaza a sus seres queridos.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 122,
    "titulo": "Frankenstein",
    "autor": "Mary Shelley",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 86000,
    "sinopsis": "Un científico da vida a una criatura y la abandona. El creador y su creación se enfrentan a la soledad y a sus responsabilidades.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 123,
    "titulo": "El extraño caso del doctor Jekyll y el señor Hyde",
    "autor": "Robert Louis Stevenson",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 34000,
    "sinopsis": "Un abogado investiga la relación entre un respetado médico y un hombre violento. Un experimento revela la división oculta de una identidad.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/id/10520216-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 124,
    "titulo": "Otra vuelta de tuerca",
    "autor": "Henry James",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 48000,
    "sinopsis": "Una institutriz llega a una casa para cuidar a dos niños. Presencias inquietantes la hacen dudar de lo que ve y de lo que ellos saben.",
    "calificacion": 3.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 125,
    "titulo": "El corazón delator",
    "autor": "Edgar Allan Poe",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 62000,
    "sinopsis": "Un narrador intenta demostrar su cordura al recordar un asesinato. Un sonido insistente transforma su aparente control en desesperación.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/id/5260304-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 126,
    "titulo": "La caída de la Casa Usher",
    "autor": "Edgar Allan Poe",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 76000,
    "sinopsis": "Un visitante llega a una mansión donde dos hermanos viven enfermos. La casa parece compartir la decadencia y los temores de sus habitantes.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/id/12579568-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 127,
    "titulo": "El gato negro",
    "autor": "Edgar Allan Poe",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 90000,
    "sinopsis": "Un hombre relata cómo su violencia destruyó su hogar. La presencia de un gato convierte sus actos en una obsesión imposible de silenciar.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/id/13500642-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 128,
    "titulo": "El fantasma de la ópera",
    "autor": "Gaston Leroux",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 38000,
    "sinopsis": "Una joven cantante atrae la atención de una figura escondida en el teatro. Amor y obsesión se mezclan en los pasadizos de la ópera.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/13574145-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 129,
    "titulo": "La llamada de Cthulhu",
    "autor": "H. P. Lovecraft",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 52000,
    "sinopsis": "Documentos y testimonios revelan un culto que atraviesa el mundo. Un investigador descubre una entidad ajena a toda comprensión humana.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/id/10477674-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 130,
    "titulo": "En las montañas de la locura",
    "autor": "H. P. Lovecraft",
    "categoria": "Terror",
    "catalogo": "clasicos",
    "precio": 66000,
    "sinopsis": "Una expedición antártica encuentra restos de una civilización antigua. La exploración revela un pasado que sus integrantes preferirían ignorar.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/id/10862455-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 131,
    "titulo": "Carrie",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 80000,
    "sinopsis": "Una adolescente acosada descubre poderes telequinéticos. La crueldad de sus compañeros provoca consecuencias que nadie logra controlar.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9780307743664-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 132,
    "titulo": "El resplandor",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 28000,
    "sinopsis": "Una familia pasa el invierno aislada en un hotel. Las fuerzas del edificio aprovechan las heridas de un padre para amenazar a su hijo.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 133,
    "titulo": "It",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 42000,
    "sinopsis": "Un grupo de amigos se enfrenta al mal que aterroriza su ciudad. Años después deben volver y recordar lo que intentaron olvidar.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9781501142970-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 134,
    "titulo": "Cementerio de animales",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 56000,
    "sinopsis": "Un médico descubre un lugar capaz de devolver la vida a los muertos. La pérdida lo lleva a cruzar una frontera que no entiende.",
    "calificacion": 3.4,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 135,
    "titulo": "Misery",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 70000,
    "sinopsis": "Un escritor herido queda al cuidado de una admiradora obsesiva. La devoción se convierte en una prisión donde escribir es su única salida.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/isbn/9781501143106-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 136,
    "titulo": "Salem’s Lot",
    "autor": "Stephen King",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 84000,
    "sinopsis": "Un escritor regresa a su pueblo y encuentra desapariciones extrañas. La llegada de un nuevo vecino anuncia una amenaza nocturna.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/14654118-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 137,
    "titulo": "La maldición de Hill House",
    "autor": "Shirley Jackson",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 32000,
    "sinopsis": "Cuatro personas pasan una temporada en una casa con fama de estar encantada. La experiencia transforma especialmente a una de sus visitantes.",
    "calificacion": 3.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 138,
    "titulo": "Siempre hemos vivido en el castillo",
    "autor": "Shirley Jackson",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 46000,
    "sinopsis": "Dos hermanas viven aisladas tras una tragedia familiar. La llegada de un pariente rompe el equilibrio de su mundo privado.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/id/7346999-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 139,
    "titulo": "Coraline",
    "autor": "Neil Gaiman",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 60000,
    "sinopsis": "Una niña encuentra una puerta hacia una versión distinta de su casa. Su otra madre ofrece cariño con una condición aterradora.",
    "calificacion": 3.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9780380807345-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 140,
    "titulo": "Mexican Gothic",
    "autor": "Silvia Moreno-Garcia",
    "categoria": "Terror",
    "catalogo": "populares",
    "precio": 74000,
    "sinopsis": "Noemí visita una mansión para ayudar a su prima. Las paredes y la familia guardan un secreto que amenaza con atraparla.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/id/10239163-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 141,
    "titulo": "La isla del tesoro",
    "autor": "Robert Louis Stevenson",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 88000,
    "sinopsis": "Jim Hawkins encuentra un mapa y se embarca hacia un tesoro. La tripulación esconde piratas dispuestos a traicionar a cualquiera.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/isbn/9780141321004-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 142,
    "titulo": "El conde de Montecristo",
    "autor": "Alexandre Dumas",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 36000,
    "sinopsis": "Edmond Dantès escapa de una prisión tras una condena injusta. Con una nueva identidad prepara una venganza cuidadosamente calculada.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/id/10412262-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 143,
    "titulo": "La vuelta al mundo en ochenta días",
    "autor": "Julio Verne",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 50000,
    "sinopsis": "Phileas Fogg apuesta que puede recorrer el mundo en un tiempo preciso. Cada frontera pone a prueba su calma y el ingenio de su acompañante.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/id/8291461-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 144,
    "titulo": "La isla misteriosa",
    "autor": "Julio Verne",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 64000,
    "sinopsis": "Un grupo de fugitivos llega a una isla aparentemente desierta. Sus conocimientos les permiten sobrevivir mientras descubren ayudas inexplicables.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/id/10659051-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 145,
    "titulo": "Robinson Crusoe",
    "autor": "Daniel Defoe",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 78000,
    "sinopsis": "Un náufrago debe organizar su vida en una isla remota. Años de soledad cambian cuando descubre señales de otros habitantes.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/id/368541-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 146,
    "titulo": "Las aventuras de Tom Sawyer",
    "autor": "Mark Twain",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 92000,
    "sinopsis": "Tom convierte la vida de un pueblo junto al Misisipi en una sucesión de aventuras. Juegos y travesuras lo llevan a conocer peligros reales.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/13500060-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 147,
    "titulo": "Las aventuras de Huckleberry Finn",
    "autor": "Mark Twain",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 40000,
    "sinopsis": "Huck y Jim navegan por el Misisipi para buscar libertad. Sus encuentros cuestionan las reglas de la sociedad que han dejado atrás.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/id/13482322-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 148,
    "titulo": "Colmillo Blanco",
    "autor": "Jack London",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 54000,
    "sinopsis": "Un animal nacido entre lobos aprende a sobrevivir cerca de los humanos. La violencia y el afecto transforman su relación con el mundo.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/id/13602943-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 149,
    "titulo": "La llamada de lo salvaje",
    "autor": "Jack London",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 68000,
    "sinopsis": "Buck pasa de una vida doméstica al trabajo en el norte helado. El entorno despierta instintos que lo acercan a la vida salvaje.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/13980517-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 150,
    "titulo": "El libro de la selva",
    "autor": "Rudyard Kipling",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 82000,
    "sinopsis": "Mowgli crece entre lobos y aprende las leyes de la selva. Sus amistades y enemigos lo obligan a comprender su lugar entre dos mundos.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/id/13643857-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 151,
    "titulo": "Los viajes de Gulliver",
    "autor": "Jonathan Swift",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 30000,
    "sinopsis": "Un viajero visita países con habitantes y costumbres insólitos. Cada aventura ofrece una mirada crítica a la sociedad humana.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/13499996-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 152,
    "titulo": "El último mohicano",
    "autor": "James Fenimore Cooper",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 44000,
    "sinopsis": "Durante una guerra colonial, un grupo intenta atravesar un territorio peligroso. Alianzas y rivalidades deciden el destino de sus viajeros.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/id/5253069-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 153,
    "titulo": "Miguel Strogoff",
    "autor": "Julio Verne",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 58000,
    "sinopsis": "Un mensajero debe cruzar Rusia para llevar una advertencia urgente. La misión exige mantener su identidad en secreto y superar grandes peligros.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/5268437-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 154,
    "titulo": "Capitanes intrépidos",
    "autor": "Rudyard Kipling",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 72000,
    "sinopsis": "Un joven privilegiado cae al mar y es rescatado por pescadores. El trabajo a bordo le enseña responsabilidad y compañerismo.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/15094743-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 155,
    "titulo": "El mundo perdido",
    "autor": "Arthur Conan Doyle",
    "categoria": "Aventura",
    "catalogo": "clasicos",
    "precio": 86000,
    "sinopsis": "Una expedición busca una meseta donde sobreviven criaturas prehistóricas. El descubrimiento pone a prueba la ciencia y la supervivencia.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/13924277-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 156,
    "titulo": "Los juegos del hambre",
    "autor": "Suzanne Collins",
    "categoria": "Aventura",
    "catalogo": "populares",
    "precio": 34000,
    "sinopsis": "Katniss se ofrece para sustituir a su hermana en una competencia mortal. Sobrevivir implica desafiar las reglas de un espectáculo político.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 157,
    "titulo": "En llamas",
    "autor": "Suzanne Collins",
    "categoria": "Aventura",
    "catalogo": "populares",
    "precio": 48000,
    "sinopsis": "La victoria de Katniss inspira a los distritos y alarma al Capitolio. Una nueva edición de los juegos amenaza con destruir esa esperanza.",
    "calificacion": 3.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 158,
    "titulo": "Sinsajo",
    "autor": "Suzanne Collins",
    "categoria": "Aventura",
    "catalogo": "populares",
    "precio": 62000,
    "sinopsis": "Katniss se convierte en símbolo de una rebelión. La guerra la obliga a cuestionar quién controla su imagen y sus decisiones.",
    "calificacion": 4.0,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 159,
    "titulo": "Percy Jackson y el ladrón del rayo",
    "autor": "Rick Riordan",
    "categoria": "Aventura",
    "catalogo": "populares",
    "precio": 76000,
    "sinopsis": "Un adolescente descubre que es hijo de un dios griego. Para impedir una guerra divina debe encontrar un objeto robado.",
    "calificacion": 4.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 160,
    "titulo": "El alquimista",
    "autor": "Paulo Coelho",
    "categoria": "Aventura",
    "catalogo": "populares",
    "precio": 90000,
    "sinopsis": "Un pastor viaja desde España buscando un tesoro soñado. Los encuentros del camino le enseñan a interpretar sus deseos.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 161,
    "titulo": "Hábitos atómicos",
    "autor": "James Clear",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 38000,
    "sinopsis": "Pequeños cambios cotidianos pueden producir resultados duraderos. El libro propone organizar el entorno y los sistemas para sostener nuevas conductas.",
    "calificacion": 4.3,
    "portada": "https://covers.openlibrary.org/b/isbn/9786075694122-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 162,
    "titulo": "Los 7 hábitos de la gente altamente efectiva",
    "autor": "Stephen R. Covey",
    "categoria": "Desarrollo personal",
    "catalogo": "clasicos",
    "precio": 52000,
    "sinopsis": "Siete principios conectan el crecimiento personal con las relaciones. La propuesta invita a elegir prioridades antes de reaccionar a las urgencias.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 163,
    "titulo": "Cómo ganar amigos e influir sobre las personas",
    "autor": "Dale Carnegie",
    "categoria": "Desarrollo personal",
    "catalogo": "clasicos",
    "precio": 66000,
    "sinopsis": "Ejemplos cotidianos muestran cómo escuchar y comunicarse con mayor empatía. El enfoque busca mejorar las relaciones sin perder de vista al otro.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 164,
    "titulo": "El hombre en busca de sentido",
    "autor": "Viktor Frankl",
    "categoria": "Desarrollo personal",
    "catalogo": "clasicos",
    "precio": 80000,
    "sinopsis": "Un psiquiatra recuerda su experiencia en campos de concentración. Sus reflexiones exploran cómo encontrar sentido incluso frente al sufrimiento.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 165,
    "titulo": "El poder del ahora",
    "autor": "Eckhart Tolle",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 28000,
    "sinopsis": "La atención al momento presente se plantea como una forma de reducir el malestar. El autor invita a observar pensamientos sin identificarse por completo con ellos.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 166,
    "titulo": "Los cuatro acuerdos",
    "autor": "Don Miguel Ruiz",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 42000,
    "sinopsis": "Cuatro compromisos personales orientan la relación con uno mismo y con los demás. La palabra y las suposiciones ocupan un lugar central.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/isbn/9781878424310-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 167,
    "titulo": "El monje que vendió su Ferrari",
    "autor": "Robin Sharma",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 56000,
    "sinopsis": "Una fábula cuenta el cambio de vida de un abogado exitoso. El viaje propone revisar el tiempo, las prioridades y el bienestar.",
    "calificacion": 4.9,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 168,
    "titulo": "El sutil arte de que (casi todo) te importe un carajo",
    "autor": "Mark Manson",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 70000,
    "sinopsis": "Aceptar límites permite elegir qué merece atención. El autor cuestiona la búsqueda de una felicidad permanente y sin dificultades.",
    "calificacion": 3.8,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 169,
    "titulo": "Esencialismo",
    "autor": "Greg McKeown",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 84000,
    "sinopsis": "Elegir menos compromisos puede abrir espacio para lo importante. El libro propone distinguir lo necesario de lo que solo ocupa tiempo.",
    "calificacion": 4.5,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 170,
    "titulo": "Enfócate",
    "autor": "Cal Newport",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 32000,
    "sinopsis": "La concentración sostenida se presenta como una capacidad valiosa. Estrategias concretas ayudan a reducir distracciones y organizar el trabajo profundo.",
    "calificacion": 3.4,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 171,
    "titulo": "El poder de los hábitos",
    "autor": "Charles Duhigg",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 46000,
    "sinopsis": "Historias personales y organizacionales muestran cómo se forman los hábitos. Identificar sus señales y recompensas permite pensar en el cambio.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/15102653-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 172,
    "titulo": "Mindset",
    "autor": "Carol S. Dweck",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 60000,
    "sinopsis": "Las creencias sobre nuestras capacidades influyen en cómo afrontamos los retos. El libro distingue una mirada fija de una orientada al aprendizaje.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/746414-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 173,
    "titulo": "Grit",
    "autor": "Angela Duckworth",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 74000,
    "sinopsis": "La perseverancia y el interés sostenido pueden impulsar logros de largo plazo. Investigaciones y ejemplos examinan cómo cultivar esa combinación.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/7438753-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 174,
    "titulo": "Inteligencia emocional",
    "autor": "Daniel Goleman",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 88000,
    "sinopsis": "Comprender las emociones amplía la mirada sobre nuestras capacidades. El libro relaciona autoconocimiento, empatía y vínculos cotidianos.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/id/14532869-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 175,
    "titulo": "El arte de la felicidad",
    "autor": "Dalái Lama y Howard C. Cutler",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 36000,
    "sinopsis": "Conversaciones sobre la vida conectan una tradición espiritual con preguntas actuales. La compasión y las relaciones aparecen como fuentes de bienestar.",
    "calificacion": 3.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 176,
    "titulo": "El camino del artista",
    "autor": "Julia Cameron",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 50000,
    "sinopsis": "Ejercicios de escritura y observación buscan desbloquear la creatividad. La práctica cotidiana ayuda a recuperar curiosidad y confianza.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/id/5231229-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 177,
    "titulo": "El club de las 5 de la mañana",
    "autor": "Robin Sharma",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 64000,
    "sinopsis": "Una historia propone dedicar las primeras horas al crecimiento personal. El método organiza tiempo para movimiento, reflexión y aprendizaje.",
    "calificacion": 4.7,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 178,
    "titulo": "Aprende como Einstein",
    "autor": "Peter Hollins",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 78000,
    "sinopsis": "Estrategias de aprendizaje invitan a comprender y recordar mejor. El enfoque combina curiosidad, práctica y organización de la información.",
    "calificacion": 3.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 179,
    "titulo": "Todo está jodido",
    "autor": "Mark Manson",
    "categoria": "Desarrollo personal",
    "catalogo": "populares",
    "precio": 92000,
    "sinopsis": "Una reflexión sobre la esperanza y las contradicciones de la vida moderna. El autor cuestiona las certezas con las que buscamos bienestar.",
    "calificacion": 4.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 180,
    "titulo": "Tus zonas erróneas",
    "autor": "Wayne W. Dyer",
    "categoria": "Desarrollo personal",
    "catalogo": "clasicos",
    "precio": 40000,
    "sinopsis": "El autor examina patrones de pensamiento que generan culpa y preocupación. La propuesta invita a asumir decisiones y cultivar autonomía.",
    "calificacion": 3.2,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 181,
    "titulo": "Veinte poemas de amor y una canción desesperada",
    "autor": "Pablo Neruda",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 54000,
    "sinopsis": "El amor, el cuerpo y la ausencia se expresan en imágenes de la naturaleza. Estos poemas recorren la intensidad del deseo y la despedida.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/id/747596-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 182,
    "titulo": "Cien sonetos de amor",
    "autor": "Pablo Neruda",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 68000,
    "sinopsis": "Cien poemas celebran un amor unido a la vida cotidiana. La tierra y las estaciones acompañan sus distintas intensidades.",
    "calificacion": 4.6,
    "portada": "https://covers.openlibrary.org/b/id/5229495-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 183,
    "titulo": "Residencia en la tierra",
    "autor": "Pablo Neruda",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 82000,
    "sinopsis": "Imágenes densas exploran el tiempo, la soledad y la materia. La voz poética se adentra en un mundo inquietante y cambiante.",
    "calificacion": 3.5,
    "portada": "https://covers.openlibrary.org/b/id/156164-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 184,
    "titulo": "Antología poética",
    "autor": "Mario Benedetti",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 30000,
    "sinopsis": "Una selección de poemas enlaza el amor con la memoria y la vida común. La voz cercana también mira la distancia y el compromiso.",
    "calificacion": 4.2,
    "portada": "https://covers.openlibrary.org/b/id/5024400-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 185,
    "titulo": "El amor, las mujeres y la vida",
    "autor": "Mario Benedetti",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 44000,
    "sinopsis": "Poemas sobre encuentros y ausencias dibujan distintas formas del amor. El paso del tiempo conversa con el deseo de permanecer cerca.",
    "calificacion": 4.9,
    "portada": "https://covers.openlibrary.org/b/id/5310166-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 186,
    "titulo": "Rimas y leyendas",
    "autor": "Gustavo Adolfo Bécquer",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 58000,
    "sinopsis": "Versos íntimos y relatos evocadores exploran el amor y lo sobrenatural. La música de las palabras acompaña escenarios llenos de misterio.",
    "calificacion": 3.8,
    "portada": "https://covers.openlibrary.org/b/id/2271282-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 187,
    "titulo": "Romancero gitano",
    "autor": "Federico García Lorca",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 72000,
    "sinopsis": "Los romances transforman paisajes andaluces en escenas de deseo y destino. Símbolos e imágenes unen tradición y modernidad.",
    "calificacion": 4.5,
    "portada": "https://covers.openlibrary.org/b/id/5985528-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 188,
    "titulo": "Poeta en Nueva York",
    "autor": "Federico García Lorca",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 86000,
    "sinopsis": "La gran ciudad provoca imágenes de soledad e injusticia. La voz poética contrapone la vida humana al ritmo desbordado de la modernidad.",
    "calificacion": 3.4,
    "portada": "https://covers.openlibrary.org/b/id/4909428-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 189,
    "titulo": "Bodas de sangre",
    "autor": "Federico García Lorca",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 34000,
    "sinopsis": "Una boda enfrenta deseos prohibidos y lealtades familiares. La pasión conduce a un desenlace marcado por la violencia.",
    "calificacion": 4.1,
    "portada": "https://covers.openlibrary.org/b/id/5268273-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 190,
    "titulo": "La casa de Bernarda Alba",
    "autor": "Federico García Lorca",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 48000,
    "sinopsis": "Cinco hijas viven bajo las reglas de una madre autoritaria. El encierro y el deseo producen tensiones que ya no pueden ocultarse.",
    "calificacion": 4.8,
    "portada": "https://covers.openlibrary.org/b/id/7323388-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 191,
    "titulo": "Hamlet",
    "autor": "William Shakespeare",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 62000,
    "sinopsis": "Un príncipe recibe el mandato de vengar a su padre. Sus dudas enfrentan la verdad, la acción y la corrupción del poder.",
    "calificacion": 3.7,
    "portada": "https://covers.openlibrary.org/b/id/8281954-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 192,
    "titulo": "Macbeth",
    "autor": "William Shakespeare",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 76000,
    "sinopsis": "Una profecía despierta la ambición de un guerrero. El crimen abre un camino de culpa y violencia que no consigue detener.",
    "calificacion": 4.4,
    "portada": "https://covers.openlibrary.org/b/id/872432-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 193,
    "titulo": "Sueño de una noche de verano",
    "autor": "William Shakespeare",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 90000,
    "sinopsis": "Amantes, artesanos y criaturas mágicas se encuentran en un bosque. Los enredos transforman el deseo en una comedia de equívocos.",
    "calificacion": 3.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 194,
    "titulo": "La vida es sueño",
    "autor": "Pedro Calderón de la Barca",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 38000,
    "sinopsis": "Segismundo sale de su encierro y debe enfrentarse al poder. La incertidumbre entre sueño y realidad invita a cuestionar el destino.",
    "calificacion": 4.0,
    "portada": "https://covers.openlibrary.org/b/id/1047425-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 195,
    "titulo": "Fuenteovejuna",
    "autor": "Lope de Vega",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 52000,
    "sinopsis": "Un pueblo se rebela contra los abusos de su señor. Sus habitantes encuentran en una respuesta colectiva su forma de resistencia.",
    "calificacion": 4.7,
    "portada": "https://covers.openlibrary.org/b/id/13955323-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  },
  {
    "id": 196,
    "titulo": "Las flores del mal",
    "autor": "Charles Baudelaire",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 66000,
    "sinopsis": "La belleza aparece entre la ciudad, el deseo y la decadencia. Los poemas exploran contradicciones de una sensibilidad moderna.",
    "calificacion": 3.6,
    "portada": "https://covers.openlibrary.org/b/id/13482377-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      }
    ]
  },
  {
    "id": 197,
    "titulo": "Hojas de hierba",
    "autor": "Walt Whitman",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 80000,
    "sinopsis": "Una voz expansiva celebra el cuerpo, la naturaleza y la diversidad humana. El verso libre busca conectar al individuo con el mundo.",
    "calificacion": 4.3,
    "portada": "",
    "resenas": [
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      }
    ]
  },
  {
    "id": 198,
    "titulo": "Ariel",
    "autor": "Sylvia Plath",
    "categoria": "Poesía y teatro",
    "catalogo": "clasicos",
    "precio": 28000,
    "sinopsis": "Poemas intensos exploran identidad, dolor y transformación. Imágenes precisas sostienen una voz que se enfrenta a sus límites.",
    "calificacion": 3.2,
    "portada": "https://covers.openlibrary.org/b/id/33279-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      },
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      }
    ]
  },
  {
    "id": 199,
    "titulo": "Otras maneras de usar la boca",
    "autor": "Rupi Kaur",
    "categoria": "Poesía y teatro",
    "catalogo": "populares",
    "precio": 42000,
    "sinopsis": "Textos breves abordan heridas, amor y recuperación. Una escritura directa acompaña momentos de vulnerabilidad y fuerza.",
    "calificacion": 3.9,
    "portada": "https://covers.openlibrary.org/b/id/13269632-L.jpg?default=false",
    "resenas": [
      {
        "nombre": "María Fernanda Sánchez Ramírez",
        "comentario": "No fue una lectura para mí; no logré conectar con el tono ni con el desarrollo.",
        "calificacion": 1
      },
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      },
      {
        "nombre": "Santiago Andrés Martínez López",
        "comentario": "Muy recomendable; encontré pasajes hermosos y una historia que valió la pena leer.",
        "calificacion": 4
      },
      {
        "nombre": "Valentina Sofía García Torres",
        "comentario": "Tiene momentos interesantes, aunque el ritmo no siempre me convenció.",
        "calificacion": 3
      },
      {
        "nombre": "Juan David Hernández Rojas",
        "comentario": "Esperaba conectar más con la propuesta. Algunas partes se me hicieron lentas.",
        "calificacion": 2
      }
    ]
  },
  {
    "id": 200,
    "titulo": "El sol y sus flores",
    "autor": "Rupi Kaur",
    "categoria": "Poesía y teatro",
    "catalogo": "populares",
    "precio": 56000,
    "sinopsis": "Un recorrido poético enlaza pérdida, raíces y crecimiento. Las flores sirven como imagen de una vida que vuelve a abrirse.",
    "calificacion": 4.6,
    "portada": "",
    "resenas": [
      {
        "nombre": "Camila Andrea Rodríguez Gómez",
        "comentario": "Una lectura que me conmovió. Me quedé pensando en sus personajes mucho después de terminar.",
        "calificacion": 5
      }
    ]
  }
];
