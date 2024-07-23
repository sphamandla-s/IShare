"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "./ui/form"
import CustomFormField from "./shared/CustomFormField"
import { FormFieldType } from "@/types"
import { PaymentFrequency, SpaceType } from "@/constants"
import { SelectItem } from "./ui/select"
import { Button } from "./ui/button"
import { NewListingFormSchema } from "@/lib/validators"



function NewListingForm() {

    const form = useForm<z.infer<typeof NewListingFormSchema>>({
        resolver: zodResolver(NewListingFormSchema),
        defaultValues: {
            title: "",
            location: "",
            price: "",
            paymentFrequency: undefined,
            spaceType: undefined,
            description: "",
            contactInfo: "",
            availableFrom: undefined,
            size: "",
            rules: "",
            images: null,
        },
    })


    function onSubmit(values: z.infer<typeof NewListingFormSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
                <section className="mb-12 space-y-4">
                    <h1 className="header">New Listing</h1>
                    <p className="text-dark-700">
                        Create a new Listing in 10 seconds.
                    </p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="title"
                    label="Title"
                    placeholder="Space Title"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="location"
                    label="Location"
                    placeholder="Space Location"
                />

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="price"
                        label="Price"
                        placeholder="Space Price"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="paymentFrequency"
                        label="Payment Frequency"
                        placeholder="Select a Payment Frequency"
                    >
                        {PaymentFrequency.map((frequency, i) => (
                            <SelectItem key={i} value={frequency}>
                                <p>{frequency}</p>
                            </SelectItem>
                        ))}
                    </CustomFormField>
                </div>

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="spaceType"
                        label="Space Type"
                        placeholder="Select a Space Type"
                    >
                        {SpaceType.map((type, i) => (
                            <SelectItem key={i} value={type}>
                                <p>{type}</p>
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="availableFrom"
                    label="Available From"
                    placeholder="Select Date"
                />
                </div>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="size"
                    label="Size"
                    placeholder="Space Size (e.g., square meters or feet)"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="contactInfo"
                    label="Contact Information"
                    placeholder="Email or phone number"
                />

                

                {/* <CustomFormField
                    fieldType={FormFieldType.MULTI_SELECT}
                    control={form.control}
                    name="amenities"
                    label="Amenities"
                    placeholder="Select Amenities"
                >
                    {Amenities.map((amenity, i) => (
                        <SelectItem key={i} value={amenity}>
                            <p>{amenity}</p>
                        </SelectItem>
                    ))}
                </CustomFormField> */}

                <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="description"
                    label="Description"
                    placeholder="Write the space description"
                />

                <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="rules"
                    label="Rules/Policies"
                    placeholder="Any specific rules or policies"
                />

                {/* <CustomFormField
                    fieldType={FormFieldType.FILE}
                    control={form.control}
                    name="floorPlan"
                    label="Floor Plan"
                />

                <CustomFormField
                    fieldType={FormFieldType.FILE}
                    control={form.control}
                    name="images"
                    label="Upload Images"
                    multiple={true}
                /> */}

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export default NewListingForm
