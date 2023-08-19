/**
 * @description React wangEditor usage
 * @author wangfupeng
 */

import React, { useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
function WangEditor() {
  const [editor, setEditor] = useState(null); // 存储 editor 实例
  const [html, setHtml] = useState("");

  const toolbarConfig = [];
  toolbarConfig.excludeKeys = [
    "italic",
    "emotion",
    "group-image",
    "group-video",
  ];
  const editorConfig = {
    placeholder: "请输入简介...",
  };

  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          className="h-[300px]"
        />
      </div>
    </div>
  );
}

export default WangEditor;
