import * as Options from '../api/options';
import * as Utils from '../utils';

const register = (editor) => {
  const fetch = (searchValue) => {
    const items = Utils.getMergeTagsList(editor, 'autocompleteitem')
      .map(({ text, type, value }) => ({
        text,
        type,
        value,
      }))
      .filter(({ text }) =>
        text.toLowerCase().includes(searchValue.toLowerCase()),
      );

    return Promise.resolve(items);
  };

  const triggerChar = Options.getPrefix(editor);

  const onAction = (autocompleteApi, rng, value) => {
    editor.selection.setRng(rng);
    editor.execCommand('insertMergeTagCommand', false, value);
    autocompleteApi.hide();
  };

  const { addAutocompleter } = editor.ui.registry;

  addAutocompleter('hb_merge_tags_autocompleter', {
    trigger: triggerChar,
    fetch,
    onAction,
    minChars: 0,
  });
};

export { register };
