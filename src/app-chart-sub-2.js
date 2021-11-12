import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
//
import * as core from '@grapecity/wijmo';
import * as chart from '@grapecity/wijmo.chart';
import { getSubSecondData } from './data';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    let data = getSubSecondData();
    let sum = data.map(c => c.sales).reduce((sum, cur) => sum + cur);
    let donut = new chart.FlexPie('#chart-sub-2', {
        header: '점유율',
        bindingName: 'brand',
        innerRadius: 0.5,
        binding: 'sales',
        dataLabel: {
            position: chart.PieLabelPosition.Outside,
            content: (ht) => {
                return `${ht.name} ${core.Globalize.format(ht.value / sum, 'p1')}`;
            }
        },

        itemsSource: data,
        palette: ['#0B1354', '#165BAA', '#A155B9', '#F765A3', '#FFA4B6', '#F9D1D1']
    });
}
