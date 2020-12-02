var re = {
  maximo: 7,
  minimo: 0,
  actual: 0,
  inicial: 2,

  aumentar: function () {
    if (this.actual < this.maximo) {
      this.actual++;
      console.log(this.actual);
    } else {
      this.actual = this.inicial;
      console.log(this.actual);
    }
  },
  disminuir: function () {
    if (this.actual > this.minimo) {
      this.actual--;
      console.log(this.actual);
    } else {
      this.actual = this.inicial;
      console.log(this.actual);
    }
  },
  restablecer: function () {
    this.actual = 0;
    console.log(this.actual);
  },
};

re.actual = re.inicial; // es opcional
re.aumentar();
re.aumentar();
re.aumentar();
re.aumentar();
re.aumentar();
re.aumentar(); //llega a 0 porque se pasa del maximo
re.disminuir();
re.disminuir(); //llega al minimo
re.disminuir(); //empieza desde el inicial
re.restablecer(); //llega al 0 que es el minimo
