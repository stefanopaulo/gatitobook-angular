import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {

  formularioAnimal !: FormGroup;
  file !: File;
  preview !: string;
  percentualConcluido = 0;

  constructor() { }

  ngOnInit(): void {
  }

  upload() {}

  gravaArquivo(arquivo: any) {

  }

}
