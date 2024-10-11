import { ReactNode } from "react";

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
    chartDescription: ReactNode;
  }
  
export  interface ContentProps {
    title: string;
    items: { icon: string; text: string }[];
    buttonLabel?: string;
    buttonLink?: string;
    isShowPieChart?: boolean;
  }
  