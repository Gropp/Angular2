// objeto PROXY_CONFIG - redireciona tudo que for de requisicao para a porta 8080
// tem que configurar o package.json para ele reconhecer o proxy
const PROXY_CONFIG = [
    {
        context: ['/api/character'],
        target: 'https://rickandmortyapi.com/',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;