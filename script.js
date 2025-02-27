let desc = document.getElementById("story");
let Button1 = document.getElementById("Button1");
let Button2 = document.getElementById("Button2");

let canProceed = false;

Button1.style.opacity = '0'
Button2.style.opacity = '0'

function decorateButtonFunctionality(button, scene) {
    console.log("leaked")
    let Button = button == "Button1" && Button1 || button == "Button2" && Button2 || null
    if (Button == null) {
        return
    }

    Button.addEventListener("click", () => {
        if (!canProceed) {
            console.log("NOPE!")
            return
        }

        goToScene(scene)
        // TODO: Disconnect this connection to prevent a memory leak?
    })


 
}

function goToScene(scene) {
    console.log("SCENE")
    window.location.href = scene + ".html"; 


    let desc = document.getElementById("story")
    desc.innerHTML = "ok bro"
    // Typewrite(desc.innerHTML, desc)
}


async function startTyping() {
    if (desc) {
        await Typewrite(desc.innerHTML, desc);
        Button1.style.opacity = '1'
        Button2.style.opacity = '1'
        canProceed = true;
    }
}

async function Typewrite(message, element) {
    element.innerHTML = ""; // Clear existing content
    for (let i = 0; i < message.length; i++) {
        if (message[i] == "\n") {
            console.log(message)
            element.innerHTML += "<br>"; // Insert line break
        } else {
            element.innerHTML += message[i]; // Append character
        }
        await new Promise(resolve => setTimeout(resolve, 35)); // Delay for effect
    }
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}


// Start the typing effect
startTyping();


