# tracing

## QuickStart

Tracing U project

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### Debug

vscode launch.json 配置

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Test",
      "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
      "args": [
        "--recursive",
        "-u",
        "tdd",
        "--timeout",
        "999999",
        "--colors",
        "${workspaceRoot}/test"
      ],
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "EGG_SERVER_ENV": "unittest"
      }
    },
    {
      "name": "Launch",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": "npm",
      "windows": { "runtimeExecutable": "npm.cmd" },
      "runtimeArgs": [ "run", "debug" ],
      "console": "integratedTerminal",
      "protocol": "auto",
      "restart": true,
      "port": 9999
    },

  ]
}
```

[egg]: https://eggjs.org
