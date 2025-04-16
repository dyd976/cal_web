function calculate() {
    // 아이템 레벨별 코인 계산 로직 (기존 코드)
    let rareEarth1 = parseInt(document.getElementById('rareEarth1').value) || 0;
    let rareEarth2 = parseInt(document.getElementById('rareEarth2').value) || 0;
    let rareEarth3 = parseInt(document.getElementById('rareEarth3').value) || 0;

    let fireFuel1 = parseInt(document.getElementById('fireFuel1').value) || 0;
    let fireFuel2 = parseInt(document.getElementById('fireFuel2').value) || 0;
    let fireFuel3 = parseInt(document.getElementById('fireFuel3').value) || 0;

    let lifeIron1 = parseInt(document.getElementById('lifeIron1').value) || 0;
    let lifeIron2 = parseInt(document.getElementById('lifeIron2').value) || 0;
    let lifeIron3 = parseInt(document.getElementById('lifeIron3').value) || 0;

    let meteorShard1 = parseInt(document.getElementById('meteorShard1').value) || 0;
    let meteorShard2 = parseInt(document.getElementById('meteorShard2').value) || 0;
    let meteorShard3 = parseInt(document.getElementById('meteorShard3').value) || 0;

    let totalCoins = (rareEarth1 * 5) + (rareEarth2 * 45) + (rareEarth3 * 160) +
                     (fireFuel1 * 5) + (fireFuel2 * 10) + (fireFuel3 * 60) +
                     (lifeIron1 * 5) + (lifeIron2 * 10) + (lifeIron3 * 40) +
                     (meteorShard1 * 5) + (meteorShard2 * 15) + (meteorShard3 * 25);

    document.getElementById('totalCoins').innerText = totalCoins;

    // 아이템 획득 가능 개수 계산
    let mixFragment = Math.floor(totalCoins / 20);
    mixFragment = Math.min(mixFragment, 150); // 최대 획득 가능 개수 제한
    document.getElementById('mixFragment').innerText = mixFragment;

    let rareCrystal = Math.floor(totalCoins / 20);
    rareCrystal = Math.min(rareCrystal, 150);
    document.getElementById('rareCrystal').innerText = rareCrystal;

    let capsuleBox = Math.floor(totalCoins / 120);
    capsuleBox = Math.min(capsuleBox, 40);
    document.getElementById('capsuleBox').innerText = capsuleBox;

    let reconstructMolecule = Math.floor(totalCoins / 40);
    reconstructMolecule = Math.min(reconstructMolecule, 200);
    document.getElementById('reconstructMolecule').innerText = reconstructMolecule;

    let memoryMaterial = Math.floor(totalCoins / 20);
    memoryMaterial = Math.min(memoryMaterial, 50);
    document.getElementById('memoryMaterial').innerText = memoryMaterial;
}
