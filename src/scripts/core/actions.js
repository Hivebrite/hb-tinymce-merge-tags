import * as Utils from '../utils';

const insertMergeTagAction = (editor, mergeTag) => {
  Utils.addMergeTagString(editor, mergeTag);
};

export { insertMergeTagAction };
