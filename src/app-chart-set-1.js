import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles-chart-set-1.css';
import { isArray } from '@grapecity/wijmo';
import { Palettes } from '@grapecity/wijmo.chart';
import { TreeMap } from '@grapecity/wijmo.chart.hierarchical';
import { getData } from './data-treemap';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let treemap = new TreeMap('#chart-set-1', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });
    treemap.palette = ['#C06095', '#B63082', '#8512A1', '#4D0D80', '#2F0E53'];
}

