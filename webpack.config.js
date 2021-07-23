const path = require( 'path' );
module.exports = {

// utile pour le débogage des sources TypeScript
    devtool: 'source-map',
// mode production pour la minification
    mode: 'production',
// fichier d'entrée (partie web)
    entry: './src/web/index.ts',
// répertoire de sortie
// ici /public
// le fichier en sortie s'appelera main.js
    output: {
        path: path.resolve( __dirname, 'public' ),
        filename: 'main.js',
    },
// résolution des fichiers
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
// loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
// configuration du serveur de développement
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        watchContentBase: true
    },
};