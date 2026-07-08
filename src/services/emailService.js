import emailjs from "@emailjs/browser";

/*
|--------------------------------------------------------------------------
| EmailJS Configuration
|--------------------------------------------------------------------------
|
| Replace these values with your own EmailJS IDs.
|
*/

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export async function sendContactEmail(formData) {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: formData.name,
                company: formData.company,
                email: formData.email,
                phone: formData.phone,
                service: formData.service,
                budget: formData.budget,
                message: formData.message,
            },
            PUBLIC_KEY
        );

        return {
            success: true,
            response,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            error,
        };
    }
}