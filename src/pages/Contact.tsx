import { Phone, Mail, MapPin } from "lucide-react";
import plumberImage from "@/assets/plumber-transparent-reverse.webp";
import bannerBg from "@/assets/bunner.jpg";
import { StepForm } from "@/components/ui/StepForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ElectricBorder from "@/components/ui/ElectricBorder";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section
          className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              We're here to handle your plumbing and electrical issues with
              professionalism and care.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Office address:</h3>
                  <p className="text-gray-600">
                    Liberty Plumbing and Electricals, Philadelphia, PA.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Call for help:</h3>
                  <a
                    href="tel:+12676888612"
                    className="text-lg text-gray-800 hover:text-primary"
                  >
                    +1 (267) 688-8612
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mail for any inquiries:</h3>
                  <a
                    href="mailto:Info@libertyplumbing.us"
                    className="text-lg text-gray-800 hover:text-primary"
                  >
                    Info@libertyplumbing.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="py-12">
          <div className="max-w-6xl w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side: Image */}
              <div className="hidden lg:flex items-center justify-center bg-gray-100">
                <img
                  src={plumberImage}
                  alt="Plumber"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Right Side: Form */}
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
              >
                <div className="p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Request for a free quote now!
                  </h2>
                  <StepForm />
                </div>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
