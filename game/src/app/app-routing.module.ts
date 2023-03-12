import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { QuizComponent } from './games/quiz/quiz.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServizioComponent } from './pages/servizio/servizio.component';
import { ImagesComponent } from './games/images/images.component';
import { CommunityComponent } from './pages/community/community.component';
import { AuthService } from './auth.service';
import { YoutubeComponent } from './pages/youtube/youtube.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "games", component: GamesComponent},
  { path: "images", component: ImagesComponent},
  { path: "quiz", component: QuizComponent},
  { path: "curiosity", component: CuriosityComponent},
  { path: "products", component: ProductsComponent},
  { path: "services", component: ServicesComponent},
  { path: "community", component: CommunityComponent},
  { path: "youtube", component: YoutubeComponent},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent},
  { path: "services/veterinarian", component: ServizioComponent, data: {servizioType: 'veterinario'}},
  { path: "services/dogsitting", component: ServizioComponent, data: {servizioType: 'dogsitter'}},
  { path: "services/grooming", component: ServizioComponent, data: {servizioType: 'toelettatura'}},
  { path: "services/psychologist", component: ServizioComponent, data: {servizioType: 'psicologo'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private authservice: AuthService){}
 }
