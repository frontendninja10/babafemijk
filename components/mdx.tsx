import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { codeToHtml } from "shiki";
import { BlogPosts } from "./BlogPosts";
import ContributionGraph from "./ContributionGraph";
import BankApp from "./blog/react-state-mgt/BankApp";
import { Sandpack } from "@codesandbox/sandpack-react";
import Editable from "./blog/react-state-mgt/Editable";
import ExampleWithState from "./blog/react-state-mgt/ExampleWithState";
import WeeklyFrontendGoals from "./blog/react-state-mgt/WeeklyFrontendGoals";
import Quiz from "./blog/react-state-mgt/Quiz";
import rehypeStarryNight from "rehype-starry-night";
import SharePost from "./SharePost";

function Table({ data }: any) {
  let headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// async function Code({ children, ...props }: any) {
//   let codeHTML = await codeToHtml(children, {
//     lang: "ts",
//     theme: "aurora-x",
//   });
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }

async function Code({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const lang = className?.replace("language-", "") || "tsx";
  const codeHTML = await codeToHtml(children.trim(), {
    lang,
    theme: "catppuccin-frappe",
  });

  return (
    <pre
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      className="shiki-wrapper"
    />
  );
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: any) {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  headings: {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
  },

  custom: {
    Image: RoundedImage,
    a: CustomLink,
    Table,
    pre: (props: any) => <>{props.children}</>, // Prevent MDX from wrapping in <pre>
    code: (props: any) => {
      const { children, className } = props;
      if (!className) return <code {...props}>{children}</code>; // Handle inline code
      return <Code className={className}>{children}</Code>;
    },
  },
  blog: {
    BlogPosts,
    ContributionGraph,
    BankApp,
    Editable,
    ExampleWithState,
    WeeklyFrontendGoals,
    Quiz,
    SharePost,
  },
  sandpack: Sandpack,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...components.headings, // Spread headings
        ...components.custom, // Spread custom components
        ...components.blog, // Spread blog components
        ...(props.components || {}), // Merge any additional components passed in props
      }}
    />
  );
}
