function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var contadorTemperaturaPar;//a
	var bandera;//b
	var productoMasPesado;//b
	var marcaProductoMasPesado;//b
	var productoConservadoBajoCero;//c
	var pesoTotal;//d
	var cantidadPesoIngresado;//d
	var pesoPromedioTotal;//d
	var pesoMaximo;//f
	var pesoMinimo;//f

	contadorTemperaturaPar=0;
	bandera=true;
	productoConservadoBajoCero=0;
	pesoTotal=0;
	cantidadPesoIngresado=0;
	pesoMaximo=0;
	pesoMinimo=0;

	respuesta="si";

	while(respuesta=="si")
	{
		marca=prompt("ingrese marca");

		do
		{
			peso=prompt("ingrese peso");
			peso=parseInt(peso);
		}while(isNaN(peso)||peso<1||peso>100);

		do
		{
			temperatura=prompt("ingrese temperatura");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura)||temperatura>30||temperatura<-30);

		if(temperatura%2==0)//a)
		{
			contadorTemperaturaPar=temperatura+contadorTemperaturaPar;
		}
		if(bandera==true||peso>productoMasPesado)//b)
		{
			productoMasPesado=peso;
			marcaProductoMasPesado=marca;
		}
		if(temperatura<0)//c)
		{
			productoConservadoBajoCero=productoConservadoBajoCero+1;
		}
		if(bandera==true)//f)
		{
			pesoMaximo=peso;
			pesoMinimo=peso;
		}else
		{
			if(pesoMaximo<peso)
			{
				pesoMaximo=peso;
			}
			if(pesoMinimo>peso)
			{
				pesoMinimo=peso;
			}
		}

		bandera=false;//b & f
		pesoTotal=peso+pesoTotal;//d
		cantidadPesoIngresado=cantidadPesoIngresado+1;//d
		respuesta=prompt("ingrese 'si' para continuar, de lo contrario se mostraran los resultados.");
	}
	pesoPromedioTotal=pesoTotal/cantidadPesoIngresado;//d)
	document.write("suma de temperatura par: "+contadorTemperaturaPar+"<br> Marca del producto mas pesado: "+marcaProductoMasPesado+"<br> Producto(s) conservado(s) bajo cero: "+productoConservadoBajoCero+"<br> Promedio del peso de todos los Productos: "+pesoPromedioTotal+ "<br>Peso Minimo: "+pesoMinimo+"<br>Peso Maximo"+pesoMaximo);
}
