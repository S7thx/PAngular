import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { MeditacaoComponent } from './pages/meditacao/meditacao.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercicios', component: ExerciciosComponent },
  { path: 'meditacao', component: MeditacaoComponent },
  { path: 'dicas', component: DicasComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
