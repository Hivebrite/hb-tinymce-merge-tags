import * as Api from './api/api';
import * as Commands from './api/commands';
import * as Options from './api/options';
import * as Autocompleters from './ui/autocompleters';
import * as Button from './ui/buttons';

// eslint-disable-next-line no-undef
tinymce.PluginManager.add('hbMergeTags', (editor) => {
  Options.register(editor);
  Commands.register(editor);
  Autocompleters.register(editor);

  Button.register(editor);

  const events = [
    'LoadContent',
    'init',
    'activate',
    'BeforeGetContent',
    'GetContent',
    'BeforeSetContent',
    'SetContent',
    'ScriptsLoaded',
    'PreInit',
    'PreProcess',
    'PostProcess',
  ];

  events.forEach((event) => {
    editor.on(event, (params) => {
      console.log('TinyMCE event', event, params);
    });
  });

  /* Return the metadata for the help plugin */
  Api.get();
});
