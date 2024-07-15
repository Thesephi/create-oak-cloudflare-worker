# create-oak-cloudflare-worker

Starter template to develop a Cloudflare Workers application with `@oak/oak` and `@dklab/oak-routing-ctrl`.

Read more:
- [Oakserver](https://oakserver.org/)
- [oak-routing-ctrl](https://jsr.io/@dklab/oak-routing-ctrl)
- [Cloudflare Workers](https://workers.cloudflare.com/)

# How to use this template

```bash
npm create oak-cloudflare-worker@latest
```

# Example Deployment

A deployment is available for demo at the following URL: https://oak-routing-ctrl-cloudflare.dklab.workers.dev/swagger

```bash
curl \
-H"x-foo: lorem" \
-H"x-bar: ipsum" \
-H"Content-Type: application/json" \
https://oak-routing-ctrl-cloudflare.dklab.workers.dev/echo/world\?name=dolor -d'{"raz":"maz"}'
```
```
# output
{"query":{"name":"dolor"},"body":{"raz":"maz"},"param":{"name":"world"}}
```

Please keep in mind that there's no uptime guarantee for the deployment above, so it might be unavailable from time to time due to exceeding traffic allowances.
