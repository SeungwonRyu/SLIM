import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles-grid-rev-1.css';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjCore from '@grapecity/wijmo';
//
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    //
    // Companies in the Financial Times Stock Exchange 100 Index
    // https://en.wikipedia.org/wiki/FTSE_100_Index
    // mcap: market capitalization (in billion pounds)
    // emp: employees (thousands)
    var companies = [
        { symbol: 'RDSA', name: 'Royal Dutch Shell', sector: 'Oil and gas', mcap: 160.12, emp: 90 },
        { symbol: 'ULVR', name: 'Unilever', sector: 'Consumer goods', mcap: 90.42, emp: 171 },
        { symbol: 'HSBA', name: 'HSBC', sector: 'Banking', mcap: 88.11, emp: 267 },
        { symbol: 'BATS', name: 'British American Tobacco', sector: 'Tobacco', mcap: 71.4, emp: 87 },
        { symbol: 'GSK', name: 'GlaxoSmithKline', sector: 'Pharmaceuticals', mcap: 67.38, emp: 97 },
        { symbol: 'SAB', name: 'SABMiller', sector: 'Beverages', mcap: 67.32, emp: 70 },
        { symbol: 'BP', name: 'BP', sector: 'Oil and gas', mcap: 63.13, emp: 97 },
        { symbol: 'VOD', name: 'Vodafone Group', sector: 'Telecomms', mcap: 56.55, emp: 86 },
        { symbol: 'AZN', name: 'AstraZeneca', sector: 'Pharmaceuticals', mcap: 51.23, emp: 57 },
        { symbol: 'RB', name: 'Reckitt Benckiser', sector: 'Consumer goods', mcap: 46.32, emp: 32 },
        { symbol: 'DGE', name: 'Diageo', sector: 'Beverages', mcap: 46.01, emp: 25 },
        { symbol: 'BT.A', name: 'BT Group', sector: 'Telecomms', mcap: 45.61, emp: 89 },
        { symbol: 'LLOY', name: 'Lloyds Banking Group', sector: 'Banking', mcap: 44.11, emp: 120 },
        { symbol: 'BLT', name: 'BHP Billiton', sector: 'Mining', mcap: 41.88, emp: 46 },
        { symbol: 'NG', name: 'National Grid plc', sector: 'Energy', mcap: 36.14, emp: 27 },
        { symbol: 'IMB', name: 'Imperial Brands', sector: 'Tobacco', mcap: 35.78, emp: 38 },
        { symbol: 'RIO', name: 'Rio Tinto Group', sector: 'Mining', mcap: 34.84, emp: 67 },
        { symbol: 'PRU', name: 'Prudential plc', sector: 'Finance', mcap: 31.63, emp: 25 },
        { symbol: 'RBS', name: 'Royal Bank of Scotland Group', sector: 'Banking', mcap: 28.6, emp: 150 },
        { symbol: 'BARC', name: 'Barclays', sector: 'Banking', mcap: 27.18, emp: 150 },
        { symbol: 'ABF', name: 'Associated British Foods', sector: 'Food', mcap: 25.77, emp: 102 },
        { symbol: 'REL', name: 'RELX Group', sector: 'Publishing', mcap: 25.54, emp: 28 },
        { symbol: 'REX', name: 'Rexam', sector: 'Packaging', mcap: 25.54, emp: 19 },
        { symbol: 'CCL', name: 'Carnival Corporation & plc', sector: 'Leisure', mcap: 24.85, emp: 86 },
        { symbol: 'SHP', name: 'Shire plc', sector: 'Pharmaceuticals', mcap: 22.52, emp: 4 },
        { symbol: 'CPG', name: 'Compass Group', sector: 'Food', mcap: 20.21, emp: 471 },
        { symbol: 'WPP', name: 'WPP plc', sector: 'Media', mcap: 19.01, emp: 162 },
        { symbol: 'AV.', name: 'Aviva', sector: 'Insurance', mcap: 17.69, emp: 40 },
        { symbol: 'SKY', name: 'Sky plc', sector: 'Media', mcap: 17.5, emp: 22 }
    ];
    //
    // Trading Market Data
    // https://en.wikipedia.org/wiki/Market_data
    var data = [], now = new Date();
    companies.forEach(function (company) {
        var bid = randBetween(1, 100000) / 100, ask = bid + randBetween(0, 100) / 100;
        data.push({
            symbol: company.symbol,
            name: company.name,
            bid: bid,
            ask: ask,
            lastSale: bid,
            bidSize: randBetween(10, 500),
            askSize: randBetween(10, 500),
            lastSize: randBetween(10, 500),
            volume: randBetween(10000, 20000),
            quoteTime: now,
            tradeTime: now,
            askHistory: [ask, ask],
            bidHistory: [bid, bid],
            saleHistory: [bid, bid]
        });
    });
    // control panel
    var customCells = true;
    var autoUpdate = true;
    var interval = 300; // update interval in ms: 1000, 500, 100, 10, 1
    var batchSize = 5; // items to update: 100, 50, 10, 5, 1
    document.getElementById('customCells').addEventListener('click', function (e) {
        customCells = e.target.checked;
        theGrid.invalidate();
    });
    document.getElementById('autoUpdate').addEventListener('click', function (e) {
        autoUpdate = e.target.checked;
        theGrid.invalidate();
    });
    var cmbInterval = new wjInput.ComboBox('#updateInterval', {
        itemsSource: [500, 300, 100],
        selectedValue: interval,
        selectedIndexChanged: function (s, e) {
            interval = cmbInterval.selectedValue;
        }
    });
    var cmbBatchSize = new wjInput.ComboBox('#batchSize', {
        itemsSource: [10, 5, 1],
        selectedValue: batchSize,
        selectedIndexChanged: function (s, e) {
            batchSize = cmbBatchSize.selectedValue;
        }
    });
    //
    // create and bind the grid
    var theGrid = new wjGrid.FlexGrid('#grid-rev-1', {
        isReadOnly: true,
        selectionMode: 'Row',
        autoGenerateColumns: false,
        columns: [
            { binding: 'name', header: 'Name', width: 200 },
            { binding: 'bid', header: 'Bid', format: 'n2', width: 200 },
            { binding: 'ask', header: 'Ask', format: 'n2', width: 200 },
            { binding: 'lastSale', header: 'Last Sale', format: 'n2', width: 200 },
            { binding: 'bidSize', header: 'Bid Size', format: 'n0' },
            { binding: 'askSize', header: 'Ask Size', format: 'n0' },
            { binding: 'lastSize', header: 'Last Size', format: 'n0' },
            { binding: 'volume', header: 'Volume', format: 'n0' },
            { binding: 'quoteTime', header: 'Quote Time', format: 'hh:mm:ss', align: 'center' },
            { binding: 'tradeTime', header: 'Trade Time', format: 'hh:mm:ss', align: 'center' },
        ],
        itemsSource: data
    });
    theGrid.rowHeaders.columns[0].width = 80;
    //
    // cellElements object keeps track of grid's cell elements
    var clearCells = false;
    var cellElements = {};
    theGrid.updatingView.addHandler(function (s, e) {
        clearCells = true; // clear cell elements on next formatItem
    });
    //
    // formatItem hander displays cells and keeps track of cell elements
    theGrid.formatItem.addHandler(function (s, e) {
        //
        // show symbols in row headers
        if (e.panel == s.rowHeaders && e.col == 0) {
            e.cell.textContent = item = s.rows[e.row].dataItem.symbol;
        }
        //
        // regular cells
        if (e.panel == s.cells) {
            var col = s.columns[e.col], item = s.rows[e.row].dataItem;
            //
            // clear cell elements
            if (clearCells) {
                clearCells = false;
                cellElements = {};
            }
            //
            // store cell element
            if (!cellElements[item.symbol]) {
                cellElements[item.symbol] = { item: item };
            }
            cellElements[item.symbol][col.binding] = e.cell;
            //
            // custom painting
            formatCell(e.cell, item, col, false);
        }
    });
    //
    // custom cell painting
    function formatCell(cell, item, col, flare) {
        if (customCells) {
            switch (col.binding) {
                case 'bid':
                    formatDynamicCell(cell, item, col, 'bidHistory', flare);
                    break;
                case 'ask':
                    formatDynamicCell(cell, item, col, 'askHistory', flare);
                    break;
                case 'lastSale':
                    formatDynamicCell(cell, item, col, 'saleHistory', flare);
                    break;
                default:
                    cell.textContent = wjCore.Globalize.format(item[col.binding], col.format);
                    break;
            }
        }
        else {
            cell.textContent = wjCore.Globalize.format(item[col.binding], col.format);
        }
    }
    function formatDynamicCell(cell, item, col, history, flare) {
        //
        // cell template
        var html = '<div class="ticker chg-{dir} flare-{fdir}"> ' +
            '<div class="value">{value}</div >' +
            '<div class="chg">{chg}</div>' +
            '<div class="glyph"><span class="wj-glyph-{glyph}"></span></div>' +
            '<div class="spark">{spark}</div>' +
            '</div>';
        //
        // value
        html = html.replace('{value}', wjCore.Globalize.format(item[col.binding], col.format));
        //
        // % change
        var hist = item[history];
        var chg = hist.length > 1 ? hist[hist.length - 1] / hist[hist.length - 2] - 1 : 0;
        html = html.replace('{chg}', wjCore.Globalize.format(chg * 100, 'n1') + '%');
        //
        // up/down glyph
        var glyph = chg > +0.001 ? 'up' : chg < -0.001 ? 'down' : 'circle';
        html = html.replace('{glyph}', glyph);
        //
        // sparklines
        html = html.replace('{spark}', getSparklines(item[history]));
        //
        // change direction
        var dir = glyph == 'circle' ? 'none' : glyph;
        html = html.replace('{dir}', dir);
        //
        // flare direction
        var flareDir = flare ? dir : 'none';
        html = html.replace('{fdir}', flareDir);
        //
        // done
        cell.innerHTML = html;
    }
    //
    // update grid cells when items change
    function updateGrid(changedItems) {
        for (var symbol in changedItems) {
            var itemCells = cellElements[symbol];
            if (itemCells) {
                var item = itemCells.item;
                theGrid.columns.forEach(function (col) {
                    var cell = itemCells[col.binding];
                    if (cell) {
                        formatCell(cell, item, col, true);
                    }
                });
            }
        }
    }
    //
    // simulate updates/notifications
    updateTrades();
    function updateTrades() {
        var now = new Date();
        var changedItems = {};
        for (var i = 0; i < batchSize; i++) {
            //
            // select an item
            var item = data[randBetween(0, data.length - 1)];
            //
            // update current data
            item.bid = item.bid * (1 + (Math.random() * .11 - .05));
            item.ask = item.ask * (1 + (Math.random() * .11 - .05));
            item.bidSize = randBetween(10, 1000);
            item.askSize = randBetween(10, 1000);
            var sale = (item.ask + item.bid) / 2;
            item.lastSale = sale;
            item.lastSize = Math.floor((item.askSize + item.bidSize) / 2);
            item.quoteTime = now;
            item.tradeTime = new Date(Date.now() + randBetween(0, 60000));
            //
            // update history data
            addHistory(item.askHistory, item.ask);
            addHistory(item.bidHistory, item.bid);
            addHistory(item.saleHistory, item.lastSale);
            //
            // keep track of changed items
            changedItems[item.symbol] = true;
        }
        //
        // update the grid
        if (autoUpdate) {
            updateGrid(changedItems);
        }
        //
        // and schedule the next batch
        setTimeout(updateTrades, interval);
    }
}
;
//
// add a value to a history array
function addHistory(array, data) {
    array.push(data);
    if (array.length > 10) { // limit history length
        array.splice(0, 1);
    }
}
//
// get a random number within a given interval
function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//
// generate sparklines as SVG
function getSparklines(data) {
    var svg = '', min = Math.min.apply(Math, data), max = Math.max.apply(Math, data), x1 = 0, y1 = scaleY(data[0], min, max);
    for (var i = 1; i < data.length; i++) {
        var x2 = Math.round((i) / (data.length - 1) * 100);
        var y2 = scaleY(data[i], min, max);
        svg += '<line x1=' + x1 + '% y1=' + y1 + '% x2=' + x2 + '% y2=' + y2 + '% />';
        x1 = x2;
        y1 = y2;
    }
    return '<svg><g>' + svg + '</g></svg>';
}
function scaleY(value, min, max) {
    return max > min
        ? 100 - Math.round((value - min) / (max - min) * 100)
        : 0;
}
