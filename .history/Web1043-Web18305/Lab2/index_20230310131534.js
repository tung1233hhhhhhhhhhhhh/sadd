var a = prompt("Nhập a");
var a = parseInt(a);
var b = prompt("Nhập b");
var b = parseInt(b);
var c = prompt("Nhập c");
var c = parseInt(c);

if (a == 0) {
  if (b == 0) {
    if (c == 0) {
      document.write("phuong trinh vo so nghiem");
    } else {
      document.write("phuong trinh vo nghiem");
    }
  } else {
    var x = -c / b;
    document.write("phuong trinh co nghiem duy nhat la " + x);
  }
} else {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("phuong trinh vo nghiem");
  } else if (delta == 0) {
    var x = -b / (2 * a);
  } else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.write(
      "phuong trinh co 2 nghiem la " + x1.toFixed(2) + " " + x2.toFixed(2)
    );
  }
}
