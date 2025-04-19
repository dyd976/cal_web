// 페이지 로드 시 모든 입력 필드에 이벤트 리스너 추가
window.onload = function() {
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => {
        input.addEventListener('input', calculateAll); // 모든 계산을 한 번에 수행
    });

    calculateAll(); // 초기 계산
};

function calculateAll() {
    // 모든 아이템에 대해 계산 수행
    calculateItem('rareEarth1', 5);
    calculateItem('rareEarth2', 45);
    calculateItem('rareEarth3', 160);

    calculateItem('fuel1', 5);
    calculateItem('fuel2', 10);
    calculateItem('fuel3', 60);

    calculateItem('lifeIron1', 5);
    calculateItem('lifeIron2', 10);
    calculateItem('lifeIron3', 40);

    calculateItem('meteorFragment1', 5);
    calculateItem('meteorFragment2', 15);
    calculateItem('meteorFragment3', 25);

    // 총 코인 갯수 업데이트
    let totalCoins = calculateTotalCoins();
    document.getElementById('totalCoins').innerText = totalCoins;
}

function calculateItem(itemPrefix, coinValue) {
    // 가격과 수량 가져오기 (값이 없으면 0으로 처리)
    const price = parseInt(document.getElementById(itemPrefix + 'Price').value) || 0;
    const quantity = parseInt(document.getElementById(itemPrefix + 'Quantity').value) || 0;

    // 1코인당 골드 계산 (수정됨)
    const coinPerGold = coinValue > 0 ? (price / coinValue).toFixed(2) : 0;

    // 총 아이템 코인 계산
    const totalItemCoins = quantity * coinValue;

    // 결과 업데이트
    document.getElementById(itemPrefix + 'CoinPerGold').innerText = coinPerGold;
    document.getElementById(itemPrefix + 'TotalCoins').innerText = totalItemCoins;
}

function calculateTotalCoins() {
    let total = 0;
    // 모든 아이템의 총 코인 수를 더함
    total += parseInt(document.getElementById('rareEarth1TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('rareEarth2TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('rareEarth3TotalCoins').innerText) || 0;

    total += parseInt(document.getElementById('fuel1TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('fuel2TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('fuel3TotalCoins').innerText) || 0;

    total += parseInt(document.getElementById('lifeIron1TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('lifeIron2TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('lifeIron3TotalCoins').innerText) || 0;

    total += parseInt(document.getElementById('meteorFragment1TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('meteorFragment2TotalCoins').innerText) || 0;
    total += parseInt(document.getElementById('meteorFragment3TotalCoins').innerText) || 0;

    return total;
}
