import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException1} from "../excepciones/peticionErronea.exception1";


@Injectable()
export class JugadorPipe{

    constructor (private readonly _schema){

    }
    transform (jsonAValidar:any, metadata:ArgumentMetadata){
        const{
            error}
            =Joi.validate(jsonAValidar,this._schema)
        if (error) {
            throw new PeticionErroneaException1(
                {
                    erorr: error,
                    mensaje: 'Json no valido'
                },
                10
            );
        } else {
            return jsonAValidar;
        }
    }
}