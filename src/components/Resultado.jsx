import styled from '@emotion/styled';
import currency from 'currency.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['PRECIO', 'MAX-DIARIO', 'MIN-DIARIO'];
const ContenedorResultado = styled.div`
  margin-top: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: white;
  font-family: 'Lato';
`;
const ImgCripto = styled.img`
  width: 120px;
  max-width: 120px;
  display: block;
`;
function Resultado({ resultado, monedasConsulta }) {
  console.log(resultado);
  const { PRICE, HIGHDAY, LOWDAY, IMAGEURL } = resultado;
  const data = {
    labels,
    datasets: [
      {
        data: [
          currency(PRICE).value,
          currency(HIGHDAY).value,
          currency(LOWDAY).value,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgba(75, 192, 192)',
          'rgba(255, 99, 132,)',
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log('Precio', currency(PRICE));
  return (
    <ContenedorResultado>
      <ImgCripto src={`https://www.cryptocompare.com/${IMAGEURL}`} />
      <div style={{ width: '60%' }}>
        <Bar
          options={{
            color: 'white',
            responsive: true,
            backgroundColor: 'white',
            font: { family: 'Lato' },
            scales: {
              x: {
                grid: { color: 'rgb(164, 167, 167,.2)' },
                ticks: {
                  color: 'white',
                  font: { family: 'Lato', size: '16px' },
                },
              },
              y: {
                grid: { color: 'rgb(164, 167, 167,.2)' },
                ticks: {
                  color: 'white',
                  font: { family: 'Lato', size: '16px' },
                  padding: 8,
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: `Cotización diaria para ${monedasConsulta.criptoSeleccionada} en ${monedasConsulta.monedaSeleccionada}`,
                font: { family: 'Lato', size: '18px' },
                color: 'white',
                align: 'center',
                padding: { bottom: 30 },
              },

              legend: { display: false },
              tooltip: { titleFont: { family: 'Lato', size: '18px' } },
            },
          }}
          data={data}
        />
      </div>
    </ContenedorResultado>
  );
}

export default Resultado;
