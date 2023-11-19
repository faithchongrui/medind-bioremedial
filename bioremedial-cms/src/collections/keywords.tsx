import { buildCollection, buildProperty, EntityReference } from "firecms";

export type Keyword = {
    meaning: string,
    word: string
}

export const keywordCollection = buildCollection<Keyword> ({
    name: "Keywords",
    singularName: "keyword",
    path: "keywords",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        
    ],
    properties: {
        meaning: {
            name: "Meaning",
            validation: { required: true },
            dataType: "string"
        },
        word: {
            name: "Word",
            validation: { required: true },
            dataType: "string"
        }
        
    }
})