import {defineField, defineType} from 'sanity'

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "date",
            type: "datetime"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "education", title: "Education"},
                ]
            }
        }),
        defineField({
            name: "link",
            type: "url",
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        }),
    ],
});