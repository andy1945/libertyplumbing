import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Banner from "@/components/Banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Do you offer 24/7 emergency services?",
      answer: "Yes! We provide round-the-clock emergency plumbing and electrical services. Whether it's a burst pipe at midnight or an electrical issue on a holiday, our team is always ready to help. Simply call +1 (267) 688-8612 anytime.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Absolutely. All our plumbers and electricians are fully licensed, certified, and insured. We maintain the highest professional standards and carry comprehensive liability insurance for your peace of mind.",
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "We strive to respond to emergency calls within 1-2 hours, depending on your location and the time of day. Our dispatch team prioritizes urgent situations to ensure you get help as quickly as possible.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free, no-obligation estimates for most services. Contact us with details about your project, and we'll provide a detailed quote. For emergency services, we'll assess the situation on-site before proceeding with repairs.",
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve Philadelphia, PA and surrounding areas. If you're unsure whether we cover your location, please give us a call, and we'll be happy to confirm our service area.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), checks, and digital payment methods. Payment is typically due upon completion of the service.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. The specific warranty terms depend on the type of service provided. We'll clearly explain all warranty details before starting any work.",
    },
    {
      question: "Can you help with both residential and commercial properties?",
      answer: "Yes! We provide services for both residential and commercial properties. Our team has experience with everything from single-family homes to large commercial buildings.",
    },
    {
      question: "How often should I schedule preventive maintenance?",
      answer: "We recommend annual inspections for most plumbing and electrical systems. Regular maintenance can help identify potential issues before they become costly emergencies and extend the life of your systems.",
    },
    {
      question: "What should I do in case of a plumbing emergency?",
      answer: "First, turn off the main water supply if possible. Then call us immediately at +1 (267) 688-8612. Our emergency team will guide you through any immediate steps you can take while we dispatch a technician to your location.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Banner 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our plumbing and electrical services"
        />

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still Have Questions */}
            <div className="mt-12 text-center bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our friendly team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+12676888612" className="inline-block">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                    Call: +1 (267) 688-8612
                  </button>
                </a>
                <a href="/contact" className="inline-block">
                  <button className="border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;