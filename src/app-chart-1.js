import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
//
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getFirstData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let barchart = new chart.FlexChart('#chart-1', {
        header: '3DCS 사용률',
        legend: {
            position: chart.Position.Bottom
        },
        bindingX: 'country',
        series: [
            {
                binding: '사용률',
                name: '사용률'
            }
        ],
        selectionMode: chart.SelectionMode.Point,
        itemsSource: getFirstData(),
        palette: ['#1FA2A5']
    });
    //
    let ani = new animation.ChartAnimation(barchart);
}
