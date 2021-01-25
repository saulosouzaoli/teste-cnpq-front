
    import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tipoContato'
})
export class TipoContatoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value)
            return value;
        switch(value){

            case 1:return "Email";
            case 2:return "Telefone Residencial";
            case 3:return "Celular";
            case 4:return "WhatsApp";
            case 5:return "Telegram";
            case 6:return "Facebook";
            case 7:return "Twitter";
            case 8:return "Instagram";

        }
        return value;
    }

}
