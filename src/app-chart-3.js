import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles-chart-3.css';
import * as wjChart from '@grapecity/wijmo.chart';
import { getThirdData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    // create the chart
    let theChart = new wjChart.FlexChart('#chart-3', {
        header: '서버 상태',
        chartType: wjChart.ChartType.Line,
        bindingX: 'x',
        series: [{
                binding: 'y'
            }],
        axisX: {
            position: wjChart.Position.None
        },
        axisY: {
            min: 0,
            max: 100,
            title: 'CPU 사용량(%)'
        },
        itemsSource: getThirdData(50)
    });
    //
    // start changing the data
    function addPoints() {
        // append new points, remove old points
        let arr = theChart.collectionView.sourceCollection, pt = arr[arr.length - 1], y = (Math.random() * (90-30)) + 30;
        //
        arr.push({ x: pt.x + 1, y: y });
        arr.splice(0, 1);
        //
        // update chart
        theChart.collectionView.refresh();
        //
        // and keep updating
        setTimeout(function () {
            addPoints();
        }, 1000);
    }
    //
    addPoints();
}
