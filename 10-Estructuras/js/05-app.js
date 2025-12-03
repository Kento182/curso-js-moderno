// Switch case

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'efectivo':
        pagar();
        //console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`Aun no has seleccionado un metodo de pago o tu ${metodoPago} no es soportado`);
        break;
}

const pagar = metodoPago => console.log(`Pagaste con ${metodoPago}`);