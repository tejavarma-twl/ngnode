import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TestsComponent } from './tests/tests.component';
import {ServiceService} from './service.service';

const routes : Routes = [
  { path : '' , component:AboutComponent },
  { path : 'about' , component:AboutComponent },
  { path : 'tests' , component:TestsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
