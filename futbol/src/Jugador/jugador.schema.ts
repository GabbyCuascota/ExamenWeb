
import * as Joi from 'joi';

export const APLICACION_SCHEMA=Joi.object().keys({
    numeroCamiseta: Joi.number().integer().greater(0).required(),
    nombreCamiseta: Joi.string().alphanum().min(3).max(30).required(),
    nombreCompletoJugador: Joi.string().alphanum().min(3).max(30).required(),
    poderEspecialDos: Joi.string().alphanum().min(3).max(30).required(),
    fechaIngresoEquipo: Joi.string().alphanum().min(3).max(30).required(),
    goles: Joi.string().alphanum().min(3).max(30).required(),
    equipoFutbolId: Joi.string().alphanum().min(3).max(30).required(),
});