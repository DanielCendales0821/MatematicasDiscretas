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
      arr.push({
        filas: i + 1,
        columnas: []
      })
      for (let j = 0; j < columnas; j++) {
        // aqui se llenan las columnas
        arr[i].columnas.push(Math.floor((Math.random() * (1 - 0 + 1)) + 0));
        // this.matrizArmada.push(arr);
      }
    }
    // esta es la matriz que se lista en el html
    this.matrizArmada = arr;
    console.log(this.matrizArmada);
    //tamaño vector
    this.tamanovector = `El tamaño del array es de: ${filas} x ${columnas} = ${filas * columnas}`;
  }

  numerosAleatoriosBinarios() {
    // const array = new Array(5).fill(new Array(5))
    // console.log(array)

    // const data = [];
    // data.push([{fila: 1,
    // columnas: 5},5])
    // console.log(data);
    // let decimal = 255; // Este número lo iremos convirtiendo a todas las bases

    // // Decimal a binario
    // let decimalEnBinario = decimal.toString(2); // A la base 2
    // console.log("El número decimal %s en binario es %s", decimal, decimalEnBinario);
  }
}
