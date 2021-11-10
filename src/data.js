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

