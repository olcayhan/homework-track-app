import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor({ field }: any) {
  return (
    <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
  );
}

export default RichTextEditor;
