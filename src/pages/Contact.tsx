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
                    href="tel:+18004810016"
                    className="text-lg text-gray-800 hover:text-primary"
                  >
                    +1 (800) 481-0016
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
                  <div className="mt-8 w-full max-w-md mx-auto bg-gray-900 rounded-xl shadow-2xl p-6 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-white font-bold text-2xl tracking-wider">Hearth</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    </div>
                    <div className="text-center pt-4">
                      <p className="text-gray-300 text-lg">
                        Explore 0% APR financing for your project
                      </p>
                    </div>
                    <div className="pt-4 flex justify-center">
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                            onClick={() => window.open("https://app.gethearth.com/financing/56577/100041/prequalify?utm_campaign=56577&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=100041", "_blank")}
                        >
                          See options
                        </button>
                    </div>
                    <div className="flex justify-between items-center text-gray-400 text-xs">
                        <span>**** **** **** 1234</span>
                        <span>VALID 12/29</span>
                    </div>
                  </div>
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
