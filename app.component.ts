import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { asistente } from './models/asistente';
import { Class } from 'estree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aux: boolean = false;
  validaciones: number = 0;
  i: number = 0;
  mensaje: string='';
  asistentesArray: asistente[] =[];
  selectedasistente: asistente = new asistente();
  addoredit(){
    if(this.selectedasistente.id === 0){
      if(this.validar()){
        this.selectedasistente.id = this.asistentesArray.length +1;
    this.asistentesArray.push(this.selectedasistente);
      }else{
        window.alert(this.mensaje);
      }
    }
    this.selectedasistente = new asistente();
  }
  editar(ast: asistente){
    this.selectedasistente = ast;
  }
  delete(){
    if(confirm('estas seguro?')){
      this.asistentesArray = this.asistentesArray.filter(x => x != this.selectedasistente);
    this.selectedasistente = new asistente();
    }
    
  }
  validar(){
    this.aux=false;
    this.validaciones=0;
    this.mensaje = '';
    for(this.i=0;this.i < this.selectedasistente.Email.length;this.i++){
      if(this.selectedasistente.Email.charAt(this.i) === '@'){
        this.validaciones++;
      }
    }
    if(this.validaciones === 0){
      this.mensaje=this.mensaje+" - error en el correo";
    }
    if(this.selectedasistente.nombre.length <= 100){
      this.validaciones++;
    }else{
      this.mensaje=this.mensaje+" - error en el nombre";
    }
    if(this.selectedasistente.Ndocumento <= 999999999999999999999999999999){
      this.validaciones++;
    }else{
      this.mensaje=this.mensaje+" - error en el documento";
    }
      if(this.selectedasistente.telefono <= 9999999999){
        this.validaciones++;
      }else{
        this.mensaje=this.mensaje+" - error en el numero de telefono";
      }
    if(this.validaciones === 4){
      this.aux = true;
    }

    return this.aux;
  }
}
