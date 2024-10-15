import { defineField } from "sanity";
import { BiBriefcase } from "react-icons/bi";

const achievements = {
  name: "achievements",
  title: "Achievements",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "achievementImage",
      title: "Achievement Image",
      type: "image",
      description: "Upload an image for the achievement",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "achievementTitle",
      title: "Achievement Title",
      type: "string",
    },
  ],
};

export default achievements;
