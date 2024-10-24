import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/notas/';

  constructor(private http: HttpClient) { }

  getNotas(): Observable<any> {
    return this.http.get(this.url);
  }
  
  eliminarNota(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarNota(nota: Producto): Observable<any>{
    return this.http.post(this.url, nota);
  }

  obtenerNota(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarNota(id: string, nota: Producto): Observable<any>{
    return this.http.put(this.url + id , nota);
  }

}
