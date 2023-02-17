import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { QuizComponent } from './games/quiz/quiz.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "games", component: GamesComponent},
  { path: "games/quiz", component: QuizComponent},
  { path: "curiosity", component: CuriosityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
