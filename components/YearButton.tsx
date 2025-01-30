import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-slateBlue bg-slate-500 dark:hover:border-transparent dark:text-white text-white hover:border-transparent"
          : "dark:bg-[#0b0c1f] bg-zinc-50 dark:text-white text-zinc-800 dark:border-slate-900"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
