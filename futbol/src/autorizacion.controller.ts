import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {error} from "util";
import {PeticionErroneaException} from "./excepciones/peticionErronea.exception";


@Controller('Autorizacion')
export class AutorizacionController{

    usuario = {
        usuario: 'gabrielacuascota',
        password: 1720437670,
    };


    @Post('iniciarSesion')
    iniciarSesion(@Req() request,
                  @Res() response, @Body("usuario") usuario:string,
                  @Body("password") password:number){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: this.usuario.usuario,
        };
        if(usuario==this.usuario.usuario&&password==this.usuario.password){
            response.cookie(parametros.nombreCookie, parametros.valorCookie);
            return response.send({
                parametros,
                mensaje: 'ok'
            })

        } else {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Los datos ingresados estan incorrectos'
                },
                10
            );
        }

    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };
        const existeCookie = request.cookies[parametros.nombreCookie];
        if (existeCookie) {
            response.cookie(parametros.nombreCookie, parametros.valorCookie)
            return response.send({
                mensaje: 'Ha salido del sistema'
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'No se encontro cookie'
                })
        }
    }
}