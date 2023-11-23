import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
// import Image from "@editorjs/image";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import CodeTool from "@editorjs/code";
import DelimiterTool from "@editorjs/delimiter";
import WarningTool from "@editorjs/warning";
import QuoteTool from "@editorjs/quote";
import Header from "@editorjs/header";

export const EDITOR_TOOLS = {
  header: Header,
  list: List,
  paragraph: Paragraph,
  // image: Image,
  embed: Embed,
  table: Table,
  link: LinkTool,
  code: CodeTool,
  delimiter: DelimiterTool,
  warning: WarningTool,
  quote: QuoteTool,
};
