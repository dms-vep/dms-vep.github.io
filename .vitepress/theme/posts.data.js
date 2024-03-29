// posts.data.js
import { createContentLoader } from "vitepress";

export default createContentLoader("./**/posts/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        title: frontmatter.title,
        url,
        subtext: frontmatter.subtext,
        // author: frontmatter.author,
        keywords: frontmatter.keywords,
        date: frontmatter.date,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date assuming date is in a standard format
  },
});
