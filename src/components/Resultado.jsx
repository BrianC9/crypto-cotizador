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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = ['PRECIO', 'MAX-DIARIO', 'MIN-DIARIO'];
const ContenedorResultado = styled.div`
  margin-top: 40px;
  width: 100%;
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
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;
function Resultado({ resultado, monedasConsulta }) {
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
  return (
    <ContenedorResultado>
      <ImgCripto src={`https://www.cryptocompare.com/${IMAGEURL}`} />
      <div style={{ width: '80%', alignSelf: 'center' }}>
        <Bar
          options={{
            color: 'white',
            responsive: true,
            backgroundColor: 'white',
            maintainAspectRatio: true,
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
                  callback: (label) =>
                    `${monedasConsulta.monedaSeleccionada} ${label}`,
                },
              },
            },

            plugins: {
              datalabels: {
                display: true,
                color: 'white',
                font: { size: '14', family: 'Lato', weight: 'bolder' },
                formatter: (value) =>
                  `${monedasConsulta.monedaSeleccionada} ${value}`,
                anchor: 'end',
                offset: -30,
                align: 'start',
              },
              title: {
                display: true,
                text: `Cotización diaria para ${monedasConsulta.criptoSeleccionada} en ${monedasConsulta.monedaSeleccionada}`,
                font: { family: 'Lato', size: '18px' },
                color: 'white',
                align: 'center',
                padding: { bottom: 50 },
              },

              legend: { display: false },
              tooltip: {
                titleFont: { family: 'Lato', size: '18px' },
              },
            },
          }}
          data={data}
        />
      </div>
    </ContenedorResultado>
  );
}

export default Resultado;
