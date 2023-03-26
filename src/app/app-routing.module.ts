import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { NuevosEstudiosComponent } from './componentes/estudios/nuevos-estudios.component';
import { EditarEstudiosComponent } from './componentes/estudios/editarestudios.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarSkillComponent } from './componentes/hys/editar-skill.component';
import { NuevoSkillComponent } from './componentes/hys/nuevo-skill.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login',component:LoginComponent },
  {path:'nuevaexp', component:NuevaExperienciaComponent},
  {path:'editarexp/:id',component: EditarExperienciaComponent},
  {path:'nuevosest', component:NuevosEstudiosComponent},
  {path:'editarest/:id', component:EditarEstudiosComponent},
  {path:'nuevoskill', component:NuevoSkillComponent},
  {path:'editarskill/:id', component:EditarSkillComponent},
  {path:'editaracercade/:id', component:EditarAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
