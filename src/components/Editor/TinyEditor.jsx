// src/components/forms/TinyEditor.jsx
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import PropTypes from "prop-types";

const TinyEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  return (
    <Editor
    apiKey="bewh19a1ebdfak2pubhewmu1t078n01k6vrvg9c9rfw8r7tc" // 👈 THÊM DÒNG NÀY
      onInit={(_, editor) => (editorRef.current = editor)}
      value={value}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      onEditorChange={(content) => onChange(content)}
    />
  );
};

TinyEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TinyEditor;
