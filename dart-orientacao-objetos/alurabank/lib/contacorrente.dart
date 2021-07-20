import 'cliente.dart';

class ContaCorrente {
  ContaCorrente(int novaAgencia, this.conta) {
    if (novaAgencia > 0) {
      _agencia = novaAgencia;
    }
    totalDeContasCorrentes++;
  }

  static int totalDeContasCorrentes = 0;

  late Cliente titular;
  int _agencia = 0;
  int get agencia => _agencia;
  set agencia(int agencia) => {_agencia = agencia};

  int conta = 0;
  double _saldo = 0.0;

  double get saldo {
    return _saldo;
  }

  set saldo(double novoSaldo) {
    if (novoSaldo >= -100) {
      _saldo = novoSaldo;
    } else {
      print('Erro');
    }
  }

  void saque(double valorDoSaque) {
    if (saldo - valorDoSaque < -100) {
      print('Sem saldo suficiente');
    } else {
      print('Sacando $valorDoSaque reais');
      saldo -= valorDoSaque;
    }
  }

  void deposito(double valorDoDeposito) {
    saldo += valorDoDeposito;
  }
}
