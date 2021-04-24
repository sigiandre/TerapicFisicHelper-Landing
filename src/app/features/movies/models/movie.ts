export interface Movie {
  id?: string; // Autogenerado (Ej. dab84d54-0e53-4852-a922-c164d7033343)
  name?: string; // Nombre de la pelicula
  description?: string; // Descripcion de la pelicula
  premiereTimestamp?: number; // Fecha de estreno en milisegundos (Ej. 1584551980000)
  available?: boolean; // Indica si la pelicula esta disponible
}
