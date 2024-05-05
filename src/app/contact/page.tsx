import ContactPage from "@/modules/contact";
import ContactForm from "@/modules/contact/ContactForm";
import ContactMedium from "@/modules/contact/ContactMedium";

export default function Contact() {
  return (
    <main className="">
      <ContactPage />
      <ContactMedium />
      <ContactForm />
    </main>
  );
}
