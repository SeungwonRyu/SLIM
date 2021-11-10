import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import * as chart from '@grapecity/wijmo.chart';
import * as radar from '@grapecity/wijmo.chart.radar';
import * as animation from '@grapecity/wijmo.chart.animation';
import { getForthData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let r = new radar.FlexRadar('#chart-4', {
        header: '부서별 MATLAB 사용 현황',
        palette: ['#a455ff'],
        bindingX: 'country',
        series: [
            { binding: 'sales' }
        ],
        axisY: {
            min: 0,
            max: 100
        }
    });
    r.chartType = radar.RadarChartType.Area;
    let ani = new animation.ChartAnimation(r, {
        animationMode: animation.AnimationMode.Series,
        easing: animation.Easing.Linear,
        duration: 500
    });
    //
    setTimeout(function () {
        r.itemsSource = getForthData();
    }, 200);
}
