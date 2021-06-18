import { Socket } from "socket.io";

const DISCONNECT: string = 'disconnect';
const CONNECT: string = 'connect';


export const desconectar = ( cliente: Socket) =>{

    cliente.on( DISCONNECT, () => {

        console.log('Cliente desconectado');

    });

}

//Escucha mensajes
export const mensaje = (cliente: Socket) => {

    cliente.on('mensaje', (payload:any) => {
        console.log('Mensaje Recibido :', payload);
    });

}