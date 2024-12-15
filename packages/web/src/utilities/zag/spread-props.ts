import { AnyProps } from "../../types/props";

const getAttributes = (props: AnyProps) => {
  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (key.startsWith("on")) return acc;
      if (value === null || value === undefined) return acc;

      const attrName = key.toLowerCase();

      if (typeof value === "boolean") {
        if (value) {
          acc[attrName] = "";
        }
      } else {
        acc[attrName] = String(value);
      }

      return acc;
    },
    {} as Record<string, string>,
  );
};

const getEvents = (props: AnyProps) => {
  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (!key.startsWith("on")) return acc;
      if (typeof value !== "function") return acc;

      const eventName = key.substring(2).toLowerCase();

      acc[eventName] = value as EventListener;

      return acc;
    },
    {} as Record<string, EventListener>,
  );
};

export const spreadProps = (
  element: HTMLElement,
  props?: AnyProps,
  prevProps?: AnyProps,
) => {
  const attrs = props ? getAttributes(props) : {};
  const events = props ? getEvents(props) : {};
  const prevAttrs = prevProps ? getAttributes(prevProps) : {};
  const prevEvents = prevProps ? getEvents(prevProps) : {};

  for (const [attr, attrValue] of Object.entries(attrs)) {
    element.setAttribute(attr, attrValue);
  }

  for (const [event, eventListener] of Object.entries(events)) {
    element.addEventListener(event, eventListener);
  }

  for (const [attr] of Object.entries(prevAttrs)) {
    if (!attrs[attr]) {
      element.removeAttribute(attr);
    }
  }

  for (const [event, eventListener] of Object.entries(prevEvents)) {
    element.removeEventListener(event, eventListener);
  }
};
