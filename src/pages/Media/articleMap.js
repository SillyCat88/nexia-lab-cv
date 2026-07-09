import { mediaItems } from "./data/mediaData";

export const articleMap = Object.fromEntries(
    mediaItems.map(item => [String(item.id), item])
);
