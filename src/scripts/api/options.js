const option = (name) => (editor) => editor.options.get(name);
const register = (editor) => {
  console.log('editor', editor.options)
  const registerOption = editor.options.register;

  registerOption('hb_merge_tags_prefix', {
    processor: 'string',
    default: '{{',
  });
  registerOption('hb_merge_tags_suffix', {
    processor: 'string',
    default: '}}',
  });
  registerOption('hb_merge_tags_variables', {
    processor: 'object[]',
    default: [],
  });
};

const getPrefix = option('hb_merge_tags_prefix');
const getSuffix = option('hb_merge_tags_suffix');
const getTagsList = option('hb_merge_tags_variables');

export { register, getPrefix, getSuffix, getTagsList };



const registerOption = editor.options.register;

  editor.options.register('hb_merge_tags_prefix', {
    processor: 'string',
    default: '{{',
  });

    editor.options.register('tags_prefix', {
    processor: 'string',
    default: '{{',
  });