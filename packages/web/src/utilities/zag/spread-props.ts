import { isNil } from "es-toolkit";

import { AnyProps } from "../../types/props";

const getAttributes = (props: AnyProps) => {
  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (key.startsWith("on")) return acc;
      if (isNil(value)) return acc;

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
    if (attrValue === prevAttrs[attr]) continue;

    element.setAttribute(attr, attrValue);
  }

  for (const [event, eventListener] of Object.entries(events)) {
    if (eventListener === prevEvents[event]) continue;

    element.addEventListener(event, eventListener);

    if (!isNil(prevEvents[event])) {
      element.removeEventListener(event, prevEvents[event]);
    }
  }

  for (const attr of Object.keys(prevAttrs)) {
    if (isNil(attrs[attr])) {
      element.removeAttribute(attr);
    }
  }

  for (const [event, eventListener] of Object.entries(prevEvents)) {
    if (isNil(events[event])) {
      element.removeEventListener(event, eventListener);
    }
  }
};
