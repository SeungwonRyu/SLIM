import * as core from '@grapecity/wijmo';
export function getData() {
    let data = [];
    for (let i = 0; i < 1000; i++) {
        let catIndex = Math.floor(Math.random() * categories.length)
        let subCategory = subCategories[catIndex]
        let subIndex = Math.floor(Math.random() * subCategory.length);
        data.push({
            category: categories[catIndex],
            subCategory: subCategory[subIndex],
            sales: getSales()
        });
    }
    let cv = new core.CollectionView(data);
    cv.groupDescriptions.push(new core.PropertyGroupDescription('category'));
    cv.groupDescriptions.push(new core.PropertyGroupDescription('subCategory'));
    return cv;
}
// generate data for the sample
let categories = ['기술1팀', '기술2팀', '기술3팀', '영업팀', '마케팅팀'];
let subCategories = [
    ['김AA', '정BB', '이CC', '박DD'],
    ['이AA', '최BB', '박CC', '김DD', '정EE'],
    ['박AA', '이BB', '최CC'],
    ['최AA', '박BB', '김CC', '이DD'],
    ['정AA', '김BB', '박CC', '최DD', '이EE']
];
function getSales() {
    return Math.round(Math.random() * 100);
}