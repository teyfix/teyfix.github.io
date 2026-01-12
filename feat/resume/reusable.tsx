"use client";

import { withHideable } from "@/components/hoc/hideable";
// ==================== Base Components ====================
import { classed } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { isValidElement } from "react";

export const Container = classed(
  "div",
  "mx-auto max-w-5xl px-3 py-4 font-sans text-gray-900 lg:px-6 print:p-0! print:font-serif",
);

export const Header = classed("header", "mb-4 border-b-2 border-gray-900 pb-4");

export const headingVariants = cva("font-bold", {
  variants: {
    level: {
      1: "text-lg tracking-tight uppercase lg:text-xl",
      2: "border-b border-gray-300 pb-1 text-sm font-bold text-gray-800 uppercase lg:text-base",
      3: "text-xs font-semibold lg:text-sm",
      4: "text-xs font-semibold",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export const Heading = ({
  level,
  ...props
}: React.ComponentProps<"h1" | "h2" | "h3" | "h4"> &
  VariantProps<typeof headingVariants>) => {
  const Cmp = `h${level || 1}` as const;

  return <Cmp {...props} className={headingVariants({ level })} />;
};

export const Section = withHideable(
  classed("section", "mb-4", {
    variants: {
      spacing: {
        sm: "mb-2",
        md: "mb-4",
        lg: "mb-6",
      },
    },
    defaultVariants: {
      spacing: "sm",
    },
  }),
);

export const Article = withHideable(classed("article", "mb-3"));

export const ArticleHeader = classed("div", "print:break-inside-avoid");

export const TextCmp = classed("p", "leading-snug", {
  variants: {
    size: {
      xs: "text-[11px]",
      sm: "text-xs",
      base: "text-sm",
      lg: "text-base",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-gray-800",
      muted: "text-gray-500",
      dark: "text-black",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "default",
  },
});

export function Text({
  as,
  ...props
}: React.ComponentProps<typeof TextCmp> & {
  as?: React.ElementType;
}) {
  const Cmp = as || "p";
  const textCmp = TextCmp(props);

  if (isValidElement(textCmp) && textCmp.props instanceof Object) {
    return <Cmp {...textCmp.props} />;
  }

  return <Cmp {...props} />;
}

// ==================== Contact Components ====================

export const Contact = classed(
  "div",
  "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px]",
);

export const ContactSection = classed(
  "div",
  "xs:grid-cols-2 grid w-full grid-cols-1 flex-wrap items-center gap-1 sm:flex md:gap-2",
);

export const ContactItem = classed(
  "div",
  "flex items-center gap-1 whitespace-nowrap [&>svg]:size-4 [&>svg]:shrink-0",
);

export const ContactLink = classed(
  "a",
  "transition-colors hover:text-blue-600",
  {
    variants: {
      variant: {
        default: "",
        underline: "underline hover:no-underline",
        bold: "font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// ==================== Experience Components ====================

export const ExperienceHeader = classed(
  "h3",
  "mb-0.5 flex flex-wrap items-baseline justify-between",
);

export const ExperienceTitle = classed("strong", "font-bold", {
  variants: {
    size: {
      base: "text-xs lg:text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export const ExperienceDetails = classed(
  "div",
  "mt-1 flex min-w-full items-baseline justify-between gap-2 lg:mt-0 lg:min-w-auto print:mt-0 print:min-w-auto",
);

export const ExperienceDate = classed(
  "span",
  "text-[11px] font-medium text-gray-600 italic",
);

export const TeamInfo = classed(
  "p",
  "mt-2 mb-2 text-[11px] text-gray-500 italic lg:mt-0 print:mt-0",
);

export const ProjectContainer = withHideable(
  classed("div", "mt-2 border-l border-gray-200 pl-3 print:break-inside-avoid"),
);

export const ProjectTitle = classed(
  "h4",
  "mb-1 text-xs font-bold text-gray-700",
);

export const TechStack = classed("p", "mt-1 text-[10px] text-gray-500");

// ==================== List Components ====================

export const List = classed(
  "ul",
  "ml-4 list-outside list-disc space-y-0.5 print:break-inside-avoid",
  {
    variants: {
      spacing: {
        sm: "space-y-0.5",
        md: "space-y-1",
        lg: "space-y-2",
      },
    },
    defaultVariants: {
      spacing: "sm",
    },
  },
);

export const ListItem = classed("li", "leading-tight text-gray-700", {
  variants: {
    size: {
      sm: "text-[11px]",
      base: "text-xs",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

// ==================== Callout Component ====================

export const Callout = classed("div", "my-2 border-l-2 bg-gray-50 p-2", {
  variants: {
    variant: {
      info: "border-blue-400",
      success: "border-green-400",
      warning: "border-yellow-400",
      default: "border-gray-400",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export const CalloutTitle = classed("h3", "mb-0.5 text-[11px] font-bold");

// ==================== Skills Components ====================

export const SkillsGrid = classed(
  "div",
  "grid gap-2 lg:grid-cols-2 print:grid-cols-2",
);

export const SkillCategory = withHideable(
  classed("div", "break-inside-avoid", {
    variants: {
      expand: {
        true: "lg:col-span-2 print:col-span-2",
      },
    },
  }),
);

export const SkillTitle = classed(
  "h3",
  "mb-1 border-b border-gray-100 text-xs font-bold",
);

export const SkillList = classed(
  "p",
  "text-[11px] leading-relaxed text-gray-600",
);

// ==================== Education Components ====================

export const EducationHeader = classed("div", "", {
  variants: {
    layout: {
      vertical: "grid",
      horizontal: "grid lg:flex print:flex",
    },
  },
  defaultVariants: {
    layout: "vertical",
  },
});

export const EducationNote = classed("p", "text-xs text-gray-500 italic");

// ==================== Footer ====================

export const Footer = classed(
  "footer",
  "mt-6 border-t border-gray-100 pt-4 text-center text-[10px] text-gray-400",
);
