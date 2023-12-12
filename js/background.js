const images = [
    "test01.jpg",
    "test02.jpg",
    "test03.jpg",
    "test04.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //floor는 반올림없이 무조건 정수로 만듦

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //앞에 위치시키기 *depend는 뒤쪽에 위치