const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert('hello!');

//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mountains.png') {
      myImage.setAttribute ('src','images/mountains-2.png');
    } else {
      myImage.setAttribute ('src','images/mountains.png');
    }
}