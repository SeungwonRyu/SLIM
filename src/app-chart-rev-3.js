import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import * as chart from '@grapecity/wijmo.chart';
import { getRevThirdData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    // create the chart
    let theChart = new chart.FlexChart('#chart-rev-3', {
        chartType: 'Scatter',
        axisY: {
            axisLine: true
        },
        series: [{
            name: 'Series',
            itemsSource: getRevThirdData(120, -100, 24),
            bindingX: 'x',
            binding: 'y'
        }],
        itemFormatter: (engine, ht, defaultRenderer) => {
            if (ht.x < 0) {
                engine.stroke = '#D94B58'
                engine.fill = '#C0424E';
            }
            defaultRenderer();
        },
        palette: ['#044855']
    });
}
