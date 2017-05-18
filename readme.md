# Typescript-react-redux-build
This is a build system for a typescript project using react-redux to create a client-side application.
This system also supports:
- material-ui to get some basic ui elements;
- testing using karma, written using jasmine/sinon and run using phantomJS;
- automatic test coverage reports;
- generating documentation using typedoc.

# How to use
- Run the `npm install` command to install all dependencies;
- Delete the content of the source/test folders which currently contains some test code;
- Review the other command in the package.json file.

# Information
I made this build system to continue my work on another project.
I don't know for how long I will be able to support this code, but I will try to keep it up to date and issue-free for as long as I can.

# Current Issues
- The documentation feature does not currently work because the typedoc package has an outdated official documentation and it does not support the JSX syntax used with react;
- A set of warnings is thrown during installation and testing of the source code.

# Next release
For the next release I hope to be able to add/solve the following features:
- fix the current typedoc issue;
- extend this readme and provide information about every warning obtained during installation and other operations.
