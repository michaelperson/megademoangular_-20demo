import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { Demo12Component } from './components/demo/demo12/demo12.component';
import { Demo13Component } from './components/demo/demo13/demo13.component';
import { Demo14Component } from './components/demo/demo14/demo14.component';
import { Demo15Component } from './components/demo/demo15/demo15.component';
import { CustomPipePipe } from './components/demo/demo6/custom-pipe.pipe';
import { HighlightDirective } from './components/demo/demo8/highlight.directive';
import { PrepareRenderDirective } from './components/demo/demo8/prepare-render.directive';
import { ChildrenInputComponent } from './components/demo/demo10/children-input/children-input.component';
import { CustomPipe2Pipe } from './components/demo/demo6/custom-pipe2.pipe';
import { ChildrenOutputComponent } from './components/demo/demo10/children-output/children-output.component';
import { FakeAuthService } from './components/demo/demo11/services/fake-auth.service';
import { FakePromiseService } from './components/demo/demo12/services/fake-promise.service';
import { Demo13guardedComponent } from './components/demo/demo13/demo13guarded/demo13guarded.component';
import { LoginService } from './components/demo/demo13/login.service';
import { Demo16Component } from './components/demo/demo16/demo16.component';
import { Demo17Component } from './components/demo/demo17/demo17.component';
import { Demo18Component } from './components/demo/demo18/demo18.component';
import { Demo18dot5Component } from './components/demo/demo18dot5/demo18dot5.component';
import { Demo19Component } from './components/demo/demo19/demo19.component';
import { Demo20Component } from './components/demo/demo20/demo20.component';
import { Demo21Component } from './components/demo/demo21/demo21.component';
import { Exos1dot1Component } from './exos/exos1dot1/exos1dot1.component';
import { Exos1dot2Component } from './exos/exos1dot2/exos1dot2.component';
import { ConverterTempPipe } from './exos/exos1dot1/converter-temp.pipe';
import { ConverterSecPipe } from './exos/exos1dot2/converter-sec.pipe';
import { Exos2Component } from './exos/exos2/exos2.component';
import { ConvertNumberPipe } from './exos/exos2/convert-number.pipe';
import { FakeLogin17Service } from './components/demo/demo17/services/fake-login17.service';
import { ProductsComponent } from './exos/exos3dot1/products/products.component';
import { DetailsComponent } from './exos/exos3dot1/details/details.component';
import { Products2Component } from './exos/exos3dot2/products/products2.component';
import { FakeLoginExos3Service } from './exos/exos3dot2/services/fake-login-exos3.service';
import { GestProductsService } from './exos/exos3dot2/services/gest-products.service';
import { Demo4dot5Component } from './components/demo/demo4dot5/demo4dot5.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NavbarComponent,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    CustomPipePipe,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    HighlightDirective,
    PrepareRenderDirective,
    CustomPipe2Pipe,
    ChildrenInputComponent,
    ChildrenOutputComponent,
    Demo13guardedComponent,
    Demo16Component,
    Demo17Component,
    Demo18Component,
    Demo18dot5Component,
    Demo19Component,
    Demo20Component,
    Demo21Component,
    Exos1dot1Component,
    Exos1dot2Component,
    ConverterTempPipe,
    ConverterSecPipe,
    Exos2Component,
    ConvertNumberPipe,
    ProductsComponent,
    DetailsComponent,
    Products2Component,
    Demo4dot5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //demo 2 two way binding (input)
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    FakeAuthService,
    FakePromiseService,
    FakeLogin17Service,
    FakeLoginExos3Service,
    GestProductsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
