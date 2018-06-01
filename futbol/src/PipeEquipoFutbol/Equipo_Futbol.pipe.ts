import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException} from "../excepciones/peticionErronea.exception";

@Injectable()
export  class SistemaoperativoPipe {
    constructor (private readonly _schema){

    }
    transform (jsonAValidar: any, metadata:ArgumentMetadata){
        const{
            error}
            =Joi.validate(jsonAValidar,this._schema)
        if (error) {
            throw new PeticionErroneaException(
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