import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { heroesModule } from './heroes/listado/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';




@NgModule({
  declarations: [
AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    DbzModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
