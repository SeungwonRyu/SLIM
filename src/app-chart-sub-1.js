import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getSubFirstData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let linechart = new chart.FlexChart('#chart-sub-1', {
        legend: {
            position: chart.Position.None
        },
        chartType: chart.ChartType.Area,
        bindingX: 'Date',
        series: [{
            binding: 'MeanTemp'
        }],
        axisY: {
            minorGrid: false,
            majorGrid: false,
        },
        axisX: {

        },
        itemsSource: getSubFirstData(),
        palette: ['#394F6B']
    });
    //
    let ani = new animation.ChartAnimation(linechart);
    ani.animationMode = animation.AnimationMode.Point;
}
