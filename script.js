// WhatsApp number for Everlyne
const advisorWhatsApp = "254728928657";

// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Handle the consultation form
const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {
    consultationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !service) {
            alert("Please fill in your name, phone number, and service.");
            return;
        }

        const whatsappMessage =
            "Hello Everlyne, I would like to enquire about your financial advisory services.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Message: " + (message || "I would like more information.");

        const whatsappURL =
            "https://wa.me/" + advisorWhatsApp +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
