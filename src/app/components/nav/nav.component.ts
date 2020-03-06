import { Component, OnInit } from '@angular/core';



interface iItem{

  label:string;
  rota:string;
  ativo:boolean;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  itens:iItem[]=[
    {
      ativo:true,
      label:"Home",
      rota:"/home",
    },
    {
      ativo:false,
      label:"Contato",
      rota:"/contato",
    },
    {
      ativo:false,
      label:"Sobre",
      rota:"/sobre",
    },
    {
      ativo:false,
      label:"CadastrarProduto",
      rota:"/novoProduto"
    }

  ]

  // mudar(item){
  //   this.itens.forEach(element => {
  //     if(element==item){
  //       element.ativo=true
  //     }
  //     else{element.ativo=false}
  //   });
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
