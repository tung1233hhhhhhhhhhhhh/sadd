var a = prompt("Nhap a:");
var a = parseInt(a);
var b = prompt("Nhap b:");
var b = parseInt(b);
var c = prompt("Nhap c:");
var c = parseInt(c);

var A = a + b;
var B = b + c;
var C = a + c;

if (A == B || A == C || C == B) {
  document.write("tam giac can:");
}
