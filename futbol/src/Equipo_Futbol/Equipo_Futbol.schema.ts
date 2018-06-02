import * as Joi from 'joi';

export const Equipo_Futbol_schema = Joi.object().keys({
    nombre: Joi.string().alphanum().min(3).max(30).required(),
    liga:Joi.string().alphanum().min(3).max(30).required(),
    fechaCreacion:  Joi.string().alphanum().required(),
    numeroCopasInternacionales: Joi.number().integer().greater(0).required(),
    campeonActual: Joi.boolean().required(),
});