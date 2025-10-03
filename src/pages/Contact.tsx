import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import plumberImage from "@/assets/plumber-transparent-reverse.webp";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Invalid email address.").optional().or(z.literal("")),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  reason: z.string({ required_error: "Please select a reason." }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://beta.libertyplumbing.us/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          phone: values.phone,
          service: values.reason,
          message: values.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "We've received your message and will get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section
          className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/src/assets/bunner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              We're here to handle your plumbing and electrical issues with
              professionalism and care
            </p>
          </div>
        </section>

        {/* Three Column Info Section */}
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
                  <h3 className="text-xl font-bold">Mail for any inquries:</h3>
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

        {/* Main Content */}
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

              {/* Right Side: Contact Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Request for a fee quote now!
                </h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Contact</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a reason" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="schedule-service">
                                Schedule Service
                              </SelectItem>
                              <SelectItem value="question">Question</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="emergency-service">
                                Emergency Service
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help..."
                              className="resize-none"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Send now"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
