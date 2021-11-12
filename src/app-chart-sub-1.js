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
        bindingX: 'x',
        series: [{
            binding: 'y'
        }],
        axisY: {
            minorGrid: false,
            majorGrid: false
        },
        axisX: {

        },
        itemsSource: getSubFirstData(50),
        palette: ['#394F6B']
    });
    //
    let ani = new animation.ChartAnimation(linechart);
    ani.animationMode = animation.AnimationMode.Point;

    function addPoints() {
        // append new points, remove old points
        let arr = theChart.collectionView.sourceCollection,
            pt = arr[arr.length - 1],
            y = Math.random() * 100;

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
