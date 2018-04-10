var toggles = document.getElementsByClassName('toggle');

if (toggles.length > 0) {
    for (var i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener('click', function() {
            var targets = this.parentNode.childNodes;
            for (var j = 0; j < targets.length; j++) {
                if (targets[j].classList) {
                    if (targets[j].classList.contains('paragraph') || targets[j].classList.contains('toggle')) {
                        targets[j].classList.toggle('hide');
                    }
                }
            }
        });
    }
}
