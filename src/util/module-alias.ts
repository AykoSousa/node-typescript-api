// Configuração para facilitar acesso quando estiver em outros arquivos
import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');
moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
})