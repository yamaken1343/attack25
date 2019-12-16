var mode = 0;

// 動作モード変更 0: 画像表示 1: 表示消去, 2: RED, 3: GREEN 4: WHITE, 5: BLUE,
//              6: アタックチャンス, 7: 画像表示(アタックチャンス), 8: パネル表示, 9: GRAY
function modeChange(i) {
    mode = i;
    if (mode === 0) {
        document.getElementById('displayMode').innerText = 'Image';
    } else if (mode === 1) {
        document.getElementById('displayMode').innerText = 'Clear';
    } else if (mode === 2) {
        document.getElementById('displayMode').innerText = 'RED';
    } else if (mode === 3) {
        document.getElementById('displayMode').innerText = 'GREEN';
    } else if (mode === 4) {
        document.getElementById('displayMode').innerText = 'WHITE';
    } else if (mode === 5) {
        document.getElementById('displayMode').innerText = 'BLUE';
    } else if (mode === 6) {
        document.getElementById('displayMode').innerText = 'Chance';
    } else if (mode === 7) {
        document.getElementById('displayMode').innerText = 'Image(Chance)';
    } else if (mode === 8) {
        document.getElementById('displayMode').innerText = 'Display';
    } else if (mode === 9) {
        document.getElementById('displayMode').innerText = 'GRAY';
    }
}

// パネルがクリックされた際の挙動
function panelClick(i) {
    if (mode === 0) {
        viewPanelImage(i)
    } else if (mode === 1) {
        clearPanel(i);
    } else if (mode === 2) {
        changePanelRed(i)
    } else if (mode === 3) {
        changePanelGreen(i)
    } else if (mode === 4) {
        changePanelWhite(i)
    } else if (mode === 5) {
        changePanelBlue(i)
    } else if (mode === 6) {
        changePanelChance(i)
    } else if (mode === 7) {
        viewChancePanelImage(i)
    } else if (mode === 8) {
        viewPanel(i)
    } else if (mode === 9) {
        changePanelGray(i)
    }
}

// クリック時のIDの代入
function setId(i) {
    id = i;
    console.log(i);
    document.getElementById('displayId').innerText = i;
}

// パネルの消去
function clearPanel(i) {
    let panelId = 'li' + i;
    let p = document.getElementById(panelId);
    p.style.opacity = '0';
}

// 消去したパネルの復元
function viewPanel(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.opacity = '1';
}

// 動画の再生
function videoPlay() {
    let v = document.getElementById('backVideo');
    v.play();
    // 再生画面を拡大する
    document.getElementById('control').style.display = 'none';
    document.getElementById('bigImage').style.display = 'none';
    document.documentElement.style.setProperty('--content-height', '95vh');
    // document.documentElement.style.setProperty('--content-height', 'calc(var(--content-width)*9/16)');
}

// パネルの画像を表示
// ./image/[パネルid].jpg に固定
function viewPanelImage(id) {
    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    let b = document.getElementById('bigImage');
    i.src = './images/' + id + '.jpg';
    i.style.opacity = '1';
    b.src = './images/' + id + '.jpg';
}

// アタックチャンス時の画像を表示
// ./image/26.jpg に固定
function viewChancePanelImage(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightyellow';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.src = './images/26.jpg';
    i.style.opacity = '1';
    let b = document.getElementById('bigImage');
    b.src = './images/26.jpg';
}

// パネルの色を変更
function changePanelRed(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightpink';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';

}

function changePanelBlue(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightblue';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';

}

function changePanelGreen(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightgreen';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';

}

function changePanelWhite(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'white';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';

}

function changePanelGray(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightgray';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';

}

// アタックチャンス時のパネル色変更
function changePanelChance(id) {
    let panelId = 'li' + id;
    let p = document.getElementById(panelId);
    p.style.backgroundColor = 'lightyellow';

    let imageId = 'img' + id;
    let i = document.getElementById(imageId);
    i.style.opacity = '0';
}