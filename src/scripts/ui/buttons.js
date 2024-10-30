import * as Options from '../api/options';
import * as Utils from '../utils';

const register = (editor) => {
  editor.ui.registry.addMenuButton('hbMergeTags', {
    text: Options.getPrefix(editor),
    tooltip: 'add a merge tag',
    fetch: (callback) => {
      const items = Utils.getMergeTagsList(editor);

      callback(items);
    },
  });
};

export { register };
