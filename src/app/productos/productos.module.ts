import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductosRoutingModule } from "./productos-routing.module";

import { AgregarComponent } from "./pages/agregar/agregar.component";
import { EditarComponent } from "./pages/editar/editar.component";
import { ListadoComponent } from "./pages/listado/listado.component";

@NgModule({
  imports: [CommonModule, ProductosRoutingModule],
  declarations: [AgregarComponent, EditarComponent, ListadoComponent]
})
export class ProductosModule {}
