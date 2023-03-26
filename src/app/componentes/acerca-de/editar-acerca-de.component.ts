import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit{
  persona: persona= null;

  constructor (private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //this.persona.img = this.imagenService.url;
    
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);

    },err => {
      alert("Error al modificar la Persona");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any) {
     
  }

}
