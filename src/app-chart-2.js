import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
//
import * as chart from '@grapecity/wijmo.chart';
import { getSecondData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let pie = new chart.FlexPie('#chart-2', {
        header: '라이선스 보유 현황',
        bindingName: 'brand',
        binding: 'sales',
        selectionMode: chart.SelectionMode.Point,
        selectedItemPosition: chart.Position.Top,
        selectedItemOffset: 0.2,
        isAnimated: true,
        dataLabel: {
            content: '{sales}'
        },
        tooltip: {
            content: ''
        },
        itemsSource: getSecondData(),
        palette: ['#67D0DD', '#9FE481', '#F6E785', '#FAAFA5', '#DC95DD', '#A885EE']
    });
}
