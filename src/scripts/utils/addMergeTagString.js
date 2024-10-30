import * as Options from '../api/options';

const addMergeTagString = (editor, mergeTag) => {
  const prefix = Options.getPrefix(editor);
  const suffix = Options.getSuffix(editor);
  const mergeTagString = `<span class="hb-merge-tags" contenteditable="false">${prefix}${mergeTag}${suffix}</span>`;

  editor.insertContent(mergeTagString);
};

export { addMergeTagString };
