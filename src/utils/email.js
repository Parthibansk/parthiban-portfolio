import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  }
}

export const sendPortfolioEmail = async (formData) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are not configured.')
  }

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: 'Portfolio inquiry',
    },
  )
}
