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
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formSchema, defaultValues } from "./data.js";

export const StepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onFormSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      console.log("Submitting...");
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://beta.libertyplumbing.us/api/send-custom-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        let data;
        try {
          data = await response.json();
        } catch {
          data = {};
        }

        if (response.ok && data.success) {
          setShowSuccessDialog(true);
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
    },
    [form]
  );

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
          form.watch("serviceType"),
          (value) => form.setValue("serviceType", value)
        )}
        <div className="flex gap-4 w-full pt-4">
          <Button
            onClick={async () => {
              const isValid = await form.trigger("serviceType");
              if (isValid) {
                setStep(2);
              }
            }}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!form.watch("serviceType")}
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
          form.watch("plumbingService"),
          (value) => form.setValue("plumbingService", value)
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
            onClick={async () => {
              const isValid = await form.trigger("plumbingService");
              if (isValid) {
                setStep(3);
              }
            }}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!form.watch("plumbingService")}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (step === 3) {
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
          form.watch("faucetService"),
          (value) => form.setValue("faucetService", value)
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
            onClick={async () => {
              const isValid = await form.trigger("faucetService");
              if (isValid) {
                setStep(4);
              }
            }}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!form.watch("faucetService")}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold text-center">
          Is this an emergency?
        </h3>
        {renderRadioGroup(["Yes", "No"], form.watch("isEmergency"), (value) =>
          form.setValue("isEmergency", value)
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
            onClick={async () => {
              const isValid = await form.trigger("isEmergency");
              if (isValid) {
                setStep(5);
              }
            }}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={!form.watch("isEmergency")}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (step === 5) {
    return (
      <Card>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-4 p-4"
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
                onClick={() => setStep(4)}
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
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Send now"
                )}
              </Button>
            </div>
          </form>
        </Form>
        <AlertDialog
          open={showSuccessDialog}
          onOpenChange={setShowSuccessDialog}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Message Sent!</AlertDialogTitle>
              <AlertDialogDescription>
                Thank you for contacting Liberty Plumbing & Electricals! One of
                our team members will be in touch with you shortly. If you
                require immediate assistance, please don't hesitate to call us
                or chat with one of our agents now
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => {
                  form.reset();
                  setStep(1);
                  setShowSuccessDialog(false);
                }}
              >
                Close
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>
    );
  }

  return null;
};
