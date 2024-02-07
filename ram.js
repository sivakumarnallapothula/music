let a = document.getElementById("on");
let b = document.getElementById("off");
let oye = document.getElementById("oye");

let aa = document.getElementById("onn");
let bb = document.getElementById("offf");
let oye1 = document.getElementById("oye1");

let aaa = document.getElementById("onnn");
let bbb = document.getElementById("offff");
let oye2 = document.getElementById("oye2");

let a4 = document.getElementById("onnnn");
let b4 = document.getElementById("offfff");
let oye4 = document.getElementById("oye3");

let a5 = document.getElementById("onnnnn");
let b5 = document.getElementById("offffff");
let oye5 = document.getElementById("oye4");

let beat = new Audio('https://res.cloudinary.com/siva7482/video/upload/v1707207743/Ramana_Aei_vcwqoi.mp3');
let beat1 = new Audio('https://res.cloudinary.com/siva7482/video/upload/v1707211988/Gallanthe_ujl1ot.mp3');
let beat11 = new Audio('https://res.cloudinary.com/siva7482/video/upload/v1707213483/iSongs.info_01_-_Gumma_zbixii.mp3');
let beat4 = new Audio('https://res.cloudinary.com/siva7482/video/upload/v1707287404/iSongs.info_Oye_Oye_cxygko.mp3');
let beat5 = new Audio('https://res.cloudinary.com/siva7482/video/upload/v1707287408/iSongs.info_02_-_Ram_Ram_Ram_Theme_vaaif9.mp3');

function but() {
    if (a.textContent === "Play") {
        oye.classList.remove("nm1")
        oye.classList.add("mn")
        a.textContent = "Pause";
        a.classList.add("ll");
        beat.play();
        if (aa.textContent === "Pause") {
            aa.textContent = "Play";
            beat1.pause();

            oye1.classList.remove("mn")
            aa.classList.toggle("lll");
            aa.classList.toggle("ll");
        } else if (aaa.textContent === "Pause") {
            aaa.textContent = "Play";
            beat11.pause();
            oye2.classList.remove("mn")

            aaa.classList.toggle("lll");
            aaa.classList.toggle("ll");
        } else if (a4.textContent === "Pause") {
            a4.textContent = "Play";
            beat4.pause();
            oye4.classList.remove("mn")

            a4.classList.toggle("lll");
            a4.classList.toggle("ll");
        } else if (a5.textContent === "Pause") {
            a5.textContent = "Play";
            beat5.pause();
            oye5.classList.remove("mn")

            a5.classList.toggle("lll");
            a5.classList.toggle("ll");
        }
    } else if (a.textContent === "Pause") {
        beat.pause()
        oye.classList.toggle("mn")
        a.textContent = "Play";
        a.classList.add("lll");
        a.classList.remove("ll");
        oye.classList.remove("mn")
        oye.classList.add("nm")
    }
}

function but1() {
    if (aa.textContent === "Play") {
        beat1.play();
        oye1.classList.remove("nm1")
        oye1.classList.add("mn")
        aa.textContent = "Pause";
        aa.classList.add("ll");
        if (a.textContent === "Pause") {
            a.textContent = "Play";
            oye.classList.remove("mn")

            a.classList.toggle("lll");
            a.classList.toggle("ll");
            beat.pause()
        } else if (aaa.textContent === "Pause") {
            aaa.textContent = "Play";
            beat11.pause();
            oye2.classList.remove("mn")

            aaa.classList.toggle("lll");
            aaa.classList.toggle("ll");
        } else if (a4.textContent === "Pause") {
            a4.textContent = "Play";
            beat4.pause();
            oye4.classList.remove("mn")

            a4.classList.toggle("lll");
            a4.classList.toggle("ll");
        } else if (a5.textContent === "Pause") {
            a5.textContent = "Play";
            beat5.pause();
            oye5.classList.remove("mn")

            a5.classList.toggle("lll");
            a5.classList.toggle("ll");
        }
    } else if (aa.textContent === "Pause") {
        aa.textContent = "Play";
        beat1.pause();
        aa.classList.add("lll");
        aa.classList.remove("ll");
        oye1.classList.remove("mn")
        oye1.classList.add("nm")
    }
}

function but11() {
    if (aaa.textContent === "Play") {
        beat11.play();
        oye2.classList.remove("nm1")
        oye2.classList.add("mn")
        aaa.textContent = "Pause";
        aaa.classList.add("ll");
        if (aa.textContent === "Pause") {
            aa.textContent = "Play";
            beat1.pause();
            oye1.classList.remove("mn")

            aa.classList.toggle("lll");
            aa.classList.toggle("ll");
        } else if (a.textContent === "Pause") {
            a.textContent = "Play";
            beat.pause();
            oye.classList.remove("mn")

            a.classList.toggle("lll");
            a.classList.toggle("ll");
        } else if (a4.textContent === "Pause") {
            a4.textContent = "Play";
            beat4.pause();
            oye4.classList.remove("mn")

            a4.classList.toggle("lll");
            a4.classList.toggle("ll");
        } else if (a5.textContent === "Pause") {
            a5.textContent = "Play";
            beat5.pause();
            oye5.classList.remove("mn")

            a5.classList.toggle("lll");
            a5.classList.toggle("ll");
        }
    } else if (aaa.textContent === "Pause") {
        aaa.textContent = "Play";
        beat11.pause();
        aaa.classList.add("lll");
        aaa.classList.remove("ll");
        oye2.classList.remove("mn")
        oye2.classList.add("nm")
    }
}

function but2() {
    if (a4.textContent === "Play") {
        beat4.play();
        oye4.classList.remove("nm1")
        oye4.classList.add("mn")
        a4.textContent = "Pause";
        a4.classList.add("ll");
        if (a.textContent === "Pause") {
            a.textContent = "Play";
            oye.classList.remove("mn")

            a.classList.toggle("lll");
            a.classList.toggle("ll");
            beat.pause()
        } else if (aaa.textContent === "Pause") {
            aaa.textContent = "Play";
            beat11.pause();
            oye2.classList.remove("mn")

            aaa.classList.toggle("lll");
            aaa.classList.toggle("ll");
        } else if (aa.textContent === "Pause") {
            aa.textContent = "Play";
            beat1.pause();
            oye1.classList.remove("mn")

            aa.classList.toggle("lll");
            aa.classList.toggle("ll");
        } else if (a5.textContent === "Pause") {
            a5.textContent = "Play";
            beat5.pause();
            oye5.classList.remove("mn")

            a5.classList.toggle("lll");
            a5.classList.toggle("ll");
        }
    } else if (a4.textContent === "Pause") {
        a4.textContent = "Play";
        beat4.pause();
        a4.classList.add("lll");
        a4.classList.remove("ll");
        oye4.classList.remove("mn")
        oye4.classList.add("nm")
    }
}


function but3() {
    if (a5.textContent === "Play") {
        beat5.play();
        oye5.classList.remove("nm1")
        oye5.classList.add("mn")
        a5.textContent = "Pause";
        a5.classList.add("ll");
        if (a.textContent === "Pause") {
            a.textContent = "Play";
            oye.classList.remove("mn")

            a.classList.toggle("lll");
            a.classList.toggle("ll");
            beat.pause()
        } else if (aaa.textContent === "Pause") {
            aaa.textContent = "Play";
            beat11.pause();
            oye2.classList.remove("mn")

            aaa.classList.toggle("lll");
            aaa.classList.toggle("ll");
        } else if (a4.textContent === "Pause") {
            a4.textContent = "Play";
            beat4.pause();
            oye4.classList.remove("mn")

            a4.classList.toggle("lll");
            a4.classList.toggle("ll");
        } else if (aa.textContent === "Pause") {
            aa.textContent = "Play";
            beat1.pause();
            oye1.classList.remove("mn")

            aa.classList.toggle("lll");
            aa.classList.toggle("ll");
        }
    } else if (a5.textContent === "Pause") {
        a5.textContent = "Play";
        beat5.pause();
        a5.classList.add("lll");
        a5.classList.remove("ll");
        oye5.classList.remove("mn")
        oye5.classList.add("nm")
    }
}