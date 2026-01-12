"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { useState } from "react";

/**
 * Minimum required props to render a clickable element
 */
type HideableElementProps = Pick<
  React.ComponentProps<"div">,
  "onClick" | "className"
>;

/**
 * Must be a clickable element
 */
type HideableElement = React.ReactElement<HideableElementProps>;

/**
 * Hides element when `visible` is `false` for print
 */
const hideableVariants = cva("transition-opacity", {
  variants: {
    visible: {
      false: "opacity-65 print:hidden",
    },
    hideable: {
      true: "cursor-pointer",
    },
  },
});

type HideableVariants = VariantProps<typeof hideableVariants>;

type HideableProps = HideableVariants & {
  /**
   * Must be a clickable element
   */
  children: HideableElement;
};

export function Hideable(props: HideableProps) {
  const { hideable } = useHideable();
  const [visible, setVisible] = useState(() => props.visible !== false);
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!hideable) {
        return;
      }

      event?.stopPropagation();
      setVisible((prev) => !prev);
    },
    [hideable],
  );

  return (
    <Slot
      onClick={handleClick}
      className={hideableVariants({ visible, hideable })}
    >
      {props.children}
    </Slot>
  );
}

export function HideableList(props: {
  /**
   * @default false
   */
  visible?: boolean;
  /**
   * Must be a list element
   */
  children: HideableElement[];
}) {
  return React.Children.map(props.children, (child) => {
    return <Hideable visible={props.visible}>{child}</Hideable>;
  });
}

type HideableContext = {
  hideable: boolean;
  setHideable: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = React.createContext<HideableContext | null>(null);

export function useHideable() {
  const context = React.useContext(Context);

  if (context == null) {
    throw new Error("useHideable() must be used within a <HideableProvider/>");
  }

  return context;
}

export function HideableProvider(props: React.PropsWithChildren) {
  const [hideable, setHideable] = React.useState(false);

  return <Context.Provider {...props} value={{ hideable, setHideable }} />;
}

export const withHideable = <P extends HideableElementProps>(
  Component: React.ComponentType<P>,
  defaultProps?: HideableVariants,
) => {
  function WithHideable(props: P) {
    return (
      <Hideable {...defaultProps}>
        <Component {...props} />
      </Hideable>
    );
  }

  return WithHideable;
};
