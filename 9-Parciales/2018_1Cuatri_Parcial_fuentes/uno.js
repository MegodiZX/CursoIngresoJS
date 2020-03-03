/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoPersonas;
	var maximoPersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;



	respuesta="s";
	contador=0;
	acumulador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfectivo=0;
	

	while(respuesta=="s")
		{
			do
			{
				nombre=prompt("ingrese nombre");
			}
			while(!isNaN);

			cantidadDePersonas=prompt("ingrese Cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas)
			while(isNaN(cantidadDePersonas)|| cantidadDePersonas<1)//do
			{
				cantidadDePersonas=prompt("ingrese Cantidad de personas");//=
				cantidadDePersonas=parseInt(cantidadDePersonas);//=
			}
			//while(isNaN(cantidadDePersonas)|| cantidadDePersonas<1);

			do
			{
				cantidadDeDias=prompt("ingrese cantidad de dias");
				cantidadDeDias=parseInt(cantidadDeDias);
			}
			while(isNaN(cantidadDeDias)|| cantidadDeDias<1);
			
			do
			{
				formaDePago=prompt("ingrese forma de pago");
			}
			while(!isNaN(formaDePago)||formaDePago!="qr"&&formaDePago!="efectivo"&&formaDePago!="tarjeta");
			
			/*if(contador==0)
			{
				maximoPersonas=cantidadDePersonas;
				maximoPersonasNombre=nombre;
			}
			else
			{
				if(maximoPersonas>cantidadDePersonas)
				{
					maximoPersonas=cantidadDePersonas;
					maximoPersonasNombre=nombre;
				}
			}*/
			if(contador==0||maximoPersonas<cantidadDePersonas)
			{
				maximoPersonas=cantidadDePersonas;
				maximoPersonasNombre=nombre;
			}

			if(contador==0||maximoDeDias<cantidadDeDias)
			{
				maximoDeDias=cantidadDeDias;
				maximoDeDiasCantidadDePersonas=cantidadDePersonas;
			}

			switch(formaDePago)
			{
				case"efectivo":
					contadorEfectivo++
					break;
				case"tarjeta":
					contadorTarjeta++
					break;
				default:
					contadorQR++
					break;
			}

			acumulador=acumulador+cantidadDeDias
			contador++;
			respuesta=prompt("Desea continuar");
		}

		if(contadorEfectivo>contadorTarjeta&&contadorEfectivo>contadorQR)
			{
				formaDePagoMasUtilizada="efectivo";
			}else
			{
				if(contadorQR>contadorTarjeta)//&&contadorQR>contadorEfectivo) ya se pregunto
				{
					formaDePagoMasUtilizada="QR";
				}else
				{
					formaDePagoMasUtilizada="tarjeta";
				}
			}

		promedio=acumulador/contador;
		console.log("maximoPersonasNombre "+maximoPersonasNombre);
		console.log("maximoDeDiasCantidadDePersonas "+maximoDeDiasCantidadDePersonas);
		console.log(formaDePagoMasUtilizada);

		document.write("<br> Nombre del huesped con mas invitados:"+ maximoPersonasNombre);
		document.write("<br> Cantidad de personas que se quedaron mas dias:"+ maximoDeDiasCantidadDePersonas);
		document.write("<br> Forma de pago mas utilizada"+ formaDePagoMasUtilizada);
		document.write("<br> promedio:"+ promedio);

}
