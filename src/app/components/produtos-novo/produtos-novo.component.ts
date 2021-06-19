import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: ProdutosService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  //usando o componente FormBuilder

  builderForm = this.fb.group({
    codigo: ['', [Validators.required, Validators.min(1)]],
    descricao: ['', [Validators.required, Validators.minLength(3)]],
    unidade: ['', [Validators.minLength(2), Validators.maxLength(5)]],
    preco: ['', [Validators.min(1)]],
    categoria: ['', [Validators.required]]
  });

  incluirProduto(): void {

    this.submitted = true;
    if(this.builderForm.invalid){
      return;
    }

    let produto: Produto = this.builderForm.value;
    this.service.postItem(produto).subscribe(() => {
      window.alert('Produto incluído com sucesso');
      this.router.navigate(['/produtos']);
    });
  }

  limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  //itens de conveniencia para a validação
  submitted: boolean = false;
  get f(){
    return this.builderForm.controls;
  }

}
