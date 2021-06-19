import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produtos-alteracao',
  templateUrl: './produtos-alteracao.component.html',
  styleUrls: ['./produtos-alteracao.component.css']
})
export class ProdutosAlteracaoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProdutosService,
    private route: ActivatedRoute
  ) { }

  produto!: Produto;

  //usando o componente FormBuilder

  builderForm = this.fb.group({
    _id: [''],
    __v: [''],
    codigo: ['', [Validators.required, Validators.min(1)]],
    descricao: ['', [Validators.required, Validators.minLength(3)]],
    unidade: ['', [Validators.minLength(2), Validators.maxLength(5)]],
    preco: ['', [Validators.min(1)]],
    categoria: ['', [Validators.required]]
  });

  ngOnInit(): void {



    //ActivateRoute: fornece informações sobre a rota (parâmetros)
    let id = this.route.snapshot.paramMap.get('id') as string;

    //buscando o produto com o id informado na rota
    this.service.getItem(id)
      .subscribe(res => {
        this.produto = res
        this.builderForm.patchValue(this.produto)
      });
  }

  alterarProduto(): void {
    if (this.submitted) {
      return;
    }
    this.produto = this.builderForm.value;
    this.service.putItem(this.produto, this.produto._id as string).subscribe(
      () => {
        window.alert('Produto alterado');
        this.router.navigate(['/produtos']);
      });
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

  limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  //itens de conveniencia para a validação
  submitted: boolean = false;
  get f() {
    return this.builderForm.controls;
  }


}
