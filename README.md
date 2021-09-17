# Perfect Privacy Checker

A small and quick Firefox extension for me to check if Perfect Privacy
is working. It just polls the [check IP
endpoint](https://checkip.perfect-privacy.com/json) for the status. This
uses [web-ext](https://github.com/mozilla/web-ext) to build and test
this:

```shell
npm install --global web-ext

# To test
web-ext run

# To build found at web-ext-artifacts/perfect_privacy_checker-1.0.zip
web-ext build
```
