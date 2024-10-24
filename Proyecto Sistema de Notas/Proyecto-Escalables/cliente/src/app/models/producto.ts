export class Producto {
    _id?: number;
    categoria: string;
    nombre: string;
    fecha: Date;
    informacion: string;

    constructor(categoria: string, nombre: string, fecha: Date, informacion: string){
        this.categoria = categoria;
        this.nombre = nombre;
        this.fecha = fecha;
        this.informacion = informacion;
    }
}