import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// types.ts
export interface Blog {
  _id?: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  image: {
    filePath: string;
    blurhashDataUrl: string;
    width: number;
    height: number;
  };
  isPublished: boolean;
  author: string;
  tags: string[];
  url: string;
  readingTime: {
    text: string;
  };
}
