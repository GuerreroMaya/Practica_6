const fs = require('fs');

const argv = require('minimist')(process.argv.slice(2));

if (argv._[0] === 'add') {
  const data = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));
  const newKoder = {
    name: argv._[1]
  };
  data.push(newKoder);
  fs.writeFileSync('koders.json', JSON.stringify(data));
  console.log('Koder agregado exitosamente');

} else if (argv._[0] === 'ls') {
  const data = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));
  console.table(data);

} else if (argv._[0] === 'rm') {
  const data = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));
  const index = data.findIndex(koder => koder.name === argv._[1]);
  if (index!== -1) {
    data.splice(index, 1);
    fs.writeFileSync('koders.json', JSON.stringify(data));
    console.log('Koder borrado exitosamente');
  } else {
    console.log('Koder no encontrado');
  }

} else if (argv._[0] === 'reset') {
  fs.writeFileSync('koders.json', '[]');
  console.log('Todos los koders han sido borrados con exito');

} else {
  console.log('Comando Inválido');

}