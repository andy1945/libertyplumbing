import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z
    .string()
    .email("Invalid email address.")
    .optional()
    .or(z.literal("")),
  phone: z.string().min(1, { message: "Phone number is required." }),
  message: z.string().min(1, { message: "Message is required." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
  plumbingService: z.string().optional(),
  faucetService: z.string().optional(),
  waterHeaterService: z.string().optional(),
  septicService: z.string().optional(),
  otherPlumbingService: z.string().optional(),
  fixtureService: z.string().optional(),
  isEmergency: z.string().optional(),
  electricalService: z.string().optional(),
  lightsSwitchesService: z.string().optional(),
  wiringPanelService: z.string().optional(),
  electricalRooms: z.array(z.string()).optional(),
  hasBoughtCharger: z.string().optional(),
  moreOptions: z.string().optional(),
  generatorWork: z.string().optional(),
  fanType: z.string().optional(),
  smartHomeWork: z.string().optional(),
  lightningProtectionWork: z.string().optional(),
});

export const defaultValues = {
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
  electricalService: "",
  lightsSwitchesService: "",
  wiringPanelService: "",
  electricalRooms: [],
  hasBoughtCharger: "",
  moreOptions: "",
  generatorWork: "",
  fanType: "",
  smartHomeWork: "",
  lightningProtectionWork: "",
};
