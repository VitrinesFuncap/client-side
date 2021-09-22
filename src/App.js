import logo from './logo.svg';
import './App.css';

import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "left", paddingLeft: "50px" }}>Inovação Empresarial 2019</h1>
      <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width={400}
          height={300}
          chartType="ColumnChart"
          loader={<div> Carregando Chart </div>}
          data={[
            ['Programa', 'Investimentos Funcap', 'Investimento Total'],
            ['Inovafit 05/2016', 431715.70, 474827.81],
            ['Inovafit 04/2018', 2411781.48, 2714349.89],
            ['Inovafit 08/2018', 1647225.36, 1838127.88],
            ['Conecta  Funcap - Cegás', 147000.00, 447000.00],
          ]}
          options={{
            title: 'Aumento do valor do investimento com Contrapartida',
            chartArea: { width: '30%' },
            hAxis: {
              title: 'Investimento Total',
              minValue: 0,
            },
            vAxis: {
              title: 'Investimentos em R$',
            },
          }}
          legendToggle
        />
        <Chart
          width={400}
          height={'300px'}
          chartType="AreaChart"
          loader={<div> Carregando Chart </div>}
          data={[
            ['Ano', 'Bolsistas', 'Empresas'],
            ['2016', 25, 22],
            ['2018', 53, 42],
          ]}
          options={{
            title: 'Total de Beneficiados',
            hAxis: { title: 'Ano', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '50%', height: '70%' },
            // lineWidth: 25
          }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Chart
          width={400}
          height={'300px'}
          chartType="BubbleChart"
          loader={<div> Carregando Chart </div>}
          data={[
            ['ID', 'Investimento Funcap', 'Investimento Total'],
            ['Inovafit 05/2016', 431715.70, 474827.81],
            ['Inovafit 04/2018', 2411781.48, 2714349.89],
            ['Inovafit 08/2018', 1647225.36, 1838127.88],
            ['Conecta  Funcap - Cegás', 147000.00, 1838127.88],
          ]}
          options={{
            title:
              "Correlação entre o investimento funcap com o investimento total",
            hAxis: { title: 'Investimento Funcap' },
            vAxis: { title: 'Investimento Total' },
            bubble: { textStyle: { fontSize: 11 } },
          }}
        />
        <Chart
          width={'600px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Ano', 'Investimento FUNCAP'],
            [2016, 431715.70],
            [2018, 2411781.48 + 1647225.36],
          ]}
          options={{
            hAxis: {
              title: 'Ano',
            },
            vAxis: {
              title: 'R$',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Programa', 'Investimentos Funcap'],
            ['Inovafit 05/2016', 431715.70],
            ['Inovafit 04/2018', 2411781.48],
            ['Inovafit 08/2018', 1647225.36],
            ['Conecta  Funcap - Cegás', 147000.00],
          ]}
          options={{
            title: 'Investimentos',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>

      <h1 style={{ textAlign: "left", paddingLeft: "50px" }}>Regiões de atuação</h1>
      <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="GeoChart"
          data={[
            ['País', 'Atuação'],
            ['Brazil', 100],
          ]}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}

export default App;
