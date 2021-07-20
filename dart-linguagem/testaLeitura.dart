// importing dart:io file
import 'dart:io';

void main() {
  print("Qual o seu nome?");
  String? name = stdin.readLineSync();

  // Printing the name
  print("Olá, $name! \nBem vindo!!");
}
