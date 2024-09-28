import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: string) => void;
}) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}

export default RichTextEditor;
