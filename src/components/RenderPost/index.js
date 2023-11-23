import React from "react";
import EditorJSParser from "editorjs-parser";

function RenderPost({ data }) {
  const editorJSParser = new EditorJSParser();

  // Chuyển đổi nội dung từ Editor.js thành HTML
  const html =
    data && data.blocks ? editorJSParser.parse(data) : "Không dữ liệu";

  console.log(data);

  return (
    <article
      className="prose max-w-2xl mx-auto p-3"
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
}

export default RenderPost;
