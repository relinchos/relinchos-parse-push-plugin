Package.describe({
  name: 'relinchos:parse-push-plugin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Port for Meteor of a parse plugin to support push notifications',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/relinchos/relinchos-parse-push-plugin.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('parse-push-plugin.js');
});

Cordova.depends({
    'medlei-parse-push-plugin': '0.1.3'
});
