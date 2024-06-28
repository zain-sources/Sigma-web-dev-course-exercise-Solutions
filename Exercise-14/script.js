

pin_apps = document.querySelector(".pin-apps").children
pin_apps_list = Array.from(pin_apps)
pin_apps_list.forEach(app => {
    app.addEventListener('click', terminalToggler)
})

terminal_buttons = document.querySelector("#terminal-buttons").children
terminal_buttons_list = Array.from(terminal_buttons)
terminal_buttons_list[0].addEventListener('click', terminalToggler)
terminal_buttons_list[1].addEventListener('click', terminalMaximizer)
terminal_buttons_list[2].addEventListener('click', terminalCloser)


function terminalToggler() {
    terminal = document.getElementById('terminal');
    if (terminal.style.transform == "scale(0)") {
        terminal.style.transform = "scale(1)"
    }
    else if (terminal.style.transform == "scale(1.2)") {
        terminal.style.transform = "scale(1)"
    }
    else{
        terminal.style.transform = "scale(0)"
    }
}

function terminalCloser() {
    terminal_body = document.getElementById("terminal-body");
    input_line = terminal_body.firstElementChild;
    terminal_body.innerHTML = '';
    terminal_body.appendChild(input_line);
    terminalToggler();
}


function terminalMaximizer() {
    terminal = document.getElementById('terminal');
    console.log(terminal.style.transform)
    if (terminal.style.transform == "" || terminal.style.transform == "scale(1)") {
        terminal.style.transform = "scale(1.2)"
    }
}


function main() {
    let input_field = document.getElementById('command-text');
    var command = "";
    input_field.addEventListener('keyup', function (event) {
        if (event.key == "Enter") {
            command = input_field.value;
            if (command == "start") {
                let span = document.createElement('span');
                span.className = "termial-usercommand";
                span.innerText = command;
                input_field.replaceWith(span);
                startCommandStarter();
            }
            else if (command !== "") {
                console.log("Invalid Command")
                let span = document.createElement('span');
                span.className = "termial-usercommand";
                span.innerText = command;
                input_field.replaceWith(span);
                warningCommandStarter(command);

            }
            else {
                console.log("Enter Command first")
            }
        }
    });
}

main();

async function warningCommandStarter(command) {
    
    let line1 = new_line(`(^_-) Invalid Command:  ${command}`, 0);

    let line_11 = new_line("", 0, true);
    main();
}


async function startCommandStarter() {
    let total_time = 0;
    let max_time = 5000;

    let line_1 = new_line("Initailizing SetUp", getRandomTime(max_time));
    total_time += await line_1;

    let line_2 = new_line("Installing", getRandomTime(max_time));
    total_time = await line_2;

    let line_3 = new_line("⚠️ Malware INSTALLED ⚠️", 0);
    total_time += await line_3;

    let line_4 = new_line("Starting Malware", getRandomTime(max_time));
    total_time += await line_4;

    let line_5 = new_line("🔎 Searching for sensitive data 🔍", getRandomTime(max_time));
    total_time += await line_5;

    let line_6 = new_line("🔑 Passwords detected 🔑", 0);
    total_time += await line_6;

    let line_7 = new_line("Sending to Server", getRandomTime(max_time));
    total_time += await line_7;

    let line_8 = new_line("Malware Stopped", 0)
    total_time += await line_8;

    let line_9 = new_line("Cleaning up", getRandomTime(max_time));
    total_time += await line_9;

    let line_10 = new_line(`Total Taken :  ${Math.floor(total_time / 1000)} seconds`, 0);

    let line_11 = new_line("", 0, true);
    main();
}


function getRandomTime(max_time = 5000) {
    return Math.floor(Math.random() * max_time) + 1;
}



function new_line(msg = "", loading_duration = 0, line_type_input = false) {
    let terminal_body = document.getElementById('terminal-body');
    if (line_type_input) {
        let msg_promise = new Promise((resolve, reject) => {
            let div_str = `
                <div class="terminal-body-line">
                    <span class="terminal-body-line-rootdir">
                        <span>mark@linux-desktop</span>
                        <span>: </span>
                        <span>~</span>
                        <span>$ </span>
                    </span>
                    <input class="termial-usercommand" type="text" id="command-text" name="command-text" placeholder="Type start and Press Enter">
                </div>
            `
            terminal_body.innerHTML += div_str;
            let text_box = document.getElementById('command-text');
            text_box.select();
            resolve("input-line-created")
        })
        return msg_promise
    }
    else {
        if (loading_duration !== 0) {
            let msg_promise = new Promise((resolve, reject) => {
                let div_str = `
                    <div class="terminal-body-line">
                        <span>${msg} </span>
                        <span id="loading">...</span>
                    </div>`
                terminal_body.innerHTML += div_str;
                let loader_code = loader_starter();
                setTimeout(() => {
                    loader_ender(loader_code);
                    resolve(loading_duration)
                }, loading_duration);
            })
            return msg_promise
        }
        else {
            let msg_promise = new Promise((resolve, reject) => {
                let div_str = `
                    <div class="terminal-body-line">
                        <span>${msg} </span>
                    </div>`
                terminal_body.innerHTML += div_str;
                resolve(loading_duration)
            })
            return msg_promise
        }

    }
}



function loader_starter() {
    let loader = document.getElementById('loading')
    let dots = ""
    let interval_code = setInterval(() => {
        if (dots.length < 3) {
            dots += "."
        } else {
            dots = ""
        }
        loader.innerText = dots
    }, 500)
    return interval_code
}

function loader_ender(loader_code) {
    clearInterval(loader_code)
    let loader = document.getElementById('loading')
    let span = document.createElement('span');
    span.innerText = `... ✔️`
    loader.replaceWith(span)
}




