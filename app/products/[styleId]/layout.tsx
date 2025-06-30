"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function StyleLayout({ children }: { children: ReactNode }) {
  const [channel, setChannel] = useState<Channel>("Urban Jungle");
  const [locale, setLocale] = useState<string>("en-US");

  type Channel = "Urban Jungle" | "Hudson Store";

  const localesByChannel: Record<Channel, string[]> = {
    "Urban Jungle": ["en-US", "it-IT", "fr-MA"],
    "Hudson Store": ["en-US"],
  };

  return (
    <div>
      <div className=" base-link mb-4 mt-4">
        <Link href={"/products"}>Go Back to Products</Link>
      </div>
      <div className="flex items-center justify-between space-x-6 mb-6 text-sm text-gray-700">
        <div className="flex items-center space-x-6 mb-6">
          <label htmlFor="channel" className=" mb-1 font-medium text-gray-600">
            Channel
          </label>
          <select
            value={channel}
            onChange={(e) => {
              setChannel(e.target.value as Channel);
              setLocale(localesByChannel[e.target.value as Channel][0]);
            }}
            className="form-select"
          >
            {Object.keys(localesByChannel).map((ch) => (
              <option key={ch} value={ch}>
                {ch}
              </option>
            ))}
          </select>

          <label htmlFor="channel" className=" mb-1 font-medium text-gray-600">
            Locale
          </label>
          <select
            value={locale}
            onChange={(e) => {
              setLocale(e.target.value);
            }}
            className="form-select"
          >
            {localesByChannel[channel].map((loc) => (
              <option value={loc} key={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className=" px-4 py-2 bg-blue-600 text-white rounded"
        >
          SAVE
        </button>
      </div>

      <section>{children}</section>
    </div>
  );
}
