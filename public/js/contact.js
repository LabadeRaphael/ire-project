import {
    renderNavbar
}
    from "./components/navbar.js";
import {
    validateContactName,
    validateContactEmail,
    validateSubject,
    validateMessage
}
    from "../validation/validation.js";

import {
    showToast
}
    from "./components/toast.js";

renderNavbar();

/* FORM */

const form =
    document.getElementById(
        "contactForm"
    );

/* INPUTS */

const nameInput =
    document.getElementById(
        "name"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const subjectInput =
    document.getElementById(
        "subject"
    );

const messageInput =
    document.getElementById(
        "message"
    );

/* ERRORS */

const nameError =
    document.getElementById(
        "nameError"
    );

const emailError =
    document.getElementById(
        "emailError"
    );

const subjectError =
    document.getElementById(
        "subjectError"
    );

const messageError =
    document.getElementById(
        "messageError"
    );




/* LOCAL STORAGE */

function getMessages() {

    return JSON.parse(
        localStorage.getItem(
            "contactMessages"
        )
    ) || [];
}

function saveMessage(
    message
) {

    const messages =
        getMessages();

    messages.push(
        message
    );

    localStorage.setItem(
        "contactMessages",
        JSON.stringify(
            messages
        )
    );
}
/* LIVE VALIDATION */

nameInput.addEventListener(
    "input",
    () => {

        nameError.textContent =
            validateContactName(
                nameInput.value
            );
    }
);

emailInput.addEventListener(
    "input",
    () => {

        emailError.textContent =
            validateContactEmail(
                emailInput.value
            );
    }
);

subjectInput.addEventListener(
    "input",
    () => {

        subjectError.textContent =
            validateSubject(
                subjectInput.value
            );
    }
);

messageInput.addEventListener(
    "input",
    () => {

        messageError.textContent =
            validateMessage(
                messageInput.value
            );
    }
);

/* SUBMIT */

form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const nameValidation =
            validateContactName(
                nameInput.value
            );

        const emailValidation =
            validateContactEmail(
                emailInput.value
            );

        const subjectValidation =
            validateSubject(
                subjectInput.value
            );

        const messageValidation =
            validateMessage(
                messageInput.value
            );

        nameError.textContent =
            nameValidation;

        emailError.textContent =
            emailValidation;

        subjectError.textContent =
            subjectValidation;

        messageError.textContent =
            messageValidation;

        if (
            nameValidation ||
            emailValidation ||
            subjectValidation ||
            messageValidation
        ) {

            showToast(
                "Please fix the errors",
                "error"
            );

            return;
        }

        /* SAVE MESSAGE */

        /* MESSAGE OBJECT */

        const newMessage = {

            id: Date.now(),

            name:
                nameInput.value.trim(),

            email:
                emailInput.value.trim(),

            subject:
                subjectInput.value.trim(),

            message:
                messageInput.value.trim(),

            createdAt:
                new Date()
                    .toLocaleString()
        };

        /* SAVE */

        saveMessage(
            newMessage
        );

        /* SUCCESS */

        showToast(
            "Message submitted successfully",
            "success"
        );

        form.reset();
    }
);