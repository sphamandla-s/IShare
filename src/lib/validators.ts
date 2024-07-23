import { PaymentFrequency, SpaceType, } from "@/constants";
import { z } from "zod";
import { createEnum } from "./utils";

const paymentFrequencyEnum = createEnum(PaymentFrequency);
const spaceTypeEnum = createEnum(SpaceType);

const phoneNumberValidation = (phone: string) => {
    const regex = /^\d{10,15}$/;
    return regex.test(phone);
};

export const NewListingFormSchema = z.object({
    title: z.string().min(2).max(50),
    location: z.string().min(2).max(100),
    price: z.string().refine(value => !isNaN(parseFloat(value)), {
        message: "Price must be a valid number"
    }).refine(value => parseFloat(value) > 0, {
        message: "Price must be greater than 0"
    }),
    paymentFrequency: paymentFrequencyEnum,
    spaceType: spaceTypeEnum,
    description: z.string().min(10),
    contactInfo: z.string().refine(phoneNumberValidation, {
        message: "Phone number must be between 10 and 15 digits"
    }),
    availableFrom: z.date(),
    // duration: z.string(),
    size: z.string(),
    rules: z.string().optional(),
    images: z.any().optional(),
});
