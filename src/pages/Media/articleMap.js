import { mediaItems } from "./data/contentMedia";

export const articleMap = {
  en: Object.fromEntries(
    mediaItems.en.items.map(item => [String(item.id), item])
  ),

  ua: Object.fromEntries(
    mediaItems.ua.items.map(item => [String(item.id), item])
  ),
};