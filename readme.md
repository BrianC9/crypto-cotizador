# Cotizador de criptomonedas mediante una API

Comprueba el precio de una criptomoneda, seleccionando el tipo de moneda y criptomoneda para los que te interesa ver su cotización

<!-- ### [Desplegado con Vercel 👈👈👈](https://control-presupuesto-kappa.vercel.app/) -->

Con este proyecto lo que se pretende entender es el uso de una llamada asíncrona a un API externa mediante el uso de un formulario para seleccionar: 1. La moneda oficial en la que deseamos ver su precio (USD, USX, EUR, etc). 2. La criptomoneda (BTC, ETH, SOL, etc) de la cual quieres conocer el precio actual, maximo diario, semanal.
Como herramienta adicional, utilizaré styled components para el diseño de la UI y la librería ChartJS para la representación de resultados.

## Retos y funcionalidades a tener en cuenta

- Uso de styled components para la UI.
- Criptomonedas y monedas seleccionables, cargadas desde la API.
- Llamada a una API externa, mediante el uso de fetch asícnrono.
- Representación de la respuesta obtenida, en nuestra llamada a la API
- Gestión del asincronismo y posibles errores en la comunicación con el servicio de la API
- Gráfica para representar el precio actual, el maximo diario y el mínimo diario

## Referencias

- [Curso de React por Juan Pablo de la Torre ](https://linkedin.com/in/juanpablodelatorre)
- [Readme.so ](https://readme.so/) : Para la creación de este Readme

## Stack tecnológico

- React
- Vite
- Styled components
- Vercel
- ChartJS
