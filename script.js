function calculateCoins() {
    let totalCoins = 0;

    // 희토류
    totalCoins += calculateItemCoins('rareEarth1', 5);
    totalCoins += calculateItemCoins('rareEarth2', 45);
    totalCoins += calculateItemCoins('rareEarth3', 160);

    // 화기연료
    totalCoins += calculateItemCoins('fuel1', 5);
    totalCoins += calculateItemCoins('fuel2', 10);
    totalCoins += calculateItemCoins('fuel3', 60);

    // 생명주철
    totalCoins += calculateItemCoins('lifeIron1', 5);
    totalCoins += calculateItemCoins('lifeIron2', 10);
    totalCoins += calculateItemCoins('lifeIron3', 40);

    // 운철파편
    totalCoins += calculateItemCoins('meteorFragment1', 5);
    totalCoins += calculateItemCoins('meteorFragment2', 15);
    totalCoins += calculateItemCoins('meteorFragment3', 25);

    document.getElementById('totalCoins').innerText = totalCoins;
}

function calculateItemCoins(itemId, coinValue) {
    const price = parseInt(document.getElementById(itemId + 'Price').value) || 0;
    const quantity = parseInt(document.getElementById(itemId + 'Quantity').value) || 0;

    const coinPerGold = price / coinValue;
    const totalItemCoins = quantity * coinValue;

    console.log(`${itemId}: 코인/골드 = ${coinPerGold}, 총 코인 = ${totalItemCoins}`); // 개발자 도구에서 확인

    return totalItemCoins;
}
