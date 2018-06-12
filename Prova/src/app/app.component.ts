import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {pessoa} from './pessoa';
import {PessoaService} from './pessoa.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  Pessoa : pessoa = new pessoa();

  ObtemCPF($event :any) : void{
    this.Pessoa.CPF = $event.target.value;
  }

  ObtemNomeCompleto($event : any) : void{
    this.Pessoa.NomeCompleto = $event.target.value;
  }

  ObtemNomeCompletoMae($event : any): void{
    this.Pessoa.NomeMae = $event.target.value
  }

  ObtemNomeCompletoPai($event : any) : void{
    this.Pessoa.NomePai = $event.target.value
  }

  LimparCampos():void{
    this.Pessoa = new pessoa();
  }

  SalvarDados():void{
   this.PessoaService.setPessoa(this.Pessoa)
   .subscribe(() => this.LimparCampos(),() => this.ReportaErro());
  

  }

  ReportaErro(): void{
    console.log("Deu Pau")
  }

  constructor(private PessoaService: PessoaService){

  }

  ngOnInit(){
   
  }
}
