var cashRegister = {
  total: 0,
  add: function(itemCost) {
    this.total += itemCost;
  },
  scan: function(item) {
    switch (item) {
      case "eggs":
        this.add(0.98);
        break;
      case "milk":
        this.add(1.23);
        break;
      case "magazine":
        this.add(4.99);
        break;
      case "chocolate":
        this.add(0.45);
        break;
    }
  }
};

cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
console.log(cashRegister);
