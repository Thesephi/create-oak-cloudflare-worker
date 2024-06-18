# create-oak-cloudflare-worker

Starter template to develop a Cloudflare Worker application with `@oak/oak` and `@dklab/oak-routing-ctrl`.

Read more:
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Oakserver](https://oakserver.org/)
- [oak-routing-ctrl](https://jsr.io/@dklab/oak-routing-ctrl)

# How to use this template

```bash
npm create oak-cloudflare-worker
```

# Example Deployment

A deployment is available for testing purposes at the following URL: https://production.oak-routing-ctrl-cloudflare.dklab.workers.dev/

```bash
curl -H"x-foo: lorem" -H"x-bar: ipsum" -H"Content-Type: application/json" https://production.oak-routing-ctrl-cloudflare.dklab.workers.dev/echo/world\?name=dolor -d'{"raz":"maz"}'

{"query":{"name":"dolor"},"body":{"raz":"maz"},"param":{"name":"world"}}
```

Please keep in mind that there's no uptime guarantee for the deployment above, so it might be unavailable from time to time due to exceeding traffic allowances.
