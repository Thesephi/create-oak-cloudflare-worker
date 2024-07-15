## [1.3.0] - 2024-07-15

### Added

- sample integration test
- template code to support OpenAPI Spec serving
- template test code to cover OpenAPI Spec serving
- support for `-y` (alternatively: `--yes`, `-f`, `--force`) flag (example: `npm create oak-cloudflare-worker -- -y`)

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.8.6`, `wrangler@^3.64.0`)
- improved README

## [1.2.0] - 2024-06-23

### Fixed

- `.npmrc` and `.gitignore` files no longer ignored in scaffolds created from the published package

### Changed

- templated `@dklab/oak-routing-ctrl` version bumped to `v0.7.4`

## [1.1.2] - 2024-06-23

### Fixed

- exposed `bin` script in `package.json`

## [1.1.1] - 2024-06-23

### Fixed

- `package-lock.json` synced
- no verbose error log when script is proactively cancelled by user

### Changed

- Script completion prompt colorized (with `NO_COLOR` [respected](https://no-color.org/))

## [1.1.0] - 2024-06-21

### Changed

- starting directory prompting is now supported

## [1.0.1] - 2024-06-18

### Added

- Initial Release
