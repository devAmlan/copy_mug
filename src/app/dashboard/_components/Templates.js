import { nanoid } from "nanoid";
export default [
  {
    id: nanoid(),
    title: "User persona Generator",
    description:
      "Understand your ideal customer without running 50 interviews. Know exactly how to win their hearts.",
    icon: "",
    aiPrompt:
      "Take this 2 inputs, business and audience and generate user persona for this audience.Give me result in bullet points",
    slug: "generate-user-perosona",
    form: [
      {
        id: nanoid(),
        label: "Your business",
        field: "input",
        name: "business",
        placeholder: "example - Startup directory",
        required: true,
      },
      {
        id: nanoid(),
        label: "Your target audience segment",
        field: "input",
        name: "audience",
        placeholder: "example - Solo founders and indie hackers",
        required: true,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Twitter Post Idea Generator",
    description:
      " Generate unique and engaging tweet ideas to enhance your twitter game effortlessly",
    icon: "",
    aiPrompt:
      "take 2 inputs business and topic and write a tweet, within 20-30 words.Give me result in bullet points",
    slug: "generate-twitter-post-ideas",
    form: [
      {
        label: "Your business",
        field: "input",
        name: "business",
        placeholder: "example - Solo founders and indie hackers",
        required: true,
      },
      {
        label: "Describe your topic",
        field: "textarea",
        name: "topic",
        placeholder: "example - Solo founders and indie hackers",
        required: true,
      },
    ],
  },
];
