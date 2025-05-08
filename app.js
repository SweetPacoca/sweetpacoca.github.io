const fs = require('fs').promises;

async function lerArquivoProtegido(caminhoArquivo) {
  try {
    const conteudo = await fs.readFile(caminhoArquivo, 'utf8');
    console.log('Conteúdo do arquivo protegido:', conteudo);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
  }
}

const caminhoArquivoProtegido = 'arquivo-protegido.txt';

async function main() {
  await lerArquivoProtegido(caminhoArquivoProtegido);
}

main();