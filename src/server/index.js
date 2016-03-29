import fs from 'fs';
import express from 'express';
import env from '../env';

let app = express();

console.log( "Starting server." );

app.use( express.static( 'public' ) );

( async () => {

    try{
        app.listen( env.port, () => console.log( `Listening on port ${env.port}..` ) );
    }catch( e ){
        console.log( e );
    }

})();
