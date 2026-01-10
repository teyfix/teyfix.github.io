// ==================== Base Components ====================
import { classed } from "@/lib/utils";
import { isValidElement } from "react";

export const Container = classed(
  "div",
  "max-w-5xl mx-auto px-3 lg:px-6 py-4 print:px-0 print:py-0 font-sans print:font-serif text-gray-900"
);

export const Header = classed("header", "mb-4 border-b-2 border-gray-900 pb-4");

export const Heading = classed("h1", "font-bold", {
  variants: {
    level: {
      1: "text-lg lg:text-xl uppercase tracking-tight",
      2: "text-sm lg:text-base font-bold border-b border-gray-300 pb-1 uppercase text-gray-800",
      3: "text-xs lg:text-sm font-semibold",
      4: "text-xs font-semibold",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export const Section = classed("section", "mb-4", {
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
});

export const Article = classed("article", "mb-3");

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
  "flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px]"
);

export const ContactSection = classed(
  "div",
  "grid grid-cols-1 xs:grid-cols-2 w-full sm:flex flex-wrap items-center gap-1 md:gap-2"
);

export const ContactItem = classed(
  "div",
  "flex items-center gap-1 [&>svg]:size-4 [&>svg]:shrink-0 whitespace-nowrap"
);

export const ContactLink = classed(
  "a",
  "hover:text-blue-600 transition-colors",
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
  }
);

// ==================== Experience Components ====================

export const ExperienceHeader = classed(
  "div",
  "flex flex-wrap justify-between items-baseline mb-0.5"
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
  "flex gap-2 items-baseline min-w-full lg:min-w-auto justify-between mt-1 lg:mt-0"
);

export const ExperienceDate = classed(
  "span",
  "text-[11px] font-medium text-gray-600 italic"
);

export const TeamInfo = classed(
  "p",
  "text-[11px] text-gray-500 mb-2 italic mt-2 lg:mt-0"
);

export const ProjectContainer = classed(
  "div",
  "mt-2 pl-3 border-l border-gray-200 print:break-inside-avoid"
);

export const ProjectTitle = classed(
  "h4",
  "font-bold text-xs mb-1 text-gray-700"
);

export const TechStack = classed("p", "text-[10px] text-gray-500 mt-1");

// ==================== List Components ====================

export const List = classed(
  "ul",
  "list-disc list-outside space-y-0.5 ml-4 print:break-inside-avoid",
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
  }
);

export const ListItem = classed("li", "text-gray-700 leading-tight", {
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

export const Callout = classed("div", "my-2 p-2 border-l-2 bg-gray-50", {
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

export const CalloutTitle = classed("h3", "font-bold text-[11px] mb-0.5");

// ==================== Competency Components ====================

export const CompetencyGrid = classed(
  "div",
  "grid grid-cols-1 lg:grid-cols-2",
  {
    variants: {
      spacing: {
        none: "",
        sm: "gap-2",
      },
    },
    defaultVariants: {
      spacing: "sm",
    },
  }
);

export const CompetencyItem = classed("div", "break-inside-avoid");

export const CompetencyTitle = classed("h3", "font-bold text-xs mb-0.5");

export const CompetencyContent = classed(
  "p",
  "text-[11px] text-gray-600 leading-tight"
);

// ==================== Skills Components ====================

export const SkillsGrid = classed("div", "grid lg:grid-cols-2 gap-2");

export const SkillCategory = classed("div", "break-inside-avoid");

export const SkillTitle = classed(
  "h3",
  "font-bold text-xs border-b border-gray-100 mb-1"
);

export const SkillList = classed(
  "p",
  "text-[11px] text-gray-600 leading-relaxed"
);

// ==================== Education Components ====================

export const EducationHeader = classed("div", "", {
  variants: {
    layout: {
      vertical: "grid",
      horizontal: "grid lg:flex",
    },
  },
  defaultVariants: {
    layout: "vertical",
  },
});

export const EducationNote = classed("p", "text-xs italic text-gray-500");

// ==================== Footer ====================

export const Footer = classed(
  "footer",
  "text-center text-[10px] text-gray-400 mt-6 pt-4 border-t border-gray-100"
);
