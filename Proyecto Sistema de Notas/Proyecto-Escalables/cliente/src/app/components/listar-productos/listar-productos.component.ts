import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  
  listNotas: Producto[] = [];

  constructor(private _productoService: ProductoService,
    private toastr: ToastrService){}


  ngOnInit(): void {
    this.obtenerNotas();
  }

  obtenerNotas() {
    this._productoService.getNotas().subscribe(data => {
      console.log(data);
      this.listNotas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarNota(id: any){
    this._productoService.eliminarNota(id).subscribe(data => {
      this.toastr.error('La nota fue eliminada', 'Nota eliminada')
      this.obtenerNotas();
    }, error => {
      console.log(error);
    })
  }

}
