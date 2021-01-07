import { ProdutosService } from 'src/app/services/produtos.service';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy} from '@angular/core';

import { Comentario } from '../../../models/Comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  Comentarios: Comentario[] = [];

  inscricaoParametrosPai: Subscription;
  public ComentarioFavorito = new Subject<Comentario>();

  constructor(private route: ActivatedRoute, private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
    this.inscricaoParametrosPai = this.route.parent.params.subscribe((params) => {
      this.Comentarios = this.ProdutosService.getComentariosProduto(parseInt(params.id));
      });
  }

  SubjectMethod(Comentario: Comentario){
    this.ProdutosService.setComentarioFavorito(Comentario);
  }

  ngOnDestroy(){
    this.inscricaoParametrosPai.unsubscribe;
  }

}
