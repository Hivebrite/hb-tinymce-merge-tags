import * as Options from '../api/options';

const getMergeTagsList = (editor, type = 'menuitem') =>
  Options.getTagsList(editor).map(({ name, value }) => ({
    type,
    onAction: () => editor.execCommand('insertMergeTagCommand', false, value),
    text: name,
    value,
  }));
export { getMergeTagsList };
