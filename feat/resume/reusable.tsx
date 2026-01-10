// ==================== Base Components ====================
import { classed } from "@/lib/utils";
import { ComponentPropsWithoutRef, isValidElement, ReactNode } from "react";

export const Container = classed(
  "div",
  "max-w-5xl mx-auto p-8 font-sans print:font-serif"
);

export const Header = classed("header", "mb-8");

export const Heading = classed("h1", "text-4xl font-bold mb-4", {
  variants: {
    level: {
      1: "text-2xl font-bold",
      2: "text-xl font-bold border-b-2 border-gray-300 pb-2",
      3: "text-lg font-semibold",
      4: "text-md font-semibold",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export const Section = classed("section", "mb-8", {
  variants: {
    spacing: {
      sm: "mb-4",
      md: "mb-8",
      lg: "mb-12",
    },
  },
  defaultVariants: {
    spacing: "sm",
  },
});

export const Article = classed(
  "article",
  "mb-6 pb-6 border-b border-gray-200 last:border-b-0"
);

export const TextCmp = classed("p", " leading-relaxed", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "",
      muted: "",
      dark: "",
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

  // For passing type-check
  if (isValidElement(textCmp) && textCmp.props instanceof Object) {
    return <Cmp {...textCmp.props} />;
  }

  return <Cmp {...props} />;
}

// ==================== Contact Components ====================

export const Contact = classed("div", "grid text-sm", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    spacing: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    spacing: "md",
  },
});

export const ContactSection = classed(
  "div",
  "flex flex-wrap justify-between gap-4 text-sm text-gray-700"
);

export const ContactItem = classed("div", "flex items-center gap-2");

export const ContactLink = classed(
  "a",
  "hover:text-blue-600 transition-colors",
  {
    variants: {
      variant: {
        default: "hover:text-blue-600",
        underline: "hover:text-blue-600 hover:underline",
        bold: "hover:text-blue-600 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ==================== Experience Components ====================

export const ExperienceHeader = classed(
  "div",
  "flex flex-wrap justify-between items-start mb-2"
);

export const ExperienceTitle = classed("strong", "font-semibold", {
  variants: {
    size: {
      base: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export const ExperienceDetails = classed("div", "flex flex-wrap gap-4");

export const ExperienceDate = classed("em", "italic text-gray-600 text-sm");

export const TeamInfo = classed(
  "p",
  "text-sm text-gray-600 mb-3 flex items-start gap-2"
);

export const ProjectContainer = classed("div", "ml-4 mt-4 first:mt-0");

export const ProjectTitle = classed("h4", "font-semibold text-md mb-2");

export const TechStack = classed(
  "p",
  "text-xs text-gray-600 flex items-start gap-2"
);

// ==================== List Components ====================

export const List = classed("ul", "list-disc list-inside space-y-2 ml-4", {
  variants: {
    spacing: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    },
    style: {
      disc: "list-disc",
      decimal: "list-decimal",
      none: "list-none",
    },
  },
  defaultVariants: {
    spacing: "md",
    style: "disc",
  },
});

export const ListItem = classed("li", "text-gray-700", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

// ==================== Callout Component ====================

export const Callout = classed("div", "mt-4 p-4 border-l-4 rounded-r", {
  variants: {
    variant: {
      info: "bg-blue-50 border-blue-500",
      success: "bg-green-50 border-green-500",
      warning: "bg-yellow-50 border-yellow-500",
      default: "bg-gray-50 border-gray-500",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export const CalloutTitle = classed("h3", "font-semibold mb-2");

// ==================== Competency Components ====================

export const CompetencyGrid = classed("div", "space-y-2");

export const CompetencyItem = classed("div", "");

export const CompetencyTitle = classed("h3", "font-semibold text-lg mb-2");

export const CompetencyContent = classed("p", "text-gray-700");

// ==================== Skills Components ====================

export const SkillsGrid = classed("div", "space-y-3");

export const SkillCategory = classed("div", "");

export const SkillTitle = classed("h3", "font-semibold mb-1");

export const SkillList = classed("p", "text-sm text-gray-700");

// ==================== Education Components ====================

export const EducationHeader = classed(
  "div",
  "flex flex-wrap justify-between items-start mb-2"
);

export const EducationNote = classed("p", "text-sm italic text-gray-600 mt-1");

// ==================== Footer ====================

export const Footer = classed(
  "footer",
  "text-center text-sm text-gray-500 mt-12 pt-6 border-t border-gray-300"
);

// ==================== Helper Components ====================

interface IconProps extends ComponentPropsWithoutRef<"span"> {
  children: ReactNode;
}

export const IconWrapper = ({ children, className, ...props }: IconProps) => (
  <span className={className} {...props}>
    {children}
  </span>
);
