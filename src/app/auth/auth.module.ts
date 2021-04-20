import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";

import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ForgotComponent],
  imports: [AuthRoutingModule]
})
export class AuthModule {}
