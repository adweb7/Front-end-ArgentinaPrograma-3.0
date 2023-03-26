import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-editarestudios',
  templateUrl: './editarestudios.component.html',
  styleUrls: ['./editarestudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  educacion: Estudios = null;
  estudios: Estudios;
  
  constructor(
    private estudiosS: EstudiosService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosS.detail(id).subscribe(
      data =>{
        this.estudios = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosS.update(id, this.estudios).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar los estudios");
        this.router.navigate(['']);
      }
    )
  }
}