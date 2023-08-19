/**
 * @description React wangEditor usage
 * @author wangfupeng
 */

import React, { useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import formulaModule from "@wangeditor/plugin-formula";
import { Boot } from "@wangeditor/editor";
Boot.registerModule(formulaModule);

function WangEditor({ callback }) {
  const [editor, setEditor] = useState(null); // 存储 editor 实例
  const [html, setHtml] = useState("");
  const dispatch = useDispatch();
  const toolbarConfig = [];
  toolbarConfig.excludeKeys = [
    "italic",
    "emotion",
    "group-image",
    "group-video",
  ];

  const editorConfig = {
    placeholder: "请输入简介...",
    hoverbarKeys: {
      formula: {
        menuKeys: ["editFormula"], // “编辑公式”菜单
      },
    },
  };

  toolbarConfig.insertKeys = {
    index: 0,
    keys: [
      "insertFormula", // “插入公式”菜单
      // 'editFormula' // “编辑公式”菜单
    ],
  };
  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  const handlecommit = () => {
    dispatch(callback(html));
  };
  return (
    <div>
      <div className="border-gray-300 px-5 py-5">
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          className="border-b border-gray-300"
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
      <div className="flex items-center justify-center">
        <Button
          type="primary"
          className="bg-blue-400 w-[10%]"
          onClick={() => handlecommit()}
        >
          确定
        </Button>
      </div>
      <br />
    </div>
  );
}

export default WangEditor;
