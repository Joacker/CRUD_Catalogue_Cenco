import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './miprimercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { ArrayUsersComponent } from './array-users/array-users.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  { path: '', component: HolaMundoComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    ArrayUsersComponent,
    UserComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
