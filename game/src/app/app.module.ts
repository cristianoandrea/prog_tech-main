import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapseModule, NgbModule, NgbCarouselModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { NgIf } from '@angular/common';
import { InfocardsComponent } from './infocards/infocards.component';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { DinoGameComponent } from './dino-game/dino-game.component';
import { TrexGameComponent } from './games/trex-game/trex-game.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './games/quiz/quiz.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './card/card.component';
import { ServicesComponent } from './pages/services/services.component';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InfocardsComponent,
    HomeComponent,
    GamesComponent,
    DinoGameComponent,
    TrexGameComponent,
    CuriosityComponent,
    QuizComponent,
    FooterComponent,
    ProductsComponent,
    CardComponent,
    ServicesComponent,

  ],
  imports: [
    
    NgbAccordionModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }