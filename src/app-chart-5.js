import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import * as chart from '@grapecity/wijmo.chart';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getFifthData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let linechart = new chart.FlexChart('#chart-5', {
        header: 'MATLAB 평균 사용률',
        legend: {
            position: chart.Position.Bottom
        },
        chartType: chart.ChartType.Line,
        bindingX: 'month',
        series: [{
                binding: 'mean',
                name: '내 사용량'
            }, {
                binding: 'high',
                name: '평균 사용량'
            }],
        axisY: {
            title: '사용량(%)'
        },
        itemsSource: getFifthData(),
        palette: ['#001932', '#00639B', '#00ABE7']
    });
    //
    let ani = new animation.ChartAnimation(linechart);
    ani.animationMode = animation.AnimationMode.Point;
}
