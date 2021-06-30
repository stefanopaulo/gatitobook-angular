import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalheAnimalComponent, ComentariosComponent, NovoAnimalComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimaisModule { }
