import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultTabBinding } from "@codemirror/commands";
import { json } from "@codemirror/lang-json";

export default function setupEditor() {
  const jsonRequestBody = document.querySelector("[data-json-request-body]");
  const jsonResponseBody = document.querySelector("[data-json-response-body]");
  const basicExtensions = [basicSetup, keymap.of([defaultTabBinding]) , ];

  const requestBodyEditor = new EditorView({
    state: EditorState.create({
      doc: "{\n\t\n}",
      extensions: [basicSetup, keymap.of([])],
    }),
    parent: jsonRequestBody,
  });
}
