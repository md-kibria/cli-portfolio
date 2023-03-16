const main = document.querySelector('#main');
const input = document.querySelector('#input');
const container = document.querySelector('#container');
const arr = document.querySelector('#arr');

// Root arrow sign
const rootArrow = '$>'

// New line arrow
arr.textContent = rootArrow;

// Create result line
function createResult(tag, textContent) {
    const element = document.createElement(tag);
    element.className = 'res'
    element.textContent = `${textContent}`;
    return element;
}

// Create input command line
function createCmd(textContent = '') {
    const element = document.createElement('p');
    element.textContent = `${rootArrow} ${textContent}`;
    return element;
}

// Clear input text
function clear(e) {
    e.target.value = '';
}

// Focus on input
main.addEventListener('click', () => {
    input.focus()
})

// Event listener
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        const cmd = e.target.value;
        if(cmd === 'help') {
            container.appendChild(createCmd(cmd))
            container.appendChild(createResult('p', 'commands: "about", "skills", "github, "clear", "cls", "exit"'))
            clear(e);
        } else if(cmd === 'about') {
            container.appendChild(createCmd(cmd))
            container.appendChild(createResult('p', `I am Md Kibria. I am a web developer.`))
            clear(e);
        } else if(cmd === 'skills') {
            container.appendChild(createCmd(cmd))
            container.appendChild(createResult('p', `My skills: Javascript, React JS, Node Js, Laravel, MongoDB, MySQL.`))
            clear(e);
        } else if(cmd === 'github') {
            container.appendChild(createCmd(cmd))
            container.appendChild(createResult('p', `My Github Link: https://github.com/md-kibria`))
            clear(e);
        } else if(cmd === 'exit') {
            if(confirm("Are you sure want to close?")) {
                container.appendChild(createCmd(cmd))
                window.close();
            }
            clear(e);
        } else if(cmd === 'clear' || cmd === 'cls') {
            container.innerHTML = '';
            clear(e);
        } else if(cmd === '') {
            console.log('called');
            container.appendChild(createCmd())
            clear(e);
        } else {
            container.appendChild(createCmd(cmd))
            container.appendChild(createResult('p', `"${e.target.value}" is not a valid command`))
            clear(e);
        }

        console.log(cmd === '');
    }
})