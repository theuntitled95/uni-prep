/* eslint-disable @typescript-eslint/no-explicit-any */
import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {locales} from "./config";

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  // Ensure locale is always a string
  const safeLocale = locale as string;

  return {
    locale: safeLocale,
    messages: (await import(`./messages/${safeLocale}.json`)).default,
  };
});
