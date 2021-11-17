import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles-chart-rev-2.css';
import * as chart from '@grapecity/wijmo.chart';
import { getRevSecondData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    // create the chart
    let theChart = new chart.FlexChart('#chart-rev-2', {
        itemsSource: getRevSecondData(),
        bindingX: 'date',
        chartType: 'Candlestick',
        series: [
            { binding: 'high,low,open,close', name: 'Box Inc' }
        ],
        legend: {
            position: 'None'
        },
        tooltip: {
            content: '<b>{date:MMM dd}</b><br/>' +
                '<table>' +
                '<tr><td>high</td><td>{high:c}</td><tr/>' +
                '<tr><td>low</td><td>{low:c}</td><tr/>' +
                '<tr><td>open</td><td>{open:c}</td><tr/>' +
                '<tr><td>close</td><td>{close:c}</td><tr/>' +
                '</table>'
        }
    });
    theChart.palette = ['rgba(149, 194, 43, 1)'];
}
