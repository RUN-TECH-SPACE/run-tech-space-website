import Airtable from "airtable";

export const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
}).base(process.env.NEXT_PUBLIC_BASE);
