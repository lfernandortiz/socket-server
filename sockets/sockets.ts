import { Socket } from "socket.io";
import socketIO from "socket.io";

const DISCONNECT: string = 'disconnect';
const CONNECT: string = 'connect';
const MENSAJE: string = 'mensaje';


export const desconectar = ( cliente: Socket) =>{

    cliente.on( DISCONNECT, () => {
        console.log('Cliente desconectado');
    });

}

//Escucha mensajes
export const mensaje = (cliente: Socket , io:socketIO.Server) => {

    cliente.on(MENSAJE, (payload:any) => {
        console.log('Mensaje Recibido :', payload);


        io.emit('mensaje-nuevo', payload);

    });

}



