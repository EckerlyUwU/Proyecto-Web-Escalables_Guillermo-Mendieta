import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = "Crear Nota";
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute){
    this.productoForm = this.fb.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      informacion: ['', Validators.required],
    }) 
    this.id = this.aRouter.snapshot.paramMap.get('id'); 
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.productoForm);

    console.log(this.productoForm.get('categoria')?.value);

    const PRODUCTO: Producto = {
      categoria: this.productoForm.get('categoria')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      fecha: this.productoForm.get('fecha')?.value,
      informacion: this.productoForm.get('informacion')?.value,
    }

    if(this.id !== null){

      this._productoService.editarNota(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('Actualizado con exito', 'Nota Actualizada!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    }else{
      console.log(PRODUCTO);
      this._productoService.guardarNota(PRODUCTO).subscribe(data => {
        this.toastr.success('Registrado con exito', 'Nota Registrada!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }

  esEditar() {

    if(this.id !== null){
      this.titulo = 'Editar nota';
      this._productoService.obtenerNota(this.id).subscribe(data => {
        this.productoForm.setValue({
          categoria: data.categoria,
          nombre: data.nombre,
          fecha: data.fecha,
          informacion: data.informacion,
        })
      })
    }
  }

}
