stylesheet = document.getElementById('mystylesheet')

var setTheme = localStorage.getItem('theme')

if (setTheme == null) {
    change('dark.css')
} else {
    change(setTheme)
}

function change(file) {
    stylesheet.href = file
    localStorage.setItem('theme', file)
}