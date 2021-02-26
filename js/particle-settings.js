particlesJS('bubbles', {
    "particles": {
        "number": {
            "value": 150, //シェイプの数
            "density": {
                "enable": true, //シェイプの密集度を変更するか否か
                "value_area": 800 //シェイプの密集度
            }
        },
        "shape": {
            "type": "circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
            "stroke": {
                "width": 0, //シェイプの外線の太さ
                "color": "#000000" //シェイプの外線の色
            }
        },
        "color": {
            "value": "#ffffff" //シェイプの色
        },
        "opacity": {
            "value": 0.2, //シェイプの透明度
            "random": true, //シェイプの透明度をランダムにするか否か
            "anim": {
                "enable": false, //シェイプの透明度をアニメーションさせるか否か
                "speed": 1, //アニメーションのスピード
                "opacity_min": 0.1, //透明度の最小値
                "sync": false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
        "size": {
            "value": 8, //シェイプの大きさ
            "random": true, //シェイプの大きさをランダムにするか否か
            "anim": {
                "enable": false, //シェイプの大きさをアニメーションさせるか否か
                "speed": 40, //アニメーションのスピード
                "size_min": 0.1, //大きさの最小値
                "sync": false //全てのシェイプを同時にアニメーションさせるか否か
            }
        },
        "line_linked": {
            "enable": false, //線を表示するか否か
            "distance": 500, //線をつなぐシェイプの間隔
            "color": "#ffffff", //線の色
            "opacity": 0.4, //線の透明度
            "width": 2 //線の太さ
        },
        "move": {
            "enable": true,
            "speed": 5, //シェイプの動くスピード
            "straight": false, //個々のシェイプの動きを止めるか否か
            "direction": "top", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
            "out_mode": "out", //エリア外に出たシェイプの動き(out、bounceより選択)
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false //マウスオーバーが有効か否か
            },
            "onclick": {
                "enable": false //クリックが有効か否か
            },
        },
        "modes": {
            "grab": {
                "distance": 400, //カーソルからの反応距離
                "line_linked": {
                    "opacity": 0.5 //線の透明度
                }
            },
            "repulse": {
                "distance": 200 //カーソルからの反応距離
            },
            "bubble": {
                "distance": 400, //カーソルからの反応距離
                "size": 4, //シェイプの膨らむ大きさ
                "opacity": 1, //膨らむシェイプの透明度
                "duration": 0.3, //膨らむシェイプの持続時間(onclick時のみ)
                "speed": 3 //膨らむシェイプの速度(onclick時のみ)
            },
            "push": {
                "particles_nb": 4 //増えるシェイプの数
            },
            "remove": {
                "particles_nb": 2 //減るシェイプの数
            }
        }
    },
    "retina_detect": true, //Retina Displayを対応するか否か
    "resize": true //canvasのサイズ変更にわせて拡大縮小するか否か
});
