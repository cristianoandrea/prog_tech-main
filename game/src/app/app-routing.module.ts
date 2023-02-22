import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { QuizComponent } from './games/quiz/quiz.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "games", component: GamesComponent},
  { path: "quiz", component: QuizComponent},
  { path: "curiosity", component: CuriosityComponent},
  { path: "products", component: ProductsComponent},
  { path: "services", component: ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
