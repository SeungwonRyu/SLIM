import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getRevFirstData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let linechart = new chart.FlexChart('#chart-rev-1', {
        legend: {
            position: chart.Position.Bottom
        },
        chartType: chart.ChartType.Line,
        bindingX: 'month',
        series: [{
            binding: 'mean',
            name: '내 자산'
        }, {
            binding: 'high',
            name: '자산 평균'
        }],
        axisY: {
            minorGrid: false,
            majorGrid: false,
        },
        itemsSource: getRevFirstData(),
        palette: ['#AC124A', '#151755']
    });
    //
    let ani = new animation.ChartAnimation(linechart);
    ani.animationMode = animation.AnimationMode.Point;
}
