import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-nuevos-estudios',
  templateUrl: './nuevos-estudios.component.html',
  styleUrls: ['./nuevos-estudios.component.css']
})
export class NuevosEstudiosComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private estudiosS: EstudiosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const estudios = new Estudios(this.nombreE, this.descripcionE);
    this.estudiosS.save(estudios).subscribe(
      data =>{
        alert("Estudios añadidos correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
