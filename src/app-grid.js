import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles-grid.css';
import * as wjGrid from '@grapecity/wijmo.grid';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    //
    // generate some random data
    let countries = '3DCS,MATLAB,GreenHills,StarCCM,TaskingV5,CATIA'.split(','), data = [];
    for (let i = 0; i < 50; i++) {
        data.push({
            '#': i+1,
            제품명: countries[i % countries.length],
            AA: Math.round(Math.random() * 20000),
            BB: Math.round(Math.random() * 10000),
            CC: Math.round(Math.random() * 5000),
            DD: Math.random() * 8000,
            EE: Math.random() * 3000
        });
    }
    //
    // basic filtering
    let theGrid = new wjGrid.FlexGrid('#grid', {
        itemsSource: data,
    });
    document.getElementById('filter').addEventListener('input', function (e) {
        let filter = e.target.value.toLowerCase();
        theGrid.collectionView.filter = function (item) {
            return filter.length == 0 || item.제품명.toLowerCase().indexOf(filter) > -1;
        };
    });
    //
}
