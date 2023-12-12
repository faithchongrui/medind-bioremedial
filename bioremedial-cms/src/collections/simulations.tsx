import { buildCollection, buildProperty, EntityReference } from "firecms";
import { keywordCollection } from "./keywords";

export type Simulation = {
    description: string,
    image: string,
    title: string,
    unit: string,
}

export const simulationsCollection = buildCollection<Simulation> ({
    name: "Simulations",
    singularName: "simulation",
    path: "simulations",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
    ],
    properties: {
        description: {
            name: "description",
            validation: { required: true },
            dataType: "string"
        },
        image: buildProperty({
            name: "simulation",
            dataType: "string",
            storage: {
                mediaType: "image",
                storagePath: "images",
                acceptedFiles: ["image/*"],
                metadata: {
                    cacheControl: "max-age=1000000"
                }
            }
        }),
        title: {
            name: "title",
            validation: { required: true },
            dataType: "string"
        },
        unit: {
            name: "unit",
            validation: { required: true },
            dataType: "string"
        },
    }
})