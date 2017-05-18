# Build system commands
This is a list of all commands available with this build system.

| command       | Description                                                                |
|---------------|----------------------------------------------------------------------------|
| start         | uses webpack to transpile and load in a local server the source code       |
| start-network | same as above, but also makes the server instance available on the network |
| build         | uses webpack to transpile in production mode the source code               |
| test          | uses karma to test the source code using the test files in the test folder |
| doc           | uses typedoc to produce automatic documentation from the source code       |
| clean         | cleans the project folder                                                  |
| reset         | as above, but also removes all installed dependecies                       |
| postinstall   | cleans some test and presentation folders                                  |
