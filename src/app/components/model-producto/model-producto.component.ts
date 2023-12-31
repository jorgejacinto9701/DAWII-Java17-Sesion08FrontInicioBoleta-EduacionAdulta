import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-model-producto',
  templateUrl: './model-producto.component.html',
  styleUrls: ['./model-producto.component.css']
})
export class ModelProductoComponent {

  //Filtro de Grila
  filtro: string ="";

  //Grilla
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns = ["idProducto","nombre","precio","stock",'actions'];
  pageIndex = 0;
  pageSize = 20;
  pageSizeOptions = [5,10];
  dataSource:any;

  constructor(private dialog: MatDialog, private productoService: ProductoService) {
   
  }

  seleccioneProducto(objProducto: Producto) {
    
  }

  applyFilter() {
    
 }

 onPageChange(any : any){
 
}

  private refreshTable() {
   
  }

}
