console.log(document.getElementById('message'));

document.getElementById('showBtn').onclick = function() {
    alert(document.getElementById('title').innerText);
};

document.write('This message is added using document.write');