import * as Actions from '../core/actions';

const registerInsertMergeTag = (editor) => {
  editor.addCommand('insertMergeTagCommand', (ui,mergeTag) => {
    Actions.insertMergeTagAction(editor, mergeTag);
  });
};

const register = (editor) => {
  registerInsertMergeTag(editor);
};

export { register };
