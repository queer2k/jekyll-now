var toggles = document.getElementsByClassName('toggle');

console.log('hey');
console.log(toggles);

if (toggles.length > 0) {
    console.log('wats up');
    for (var i = 0; i < toggles.length; i++) {
        console.log(toggles[i]);
        toggles[i].addEventListener('click', function() {
            console.log('hello')
            console.log(this.parentNode.childNodes);
            var targets = this.parentNode.childNodes;
            for (var j = 0; j < targets.length; j++) {
                console.log(targets[j]);
                if (targets[j].classList) {
                    if (targets[j].classList.contains('paragraph') || targets[j].classList.contains('toggle')) {
                        targets[j].classList.toggle('hide');
                    }
                }
            }
        });
    }
}
