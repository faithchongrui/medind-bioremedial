import { buildCollection, buildProperty, EntityReference } from "firecms";
import { keywordCollection } from "./keywords";

export type Activity = {
    set: string,
    unit: string
}

export const activitiesCollection = buildCollection<Activity> ({
    name: "Activities",
    singularName: "activity",
    path: "activities",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        keywordCollection
    ],
    properties: {
        set: {
            name: "Set",
            validation: { required: true },
            dataType: "string"
        },
        unit: {
            name: "Unit",
            validation: { required: true },
            dataType: "string"
        }
    }
})