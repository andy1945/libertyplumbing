"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z
    .string()
    .email("Invalid email address.")
    .optional()
    .or(z.literal("")),
  phone: z.string().min(1, { message: "Phone number is required." }),
  reason: z.string().min(1, { message: "Please select a reason." }),
  message: z.string().min(1, { message: "Message is required." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
  plumbingService: z.string().optional(),
  faucetService: z.string().optional(),
  waterHeaterService: z.string().optional(),
  septicService: z.string().optional(),
  otherPlumbingService: z.string().optional(),
  fixtureService: z.string().optional(),
  isEmergency: z.string().optional(),
});

export const StepForm = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [plumbingService, setPlumbingService] = useState("");
  const [faucetService, setFaucetService] = useState("");
  const [waterHeaterService, setWaterHeaterService] = useState("");
  const [septicService, setSepticService] = useState("");
  const [otherPlumbingService, setOtherPlumbingService] = useState("");
  const [fixtureService, setFixtureService] = useState("");
  const [isEmergency, setIsEmergency] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      reason: "",
      serviceType: "",
      plumbingService: "",
      faucetService: "",
      waterHeaterService: "",
      septicService: "",
      otherPlumbingService: "",
      fixtureService: "",
      isEmergency: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://beta.libertyplumbing.us/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            serviceType,
            plumbingService,
            faucetService,
            waterHeaterService,
            septicService,
            otherPlumbingService,
            fixtureService,
            isEmergency,
          }),
        }
      );

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok && data.success) {
        toast({
          title: "Message Sent!",
          description:
            "We've received your message and will get back to you shortly.",
        });
        form.reset();
        setStep(1);
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleServiceTypeSelection = (type: string) => {
    setServiceType(type);
    form.setValue("serviceType", type);
  };

  const goToNextStep = () => {
    if (serviceType === "Plumbing") {
      setStep(2);
    } else {
      setStep(5);
    }
  };

  const handlePlumbingServiceSelection = (service: string) => {
    setPlumbingService(service);
    form.setValue("plumbingService", service);
  };

  const goToNextStepFromPlumbing = () => {
    if (
      plumbingService === "Faucets, fixtures, drains or pipes" ||
      plumbingService === "Water heater" ||
      plumbingService === "Septic system, sewer or water main" ||
      plumbingService === "Other"
    ) {
      setStep(3);
    } else {
      setStep(5);
    }
  };

  const handleFaucetServiceSelection = (service: string) => {
    setFaucetService(service);
    form.setValue("faucetService", service);
  };

  const goToNextStepFromFaucet = () => {
    if (
      faucetService === "Need to install/replace a fixture" ||
      faucetService === "Leaking pipe/faucet" ||
      faucetService === "Clogged drain/toilet" ||
      faucetService === "Other"
    ) {
      setStep(4);
    } else {
      setStep(5);
    }
  };

  const handleWaterHeaterServiceSelection = (service: string) => {
    setWaterHeaterService(service);
    form.setValue("waterHeaterService", service);
  };

  const handleSepticServiceSelection = (service: string) => {
    setSepticService(service);
    form.setValue("septicService", service);
  };

  const handleOtherPlumbingServiceSelection = (service: string) => {
    setOtherPlumbingService(service);
    form.setValue("otherPlumbingService", service);
  };

  const handleFixtureServiceSelection = (service: string) => {
    setFixtureService(service);
    form.setValue("fixtureService", service);
  };

  const handleEmergencySelection = (value: string) => {
    setIsEmergency(value);
    form.setValue("isEmergency", value);
  };

  const renderRadioGroup = (
    options: string[],
    value: string,
    onValueChange: (value: string) => void
  ) => (
    <Card className="w-full">
      <RadioGroup onValueChange={onValueChange} value={value} className="p-4">
        {options.map((option, index) => (
          <div key={option}>
            <Label
              htmlFor={option}
              className={`flex items-center p-4 rounded-lg cursor-pointer ${
                value === option ? "bg-gray-100" : ""
              }`}
            >
              <RadioGroupItem value={option} id={option} className="mr-2" />
              {option}
            </Label>
            {index < options.length - 1 && <Separator />}
          </div>
        ))}
      </RadioGroup>
    </Card>
  );

  if (step === 1) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold text-center">
          What type of service do you need?
        </h3>
        {renderRadioGroup(
          ["Electrical", "Plumbing"],
          serviceType,
          handleServiceTypeSelection
        )}
        <div className="flex gap-4 w-full pt-4">
          <Button
            onClick={goToNextStep}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!serviceType}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold text-center">
          What plumbing do you need help with?
        </h3>
        {renderRadioGroup(
          [
            "Faucets, fixtures, drains or pipes",
            "Water heater",
            "Septic system, sewer or water main",
            "Other",
          ],
          plumbingService,
          handlePlumbingServiceSelection
        )}
        <div className="flex gap-4 w-full pt-4">
          <Button
            type="button"
            onClick={() => setStep(1)}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
            size="lg"
          >
            Back
          </Button>
          <Button
            onClick={goToNextStepFromPlumbing}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!plumbingService}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (step === 3) {
    if (plumbingService === "Faucets, fixtures, drains or pipes") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            What seems to be the problem?
          </h3>
          {renderRadioGroup(
            [
              "Need to install/replace a fixture",
              "Leaking pipe/faucet",
              "Clogged drain/toilet",
              "Other",
            ],
            faucetService,
            handleFaucetServiceSelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={goToNextStepFromFaucet}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!faucetService}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
    if (plumbingService === "Water heater") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            What kind of water heater service do you need?
          </h3>
          {renderRadioGroup(
            ["Install or replace", "Repair"],
            waterHeaterService,
            handleWaterHeaterServiceSelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(5)}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!waterHeaterService}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
    if (plumbingService === "Septic system, sewer or water main") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            Which service do you need?
          </h3>
          {renderRadioGroup(
            ["Septic system", "Sewer main", "Water main"],
            septicService,
            handleSepticServiceSelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(5)}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!septicService}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
    if (plumbingService === "Other") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            What kind of plumbing work do you need help with?
          </h3>
          {renderRadioGroup(
            [
              "Install or replace shower/tub",
              "Install plumbing for addition/remodel",
              "Gas piping",
              "Pumps",
            ],
            otherPlumbingService,
            handleOtherPlumbingServiceSelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(5)}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!otherPlumbingService}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
  }

  if (step === 4) {
    if (faucetService === "Need to install/replace a fixture") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            What kind of fixture do you need help with?
          </h3>
          {renderRadioGroup(
            ["Sink/faucet", "Toilet", "Shower/tub", "Pipe", "Other"],
            fixtureService,
            handleFixtureServiceSelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(3)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(5)}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!fixtureService}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
    if (
      faucetService === "Leaking pipe/faucet" ||
      faucetService === "Clogged drain/toilet" ||
      faucetService === "Other"
    ) {
      return (
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-center">
            Is this an emergency?
          </h3>
          {renderRadioGroup(
            ["Yes", "No"],
            isEmergency,
            handleEmergencySelection
          )}
          <div className="flex gap-4 w-full pt-4">
            <Button
              type="button"
              onClick={() => setStep(3)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(5)}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={!isEmergency}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
  }

  return (
    <Card className="bg-[#9DDCF6]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
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
          <Separator />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
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
          <Separator />
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
          <Separator />
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
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={() =>
                setStep(
                  faucetService === "Need to install/replace a fixture" ||
                    faucetService === "Leaking pipe/faucet" ||
                    faucetService === "Clogged drain/toilet" ||
                    faucetService === "Other"
                    ? 4
                    : 3
                )
              }
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
              size="lg"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : "Send now"}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
