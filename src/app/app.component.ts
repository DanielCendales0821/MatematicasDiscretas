import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MatrizVector {
  filas: number;
  columnas: [];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MatematicaDiscreta';
  public tamanovector: string;
  public formGroup: FormGroup;
  public matrizArmada: Array<any>;
  public primeraParte: any;
  public relacionVertical: any[];
  public diagonal: any = [];
  public vertical: any = [];
  constructor(private readonly formBuilder: FormBuilder) {
    this.tamanovector = `El tamaño del array es de:`;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      filas: ['', Validators.required],
      columnas: ['', Validators.required]
    });
  }

  capturarValores() {
    const filas = this.formGroup.value.filas;
    const columnas = this.formGroup.value.columnas;
    this.crearMatriz(filas, columnas);
  }

  crearMatriz(filas, columnas) {
    let arr = new Array<any>();
    for (let i = 0; i < filas; i++) {
      // aqui se llenan las filas
      arr.push({ filas: i + 1, columnas: [] })
      for (let j = 0; j < columnas; j++) {
        // aqui se llenan las columnas
        arr[i].columnas.push(Math.floor((Math.random() * (1 - 0 + 1)) + 0));
        // this.matrizArmada.push(arr);
      }
    }
    // esta es la matriz que se lista en el html
    this.matrizArmada = arr;
    //tamaño vector
    this.tamanovector = `El tamaño del array es de: ${filas} x ${columnas} = ${filas * columnas}`;
  }
  public relaciones() {
    this.verificarRelacionVertical();
    this.verificarRelacionDiagonal();
  }

  verificarRelacionDiagonal() {
    this.diagonal = [];
    for (let i = 0; i < this.matrizArmada.length; i++) {
      const element = this.matrizArmada[i].filas - 1;
      const data = this.matrizArmada[i].columnas[element];
      this.diagonal.push(data);
    }
  }

  verificarRelacionVertical() {
    this.vertical = [];
    for (let i = 0; i < this.matrizArmada.length; i++) {
      const data = this.matrizArmada[i].columnas[0];
      this.vertical.push(data);
    }

  }

  returnValueRelacionDiagonal() {
    return JSON.stringify(this.diagonal);
  }
  returnValueRelacionVertical() {
    return JSON.stringify(this.vertical);
  }

}
