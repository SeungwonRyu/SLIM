import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
//
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getSixthData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let barchart = new chart.FlexChart('#chart-6', {
        header: '부서별 보유 현황',
        chartType: chart.ChartType.Bar,
        legend: {
            position: chart.Position.Bottom
        },
        bindingX: 'year',
        series: [{
            binding: 'US',
            name: '3DCS'
        }, {
            binding: 'China',
            name: 'MATLAB'
        }, {
            binding: 'Japan',
            name: 'GreenHills'
        }, {
            binding: 'Germany',
            name: 'StarCCM'
        }, {
            binding: 'UK',
            name: 'TaskingV5'
        }, {
            binding: 'France',
            name: 'CATIA'
        }],
        stacking: chart.Stacking.Stacked,
        axisY: {
            reversed: true
        },
        itemsSource: getSixthData(),
        palette: ['#034EA2', '#303A99', '#5E2390', '#8B0D88', '#C00384', '#F10080']
    });
    //
    let ani = new animation.ChartAnimation(barchart);
}
