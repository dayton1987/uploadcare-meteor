 Package.describe({
  // Short two-sentence summary.
  summary: "Uploadcare Api ",
  // Version number.
  version: "0.0.1",
  // Optional.  Default is package directory name.
  name: "uploadcare:core",
  // Optional github URL to your source repository.
  git: "https://github.com/something/something.git",
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('METEOR@1.0');
  // Use Underscore package, but only on the server.
  // Version not specified, so it will be as of Meteor 0.9.0.
  api.use('ecmascript', 'client');
  api.use('jquery', 'client');

  api.addFiles('lib/client/uploadcare.js', 'client');

  api.export('uploadCare','client')
});

/*/!* This defines the tests for the package *!/
Package.onTest(function (api) {
  // Sets up a dependency on this package
  api.use('username:package-name');
  // Allows you to use the mocha test framework
  api.use('practicalmeteor:mocha@2.4.5_2');
  // Specify the source code for the package tests
  api.addFiles('email_tests.js', 'server');
});*/
