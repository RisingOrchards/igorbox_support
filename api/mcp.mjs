import { createNodeHandler } from "docusaurus-plugin-mcp-server/adapters";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// docusaurus-plugin-mcp-server 0.13 removed `createVercelHandler`; its Node
// (req, res) handler is the drop-in replacement and matches Vercel's Node
// function signature (build/mcp/** is bundled via includeFiles in vercel.json).
export default createNodeHandler({
  docsPath: path.join(__dirname, "../build/mcp/docs.json"),
  indexPath: path.join(__dirname, "../build/mcp/search-index.json"),
  name: "igorbox-docs",
  baseUrl: "https://help.igorbox.com",
});
