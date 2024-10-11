import { ElementType, MouseEventHandler, ReactNode } from "react";

export interface ProductCardProps {
  product: {
    newsAvatarUrl: string;
    category: string;
    date: string;
    newsContent: string;
    authorAvatarUrl: string;
    authorName: string;
    news_url: string;
    cta_action: () => void;
  };
}

export interface StatCardProps {
  imageUrl: string;
  chartUrl: string;
  chartBgColor: string;
  children: ReactNode;
}

export interface ContentProps {
  title: string;
  items: { icon: string; text: string }[];
  buttonLabel?: string;
  buttonLink?: string;
  isShowPieChart?: boolean;
}

export interface SectionProps {
  animation: string;
  children: ReactNode;
  className?: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  as?: "button" | "Link";
  color?: string;
  full?: boolean;
  variant?: "primary" | "secondary" | "dark";
  disabled?: boolean;
  loading?: boolean;
  icon?: ElementType;
  children?: ReactNode;
  id?: string;
  onClick?: MouseEventHandler;
  className: string;
  outline?: "black";
}
