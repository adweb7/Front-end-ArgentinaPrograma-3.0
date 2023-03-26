import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacion: Estudios[] = [];
  estudios: Estudios[];

  constructor(private estudiosS: EstudiosService, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin = false;
  ngOnInit(): void {
    this.cargarEstudios();
    this.tokenService.getAuthorities().forEach(rol => {if(rol == 'ROLE_ADMIN') {this.isAdmin = true}})
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } 
    
  }
 
  cargarEstudios(): void{
    this.estudiosS.lista().subscribe(
      data =>{
        this.estudios = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.estudiosS.delete(id).subscribe(
        data => {
          this.cargarEstudios();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
