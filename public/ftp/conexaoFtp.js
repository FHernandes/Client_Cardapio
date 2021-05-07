var PromiseFtp = require('promise-ftp');
var fs = require('fs');

const host = "ftp.deliverypdv1.hospedagemdesites.ws";
const user = "deliverypdv1";
const password = "Pdvseven@12345";

var ftp = new PromiseFtp();
  ftp.connect({host: host, user: user, password: password})
  .then(function (serverMessage) {
    console.log(ftp.getConnectionStatus());
    return ftp.get('/dados/imagens/produtos/batata_606508640f1f0b3734ee9df7.jpg');
  })
  .then(function (stream) {
    return new Promise(function (resolve, reject) {
      stream.once('close', resolve);
      stream.once('error', reject);
      stream.pipe(fs.createWriteStream('../../public/img/Loja/copia1.jpg'));
    });
  })
  .then(function () {
    return ftp.end();
  });