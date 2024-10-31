import * as Options from '../api/options';
import * as Utils from '../utils';

const register = (editor) => {
  editor.ui.registry.addMenuButton('hbMergeTags', {
    text: "Custom variables",
    tooltip: 'add a merge tag',
    fetch: (callback) => {
      const items = Utils.getMergeTagsList(editor);

      callback(items);
    },
  });
};

export { register };
