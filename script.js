// 페이지 로드 시 모든 입력 필드에 이벤트 리스너 추가
window.onload = function() {
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => {
        input.addEventListener('input', calculateCoins);
    });

    // 초기 코인 계산 (필요한 경우)
    calculateCoins();
};

function calculateCoins() {
    let totalCoins = 0;

    // 아이템별 코인 계산
    totalCoins += calculateItemCoins('rareEarth1', 5);
    totalCoins += calculateItemCoins('rareEarth2', 45);
    totalCoins += calculateItemCoins('rareEarth3', 160);

    totalCoins += calculateItemCoins('fuel1', 5);
    totalCoins += calculateItemCoins('fuel2', 10);
    totalCoins += calculateItemCoins('fuel3', 60);

    totalCoins += calculateItemCoins('lifeIron1', 5);
    totalCoins += calculateItemCoins('lifeIron2', 10);
    totalCoins += calculateItemCoins('lifeIron3', 40);

    totalCoins += calculateItemCoins('meteorFragment1', 5);
    totalCoins += calculateItemCoins('meteorFragment2', 15);
    totalCoins += calculateItemCoins('meteorFragment3', 25);

    // 총 코인 갯수 업데이트
    document.getElementById('totalCoins').innerText = totalCoins;
}

/**
 * 아이템 종류와 레벨에 따라 코인을 계산하는 함수
 * @param {string} itemPrefix 아이템 종류 및 레벨 (예: 'rareEarth1')
 * @param {number} coinValue 코인 가치
 * @returns {number} 총 아이템 코인
 */
function calculateItemCoins(itemPrefix, coinValue) {
    // 가격과 수량 가져오기 (값이 없으면 0으로 처리)
    const price = parseInt(document.getElementById(itemPrefix + 'Price').value) || 0;
    const quantity = parseInt(document.getElementById(itemPrefix + 'Quantity').value) || 0;

    // 총 아이템 코인 계산
    const totalItemCoins = quantity * coinValue;

    // (개발자 도구에서 확인하기 위한) 로그 출력
    console.log(`${itemPrefix}: 가격 = ${price}, 수량 = ${quantity}, 총 코인 = ${totalItemCoins}`);

    return totalItemCoins;
}
