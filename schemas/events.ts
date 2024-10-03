import { defineField } from "sanity";
import { BiCalendar } from "react-icons/bi";

const events = {
  name: "events",
  title: "Events",
  type: "document",
  icon: BiCalendar,
  fields: [
    {
      name: "eventImage",
      title: "Event Image",
      type: "image",
      description: "Upload an image for the event",
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
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "eventDate",
      title: "Event Date",
      type: "datetime",
    },
  ],
};

export default events;
