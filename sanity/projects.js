export default {
  name: "projects",
  type: "document",
  title: "Проекты",
  fields: [
    { type: "string", title: "Дата", name: "date" },
    { type: "string", title: "Git", name: "git" },
    { type: "string", title: "LinkTo", name: "linkto" },
    { type: "string", title: "Название", name: "title" },
    { type: "string", title: "Ссылка", name: "link" },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, 
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
    {
      type: "array",
      title: "Описание",
      name: "description",
      of: [{ type: "block" }],
    },
    {
      type: "array",
      title: "Скриншоты",
      name: "images",
      of: [{ type: "image" }],
    },
    {
      title: "Теги",
      type: "array",
      name: "tags",
      of: [
        {
          type: "object",
          name: "tag",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "color" },
          ],
        },
      ],
    },
  ],
};
