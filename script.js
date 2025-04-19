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
    let totalCoins = (rareEarth1 * 1) + (rareEarth2 * 2) + (rareEarth3 * 4) +
                     (fireFuel1 * 1) + (fireFuel2 * 2) + (fireFuel3 * 4) +
                     (lifeIron1 * 1) + (lifeIron2 * 2) + (lifeIron3 * 4) +
                     (meteorShard1 * 1) + (meteorShard2 * 2) + (meteorShard3 * 4);

    document.getElementById('totalCoins').innerText = totalCoins;

    // 아이템 획득 가능 개수 계산
    document.getElementById('mixFragment').innerText = Math.floor(totalCoins / 20);
    document.getElementById('rareCrystal').innerText = Math.floor(totalCoins / 20);
    document.getElementById('capsuleBox').innerText = Math.floor(totalCoins / 120);
    document.getElementById('reconstructMolecule').innerText = Math.floor(totalCoins / 40);
    document.getElementById('memoryMaterial').innerText = Math.floor(totalCoins / 20);
}

function updateGoldPerCoin() {
    let rareEarth1Price = parseInt(document.getElementById('rareEarth1Price').value) || 0;
    let rareEarth2Price = parseInt(document.getElementById('rareEarth2Price').value) || 0;
    let rareEarth3Price = parseInt(document.getElementById('rareEarth3Price').value) || 0;

    let fireFuel1Price = parseInt(document.getElementById('fireFuel1Price').value) || 0;
    let fireFuel2Price = parseInt(document.getElementById('fireFuel2Price').value) || 0;
    let fireFuel3Price = parseInt(document.getElementById('fireFuel3Price').value) || 0;

    let lifeIron1Price = parseInt(document.getElementById('lifeIron1Price').value) || 0;
    let lifeIron2Price = parseInt(document.getElementById('lifeIron2Price').value) || 0;
    let lifeIron3Price = parseInt(document.getElementById('lifeIron3Price').value) || 0;

    let meteorShard1Price = parseInt(document.getElementById('meteorShard1Price').value) || 0;
    let meteorShard2Price = parseInt(document.getElementById('meteorShard2Price').value) || 0;
    let meteorShard3Price = parseInt(document.getElementById('meteorShard3Price').value) || 0;

    let totalPrice = rareEarth1Price + rareEarth2Price + rareEarth3Price +
                     fireFuel1Price + fireFuel2Price + fireFuel3Price +
                     lifeIron1Price + lifeIron2Price + lifeIron3Price +
                     meteorShard1Price + meteorShard2Price + meteorShard3Price;

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
    let totalCoins = (rareEarth1 * 1) + (rareEarth2 * 2) + (rareEarth3 * 4) +
                     (fireFuel1 * 1) + (fireFuel2 * 2) + (fireFuel3 * 4) +
                     (lifeIron1 * 1) + (lifeIron2 * 2) + (lifeIron3 * 4) +
                     (meteorShard1 * 1) + (meteorShard2 * 2) + (meteorShard3 * 4);

    let goldPerCoin = (totalCoins === 0) ? 0 : totalPrice / totalCoins;

    document.getElementById('goldPerCoin').innerText = goldPerCoin.toFixed(2);
}
