import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException1} from "../excepciones/peticionErronea.exception1";
import {PeticionErroneaException} from "../excepciones/peticionErronea.exception";


@Injectable()
export class JugadorPipe {

    constructor(private readonly _schema) {

    }

    transform(jsonAValidar: any, metadata: ArgumentMetadata) {
        const {
            error
        }
            = Joi.validate(jsonAValidar, this._schema);
        const {
            errorNotFound
        }
            = Joi.validate(jsonAValidar, this._schema);
        if (error) {
            throw new PeticionErroneaException(
                'Petición Inválida',
                error,
                10)
        }
        if (errorNotFound) {
            throw  new PeticionErroneaException1(
                'No encontrado',
                errorNotFound,
                10
            )
        }
        else {
            return jsonAValidar;
        }
    }
}