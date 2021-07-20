// ignore: avoid_relative_lib_imports
import '../lib/contacorrente.dart';
// ignore: avoid_relative_lib_imports
import '../lib/cliente.dart';

void main() {
  // ignore: omit_local_variable_types
  ContaCorrente conta1 = ContaCorrente(-555, 12345678);

  // ignore: omit_local_variable_types
  ContaCorrente conta2 = ContaCorrente(234, 78890);

  // ignore: omit_local_variable_types
  Cliente cliente = Cliente();
  cliente.nome = 'André Oliveira Cunha';
  cliente.cpf = '123.456.789-00';
  cliente.profissao = 'Estagiário Scuba Team';

  // ignore: omit_local_variable_types
  Cliente andre = Cliente()
    ..nome = 'Andre'
    ..cpf = '12345678900'
    ..profissao = 'Estudante';

  conta2.titular = andre;
  conta1.titular = cliente;
  // print(conta1.titular.cpf);
  // print(conta2.titular.cpf);
  // print(conta1.agencia);

  print(ContaCorrente.totalDeContasCorrentes);
}
