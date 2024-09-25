import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../app/modelo/Cliente';
import { ClienteService } from '../app/servico/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})

export class ClienteComponent {
/*
  formulario = new FormGroup({

    nomeCliente     : new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf             : new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]),
    email           : new FormControl('', [Validators.required, Validators.email]),
    telefoneCelular : new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)])
  });
*/
    btnCadastrar:boolean = true;

    Clientes:Cliente[] = [];

    constructor(private servico:ClienteService){

    }

   selecionar():void{
      this.servico.selecionar()
      .subscribe(retorno => this.Clientes = retorno);
   }

   ngOnInit(){
     this.selecionar();
   }

}

