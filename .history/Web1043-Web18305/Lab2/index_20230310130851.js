var a = prompt("Nhập a");
var b = prompt("Nhập b");
var c = prompt("Nhập c");

if (a == 0) {
  if (b == 0) {
    if (c == 0) {
      document.write("phuong trinh vo so nghiem");
    } else {
      document.write("phuong trinh vo nghiem");
    }
  } else {
    var x = -parseInt(c) / parseInt(b);
    document.write("phuong trinh co nghiem duy nhat la " + x);
  }
} else {
  var delta = parseInt(b) * parseInt(b) - 4 * parseInt(a) * parseInt(c);
  if (delta < 0) {
    document.write("phuong trinh vo nghiem");
  } else if (delta == 0) {
    var x = -parseInt(b) / (2 * parseInt(a));
  } else {
    var x1 = (-parseInt(b) + Math.sqrt(delta)) / (2 * parseInt(a));
    var x2 = (-parseInt(b) - Math.sqrt(delta)) / (2 * parseInt(a));

    document.write(
      "phuong trinh co 2 nghiem la " + parseFloat(x1) + " " + parseFloat(x2)
    );
  }
}
