function calculate() {
    // 희토류
    let rareEarth1 = parseInt(document.getElementById('rareEarth1').value) || 0;
    let rareEarth2 = parseInt(document.getElementById('rareEarth2').value) || 0;
    let rareEarth3 = parseInt(document.getElementById('rareEarth3').value) || 0;

    // 화기연료
    let fireFuel1 = parseInt(document.getElementById('fireFuel1').value) || 0;
    let fireFuel2 = parseInt(document.getElementById('fireFuel2').value) || 0;
    let fireFuel3 = parseInt(document.getElementById('fireFuel3').value) || 0;

    // 생명주철
    let lifeIron1 = parseInt(document.getElementById('lifeIron1').value) || 0;
    let lifeIron2 = parseInt(document.getElementById('lifeIron2').value) || 0;
    let lifeIron3 = parseInt(document.getElementById('lifeIron3').value) || 0;

    // 운철파편
    let meteorShard1 = parseInt(document.getElementById('meteorShard1').value) || 0;
    let meteorShard2 = parseInt(document.getElementById('meteorShard2').value) || 0;
    let meteorShard3 = parseInt(document.getElementById('meteorShard3').value) || 0;

    // 코인 계산
    let totalCoins = (rareEarth1 * 5) + (rareEarth2 * 45) + (rareEarth3 * 160) +
                     (fireFuel1 * 5) + (fireFuel2 * 10) + (fireFuel3 * 60) +
                     (lifeIron1 * 5) + (lifeIron2 * 10) + (lifeIron3 * 40) +
                     (meteorShard1 * 5) + (meteorShard2 * 15) + (meteorShard3 * 25);

    document.getElementById('totalCoins').innerText = totalCoins;
}
