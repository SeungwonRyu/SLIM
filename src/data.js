// best selling mobile phones brands
// https://en.wikipedia.org/wiki/List_of_best-selling_mobile_phones

// 상단 1번째 차트 데이터
export function getFirstData() {
    return [
        { country: '1주전', '사용률': 173 },
        { country: '2주전', '사용률': 103 },
        { country: '3주전', '사용률': 46 }
    ];
}

// 상단 2번째 차트 데이터
export function getSecondData() {
    return [
        { brand: '3DCS', sales: 36 },
        { brand: 'MATLAB', sales: 29 },
        { brand: 'GreenHills', sales: 18 },
        { brand: 'StarCCM', sales: 42 },
        { brand: 'TaskingV5', sales: 51 },
        { brand: 'CATIA', sales: 63 }
    ];
}

// 상단 3번쨰 차트 데이터 (서버 CPU 실시간 사용량)
export function getThirdData(cnt) {
    let arr = [], y = 0;
    //
    for (let i = 0; i < cnt; i++) {
        arr.push({ x: i, y: y });
        y = Math.random() * 100;
    }
    //
    return arr;
}

// 상단 4번째 차트 데이터 (방사형)
export function getForthData() {
    let data = [], countries = '1팀, 2팀, 3팀, 4팀, 5팀'.split(',');
    countries.forEach(function (country) {
        data.push({
            country: country,
            downloads: Math.ceil(Math.random() * 80) + 20,
            sales: Math.ceil(Math.random() * 80) + 20
        });
    });
    return data;
}

// 하단 1번째 차트 데이터 (라인 차트)
export function getFifthData() {
    return [
        { month: 'Jan', mean: 12, high: 24 },
        { month: 'Feb', mean: 14, high: 22 },
        { month: 'Mar', mean: 17, high: 21 },
        { month: 'Apr', mean: 19, high: 21 },
        { month: 'May', mean: 24, high: 19 },
        { month: 'Jun', mean: 25, high: 20 },
        { month: 'Jul', mean: 28, high: 22 },
        { month: 'Aug', mean: 29, high: 25 },
        { month: 'Sep', mean: 24, high: 28 },
        { month: 'Oct', mean: 23, high: 30 },
        { month: 'Nov', mean: 17, high: 32 },
        { month: 'Dec', mean: 15, high: 33 }
    ]
}

// 하단 2번째 차트 데이터 (누적 바 차트)
export function getSixthData() {
    return [
        {
            'year': '기술1팀',
            'US': 1734,
            'China': 1035,
            'Japan': 460,
            'Germany': 387,
            'UK': 295,
            'France': 283
        }, {
            'year': '기술2팀',
            'US': 1803,
            'China': 1118,
            'Japan': 412,
            'Germany': 336,
            'UK': 285,
            'France': 242
        }, {
            'year': '기술3팀',
            'US': 1862,
            'China': 1123,
            'Japan': 493,
            'Germany': 347,
            'UK': 262,
            'France': 246
        }
    ];
}

// 일별 페이지 1번째 차트 데이터 (영역 차트)
export function getSubFirstData(cnt) {
    let arr = [], y = [-5.2, -3.4, 1.7, 8.8, 14.6, 19.6, 22.1, 21.2, 16.6, 9.8, 4.3, -1.9, -2.8, -3.6];
    // y length == 14
    for (let i=0, j=0; i < cnt; i++, j++) {
        arr.push({ x: i, y: y[j] });

        if(i >= y.length || i%y.length == 0) {
            j = 0;
        }
    }
    return arr;
}

// 일별 페이지 2번째 차트 데이터 (도넛 차트)
export function getSubSecondData() {
    return [
        { brand: 'Samsung', sales: 321 },
        { brand: 'Apple', sales: 215 },
        { brand: 'Huawei', sales: 160 },
        { brand: 'OPPO', sales: 112 },
        { brand: 'Vivo', sales: 100 },
        { brand: 'Others', sales: 638 }
    ];
}

// 일별 페이지 3번째 차트 데이터 (막대 차트)
// list of country GDP
// https://en.wikipedia.org/wiki/List_of_IMF_ranked_countries_by_GDP
export function getSubThirdData() {
    return [
        { country: 'United States', '2014': 17348, '2015': 18036, '2016': 18624 },
        { country: 'China', '2014': 10356, '2015': 11181, '2016': 11232 },
        { country: 'Japan', '2014': 4602, '2015': 4124, '2016': 4936 },
        { country: 'Germany', '2014': 3874, '2015': 3365, '2016': 3479 },
        { country: 'United Kingdom', '2014': 2950, '2015': 2858, '2016': 2629 },
        { country: 'France', '2014': 2833, '2015': 2420, '2016': 2466 }
    ];
}





