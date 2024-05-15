import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { compareDesc, parseISO } from "date-fns";
import { Blog } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortBlogs = ({ blogs }: { blogs: Blog[] | undefined }): Blog[] => {
  if (!blogs) {
    return [];
  }
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
