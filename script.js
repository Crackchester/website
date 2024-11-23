document.addEventListener('DOMContentLoaded', () => {
    const bootText = document.getElementById('boot-text');
    const loadingScreen = document.getElementById('loading-screen');
    const homepage = document.getElementById('homepage');

    // Realistic Ubuntu-like boot sequence with color coding
    const bootSequence = [
        ["", "Initializing system..."],
        ["[  OK  ] ", "Loading essential drivers..."],
        ["[  OK  ] ", "Mounting root filesystem..."],
        ["[  OK  ] ", "Activating swap space..."],
        ["[  OK  ] ", "Starting system services..."],
        ["[FAILED] ", "Failed to start network services"],
        ["[  OK  ] ", "Starting sshd..."],
        ["[  OK  ] ", "Starting cron service..."],
        ["[  OK  ] ", "Starting firewall..."],
        ["[  OK  ] ", "Starting up Hackchester..."],
        ["[ INFO ] ", "Checking disk..."],
        ["[  OK  ] ", "Disk check complete."],
        ["[ INFO ] ", "Attempting login..."]
    ];

    // Function to add color classes to the lines
    async function typeColoredLine(line) {
        // Check for OK or FAILED and return corresponding span with appropriate color
        if (line[0].includes("OK")) {
            bootText.innerHTML += `<span class="ok">${line[0]}</span>`;  // Green for success
        } else if (line[0].includes("FAILED")) {
            bootText.innerHTML += `<span class="failed">${line[0]}</span>`;  // Red for error
        } else if (line[0].includes("INFO")) {
            bootText.innerHTML += `<span class="info">${line[0]}</span>`;  // Red for error
        }

        
        bootText.innerHTML += `<span class="text">${line[1]}</span>`;
        bootText.innerHTML += "<br>";
    }

    async function runBootSequence() {
        for (let i = 0; i < bootSequence.length; i++) {
            await typeColoredLine(bootSequence[i]);

            // Add a small delay between each line
            if (i < bootSequence.length - 1) {
                await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (600 - 300 + 1)) + 300)); // Pause between lines
            }
        }

        // Simulate login prompt interaction
        await simulateLogin();

        // Hide the loading screen and show the homepage after the boot sequence
        loadingScreen.style.display = 'none';
        homepage.style.display = 'block';
    }

    // Simulate typing the username and password
    async function simulateLogin() {
        bootText.innerHTML += "\nLogin: ";

        return new Promise(resolve => {
            setTimeout(async () => {
                let login = "root";
                let temp = bootText.innerHTML;
                for (let i = 0; i < login.length; i ++){
                    temp += login[i];
                    bootText.innerHTML = temp + `<span class="cursor"></span>`;
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                bootText.innerHTML = temp;
                bootText.innerHTML += "\n";
                bootText.innerHTML += "Password: ";
                bootText.innerHTML += `<span class="cursor"></span>`; // Add cursor for password input

                setTimeout(() => {
                    bootText.innerHTML += "password\n"; // Password entry
                    bootText.innerHTML += "Access granted.\n";
                    bootText.innerHTML += "Starting homepage...\n";

                    resolve();
                }, 1500); // Password delay
            }, 150); // Username typing delay
        });
    }

    // Start the boot sequence
    runBootSequence();
});