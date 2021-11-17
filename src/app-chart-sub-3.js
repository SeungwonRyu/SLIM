import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
//
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getSubThirdData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let barchart = new chart.FlexChart('#chart-sub-3', {
        header: '사용 횟수 Top 5',
        legend: {
            position: chart.Position.Bottom
        },
        bindingX: 'country',
        series: [{
            binding: '2016',
            name: '사용 횟수'
        }],
        tooltip: {
            content: ''
        },
        dataLabel: {
            content: '{y}'
        },
        itemsSource: getSubThirdData(),
        palette: ['#EC4176']
    });
    //
    let ani = new animation.ChartAnimation(barchart);
}
