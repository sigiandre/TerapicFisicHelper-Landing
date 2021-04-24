// import { IRol } from './rol';
// import { IAccount } from './account';

export interface IUser {
    id: string; // Autogenerado (Ej. dab84d54-0e53-4852-a922-c164d7033343)
    first_name: string; // Nombre dde usuario
    last_name: string; // Primer Nombre del usuario 
    dni: string; // Apellido del Usuario
    phone: string; // Password  --> requiere cifrado
    email: string; // Rol del usuario
    total_score: string[]; // Cuentas del usuario
    roomie_id: string; // Zona horaria
    adress_id: string; // Moneda que maneja el usuario por defecto
    hoobyes: string; // Lenguaje del usario
}