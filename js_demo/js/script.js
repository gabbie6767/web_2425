//alert('This is a test')

function askQuestion() {
    var p = prompt('How much wood would a wood chuck chuck if a wood chuck could chuck wood?');
    if (p != nulll) {
            document.getElementById('question').innerHTML = 'Yikes!' + p + ' is this a lot of wood!';
    }
}