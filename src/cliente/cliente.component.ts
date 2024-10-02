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

  tabela:boolean = true;

  clientes: Cliente[] = [];

  constructor(private servico:ClienteService) {}

  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar():void {
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {this.clientes.push(retorno);

    this.cliente = new Cliente();

    alert('Cliente cadastrado com sucesso!');
    });
  }

  //Método para selecionar um cliente específico
  selecionarCliente(posicao:number):void{
    this.cliente = this.clientes[posicao];
    this.btnCadastrar =false;

    this.tabela = false;
  }

  // Método de inicialização
  ngOnInit(): void {
    this.selecionar();
  }

}
