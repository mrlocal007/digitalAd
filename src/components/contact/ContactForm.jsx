import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    Loader2,
    CheckCircle2,
} from "lucide-react";

import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import FormTextarea from "../form/FormTextarea";

import { sendContactEmail } from "../../services/emailService";

const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    objective: "",
    budget: "",
    message: "",
    consultation: true,
};

export default function ContactForm() {

    const [formData, setFormData] = useState(initialState);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {

        const newErrors = {};

        if (!formData.name.trim())
            newErrors.name = "Please enter your name.";

        if (!formData.email.trim())
            newErrors.email = "Business email is required.";

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        )
            newErrors.email =
                "Enter a valid email address.";

        if (!formData.phone.trim())
            newErrors.phone =
                "Please enter your mobile number.";

        if (!formData.service)
            newErrors.service =
                "Please select a service.";

        if (!formData.message.trim())
            newErrors.message =
                "Please tell us about your project.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const result = await sendContactEmail(formData);

    setLoading(false);

    if (result.success) {
        setSuccess(true);
        setFormData(initialState);
    } else {
        alert("Something went wrong. Please try again.");
    }
};

    const serviceOptions = [

        {
            value: "",
            label: "Select a service",
        },

        {
            value: "AI Solutions",
            label: "Artificial Intelligence",
        },

        {
            value: "Software Development",
            label: "Software Development",
        },

        {
            value: "Website Development",
            label: "Website Development",
        },

        {
            value: "Mobile Apps",
            label: "Mobile Applications",
        },

        {
            value: "Digital Marketing",
            label: "Digital Marketing",
        },

        {
            value: "Media Production",
            label: "Media Production",
        },

        {
            value: "Studio Booking",
            label: "Studio Booking",
        },

        {
            value: "Business Consulting",
            label: "Business Consulting",
        },

    ];

    const objectiveOptions = [

        {
            value: "",
            label: "Project objective",
        },

        {
            value: "Generate Leads",
            label: "Generate More Leads",
        },

        {
            value: "Automation",
            label: "Automate Business Processes",
        },

        {
            value: "Launch Product",
            label: "Launch New Product",
        },

        {
            value: "Digital Presence",
            label: "Improve Digital Presence",
        },

        {
            value: "Media",
            label: "Professional Media",
        },

        {
            value: "Other",
            label: "Other",
        },

    ];

    const budgetOptions = [

        {
            value: "",
            label: "Estimated budget",
        },

        {
            value: "Under 50K",
            label: "Under ₹50,000",
        },

        {
            value: "50K-2L",
            label: "₹50K - ₹2L",
        },

        {
            value: "2L-5L",
            label: "₹2L - ₹5L",
        },

        {
            value: "5L-10L",
            label: "₹5L - ₹10L",
        },

        {
            value: "10L+",
            label: "Above ₹10L",
        },

    ];

    if (success) {

        return (

            <motion.div
                initial={{
                    opacity: 0,
                    scale: .95,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                className="rounded-[32px] bg-white p-12 shadow-xl text-center"
            >

                <CheckCircle2
                    className="mx-auto text-green-500"
                    size={70}
                />

                <h2 className="mt-6 text-3xl font-bold">

                    Thank You!

                </h2>

                <p className="mt-4 text-slate-600 leading-8">

                    Your enquiry has been received.

                    <br />

                    Our team will contact you within one business day.

                </p>

            </motion.div>

        );

    }

    return (

        <motion.form

            className="rounded-[36px] bg-white p-8 md:p-10 shadow-xl"

        
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >

            {/* Heading */}

            <div className="mb-10">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                    START A CONVERSATION

                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-900">

                    Let's Build Something Amazing

                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">

                    Tell us about your business goals and we'll recommend the
                    best digital strategy for your organization.

                </p>

            </div>

            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">

                <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                />

                <FormInput
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                />

            </div>

            {/* Row 2 */}

            <div className="mt-2 grid gap-6 md:grid-cols-2">

                <FormInput
                    label="Business Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                />

                <FormInput
                    label="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                />

            </div>

            {/* Row 3 */}

            <div className="mt-2 grid gap-6 md:grid-cols-2">

                <FormSelect
                    label="Service Interested In"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                    error={errors.service}
                    required
                />

                <FormSelect
                    label="Estimated Budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                />

            </div>

            {/* Objective */}

            <div className="mt-2">

                <FormSelect
                    label="Project Objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    options={objectiveOptions}
                />

            </div>

            {/* Message */}

            <div className="mt-2">

                <FormTextarea
                    label="Project Details"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={6}
                />

            </div>

            {/* Checkbox */}

            <label className="mt-6 flex cursor-pointer items-start gap-3">

                <input
                    type="checkbox"
                    name="consultation"
                    checked={formData.consultation}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-slate-600">

                    I'd like to schedule a
                    <strong className="mx-1 font-semibold text-slate-900">

                        FREE consultation

                    </strong>

                    with your experts.

                </span>

            </label>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <p className="font-medium text-slate-700">

                        🔒 Your information is secure.

                    </p>

                    <p className="mt-1 text-sm text-slate-500">

                        We never share your details with third parties.

                    </p>

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >

                    <AnimatePresence mode="wait">

                        {loading ? (

                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3"
                            >

                                <Loader2
                                    size={20}
                                    className="animate-spin"
                                />

                                Sending...

                            </motion.div>

                        ) : (

                            <motion.div
                                key="send"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3"
                            >

                                Send Inquiry

                                <Send size={18} />

                            </motion.div>

                        )}

                    </AnimatePresence>

                </button>

            </div>

        </motion.form>
    );
}    