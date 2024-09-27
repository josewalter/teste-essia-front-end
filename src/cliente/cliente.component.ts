import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../app/modelo/Cliente';
import { ClienteService } from '../app/servico/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  cliente = new Cliente();

  btnCadastrar: boolean = true;

  clientes: Cliente[] = [];

  constructor(private servico:ClienteService) {}
/*
  getAllClientes() {
    this.servico.getClientes()
    .subscribe((data) => {this.clientes = data;
    });
  }
*/
  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar():void {
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {this.clientes.push(retorno);
    });
  }

  ngOnInit(): void {
    this.selecionar();
  }

}
