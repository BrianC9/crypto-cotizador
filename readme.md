# Cotizador de criptomonedas mediante una API

Comprueba el precio de una criptomoneda, seleccionando el tipo de moneda y criptomoneda para los que te interesa ver su cotizaci贸n

### [Desplegado con Netlify 馃憟馃憟馃憟](https://remarkable-tulumba-367cab.netlify.app/)

Con este proyecto lo que se pretende entender es el uso de una llamada as铆ncrona a un API externa mediante el uso de un formulario para seleccionar: 1. La moneda oficial en la que deseamos ver su precio (USD, USX, EUR, etc). 2. La criptomoneda (BTC, ETH, SOL, etc) de la cual quieres conocer el precio actual, maximo diario, semanal.
Como herramienta adicional, utilizar茅 styled components para el dise帽o de la UI y la librer铆a ChartJS para la representaci贸n de resultados.

## Retos y funcionalidades a tener en cuenta

- Uso de styled components para la UI.
- Criptomonedas y monedas seleccionables, cargadas desde la API.
- Llamada a una API externa, mediante el uso de fetch as铆cnrono.
- Representaci贸n de la respuesta obtenida, en nuestra llamada a la API
- Gesti贸n del asincronismo y posibles errores en la comunicaci贸n con el servicio de la API
- Spinner para avisar al usuario que estamos procesando la petici贸n
- Gr谩fica para representar el precio actual, el maximo diario y el m铆nimo diario

## Referencias

- [Curso de React por Juan Pablo de la Torre ](https://linkedin.com/in/juanpablodelatorre)
- [Readme.so ](https://readme.so/) : Para la creaci贸n de este Readme

## Stack tecnol贸gico

- React
- Vite
- Styled components
- Netlify
- ChartJS
