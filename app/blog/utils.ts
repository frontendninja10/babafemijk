import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};
console.log(path.join(process.cwd(), "app", "blog", "posts"));
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

// export function formatDate(date: string, includeRelative = false) {
//   let currentDate = new Date();
//   if (!date.includes("T")) {
//     date = `${date}T00:00:00`;
//   }
//   let targetDate = new Date(date);

//   let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
//   let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
//   let daysAgo = currentDate.getDate() - targetDate.getDate();

//   let formattedDate = "";

//   if (yearsAgo > 0) {
//     formattedDate = `${yearsAgo}y ago`;
//   } else if (monthsAgo > 0) {
//     formattedDate = `${monthsAgo}mo ago`;
//   } else if (daysAgo > 0) {
//     formattedDate = `${daysAgo}d ago`;
//   } else {
//     formattedDate = "Today";
//   }

//   let fullDate = targetDate.toLocaleString("en-us", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   if (!includeRelative) {
//     return fullDate;
//   }

//   return `${fullDate} (${formattedDate})`;
// }

export function formatDate(date: string, includeYear: boolean = false): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    ...(includeYear && { year: "numeric" }),
  };

  return new Date(date).toLocaleDateString("en-US", options);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
