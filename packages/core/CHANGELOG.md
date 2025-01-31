# Change Log

## 1.5.2

### Patch Changes

- [`2c8b4fe`](https://github.com/react-universal/tailwind/commit/2c8b4fe158df84bdb9131883b2b21e7115d8ae0f) Thanks [@chrisarts](https://github.com/chrisarts)! - removed hooks package

## 1.5.1

### Patch Changes

- [`ad9577b`](https://github.com/react-universal/tailwind/commit/ad9577b47da71ddaf004ef7f2cf8b1f583d096c3) Thanks [@chrisarts](https://github.com/chrisarts)! - core dependencies fix

## 1.5.0

### Minor Changes

- [#44](https://github.com/react-universal/tailwind/pull/44) [`3a6987b`](https://github.com/react-universal/tailwind/commit/3a6987bba1da01284bb581b78d00f40990c016fe) Thanks [@chrisarts](https://github.com/chrisarts)! - expo module scripts and publish entry points unified

## 1.4.19

### Patch Changes

- [`18cbf0e`](https://github.com/react-universal/tailwind/commit/18cbf0e96b101853bf2f923bf0b282678d18a203) Thanks [@chrisarts](https://github.com/chrisarts)! - cjs for primitives

## 1.4.18

### Patch Changes

- [`e51e07b`](https://github.com/react-universal/tailwind/commit/e51e07b72ac6bfafc15c7c559972069eb4d4eea2) Thanks [@chrisarts](https://github.com/chrisarts)! - build primitives

## 1.4.17

### Patch Changes

- [#39](https://github.com/react-universal/tailwind/pull/39) [`dc7cf70`](https://github.com/react-universal/tailwind/commit/dc7cf70a11f43c7c9d2288aa1aa7a4de9f61dbf4) Thanks [@chrisarts](https://github.com/chrisarts)! - add tailwind ui components

- [#39](https://github.com/react-universal/tailwind/pull/39) [`dc7cf70`](https://github.com/react-universal/tailwind/commit/dc7cf70a11f43c7c9d2288aa1aa7a4de9f61dbf4) Thanks [@chrisarts](https://github.com/chrisarts)! - build for native
  support es modules in build

## 1.4.16

### Patch Changes

- [#37](https://github.com/react-universal/tailwind/pull/37) [`c16dca2`](https://github.com/react-universal/tailwind/commit/c16dca263abeab7371910adbe23b2a5f6bd819b6) Thanks [@chrisarts](https://github.com/chrisarts)! - \* Alpha release for base packages
  - Support for common tw utils.
  - Web support all native tailwind features, as it works just modifying how the css is injected in the tag.
  - React Native support for all supported css features in Stylesheet.
  - React Native: We support :hover :active :focus :blur in any React Native Component (just for react 0.70 fue this is achieved using pointer event props).
  - Documentation in progress...

## 1.4.15

### Patch Changes

- [`e0804de`](https://github.com/react-universal/tailwind/commit/e0804ded26ff9364a019163841479ed2e99fef71) Thanks [@chrisarts](https://github.com/chrisarts)! - fix esmodules for nextjs

## 1.4.14

### Patch Changes

- [`950eb0d`](https://github.com/react-universal/tailwind/commit/950eb0d6fd8e85680b6947fd87d56b9dbfaa498f) Thanks [@chrisarts](https://github.com/chrisarts)! - changeset config

## 1.4.13

### Patch Changes

- [#33](https://github.com/react-universal/tailwind/pull/33) [`b6e0feb`](https://github.com/react-universal/tailwind/commit/b6e0feb6405201fc772f743454b447d86701cc0b) Thanks [@chrisarts](https://github.com/chrisarts)! - publish files fix

## 1.4.12

### Patch Changes

- [`bdff6f2`](https://github.com/react-universal/tailwind/commit/bdff6f2703206f067823742db708fd0d3fb93198) Thanks [@chrisarts](https://github.com/chrisarts)! - changesets config

## 1.4.11

### Patch Changes

- [#29](https://github.com/react-universal/tailwind/pull/29) [`66b9c99`](https://github.com/react-universal/tailwind/commit/66b9c99ccfd288f22b86fc6d109205c7e2e395fe) Thanks [@chrisarts](https://github.com/chrisarts)! - hooks package added
  core package now handle its own plugins through a preset which has the proper plugins for react native for tailwind
  core package dont depends anymore on many postcss plugins to replace values for react native

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.4.10](https://github.com/react-universal/tailwind/compare/v1.4.9...v1.4.10) (2023-03-16)

### Features

- **hooks:** adding hooks package ([da2436a](https://github.com/react-universal/tailwind/commit/da2436a95f0c5074595e891248f352e0c54dd713))

## [1.4.9](https://github.com/react-universal/tailwind/compare/v1.4.8...v1.4.9) (2023-03-16)

### Features

- **hooks:** adding hooks package ([1bc4c16](https://github.com/react-universal/tailwind/commit/1bc4c167402479215f7957cf1ababa39d1bdcbf7))

## [1.4.8](https://github.com/react-universal/tailwind/compare/v1.4.7...v1.4.8) (2023-03-16)

**Note:** Version bump only for package @universal-labs/core

## [1.4.7](https://github.com/react-universal/tailwind/compare/v1.4.6...v1.4.7) (2023-03-16)

**Note:** Version bump only for package @universal-labs/core

## [1.4.6](https://github.com/react-universal/tailwind/compare/v1.4.5...v1.4.6) (2023-03-16)

**Note:** Version bump only for package @universal-labs/core

## [1.4.5](https://github.com/react-universal/tailwind/compare/v1.4.4...v1.4.5) (2023-03-16)

### Features

- **tailwind:** adding tailwind plugins and preset for native ([#28](https://github.com/react-universal/tailwind/issues/28)) ([6ac804e](https://github.com/react-universal/tailwind/commit/6ac804e6d1437639c71a639f5e97f5a6d0d1d8d1))

## [1.4.4](https://github.com/react-universal/tailwind/compare/v1.4.3...v1.4.4) (2023-03-14)

**Note:** Version bump only for package @universal-labs/core

## [1.4.3](https://github.com/react-universal/tailwind/compare/v1.4.2...v1.4.3) (2023-03-14)

### Bug Fixes

- **core:** include plugin folder ([94942b6](https://github.com/react-universal/tailwind/commit/94942b6e44e8f58b9d579db5d87bb2e5fbae0074))

## [1.4.2](https://github.com/react-universal/tailwind/compare/v1.4.1...v1.4.2) (2023-03-14)

### Bug Fixes

- **core:** include plugin folder ([e0ca368](https://github.com/react-universal/tailwind/commit/e0ca368f5075010231fc8a2435aa4cde84e05b80))

## [1.4.1](https://github.com/react-universal/tailwind/compare/v1.4.0...v1.4.1) (2023-03-14)

**Note:** Version bump only for package @universal-labs/core

# [1.4.0](https://github.com/react-universal/tailwind/compare/v1.3.1...v1.4.0) (2023-03-14)

### Features

- **chore:** css parser ([#23](https://github.com/react-universal/tailwind/issues/23)) ([45d0cf1](https://github.com/react-universal/tailwind/commit/45d0cf186666a3ca71cc94d2db4b95cfbed2a8d9))
- **chore:** integrations ([#22](https://github.com/react-universal/tailwind/issues/22)) ([315d82a](https://github.com/react-universal/tailwind/commit/315d82ad4efb309a64771a6a64252f9005a0a375))
- **chore:** lerna version ([#24](https://github.com/react-universal/tailwind/issues/24)) ([7b9da72](https://github.com/react-universal/tailwind/commit/7b9da7282818f979fe0c775676b8f002d9b6d249))
- **chore:** packages optimized ([#27](https://github.com/react-universal/tailwind/issues/27)) ([2504216](https://github.com/react-universal/tailwind/commit/2504216722cabe8de83eeb0d66e39085d51592f5))

## 1.3.1 (2023-03-08)

**Note:** Version bump only for package @universal-labs/native-tailwind

# 1.3.0 (2023-03-04)

### Features

- **ci:** publish config ([b1ad574](https://github.com/react-universal/tailwind/commit/b1ad57437554aaef9759edcae659b8fbe5a57027))

# 1.2.0 (2023-03-04)

### Features

- **ci:** publish config ([76db2bd](https://github.com/react-universal/tailwind/commit/76db2bdefed8467226229204d9ce53e9cfe27356))

# [1.1.0](https://github.com/react-universal/tailwind/compare/v1.0.3...v1.1.0) (2023-03-03)

### Features

- **core package:** group interactions on any level ([#17](https://github.com/react-universal/tailwind/issues/17)) ([f50d6fb](https://github.com/react-universal/tailwind/commit/f50d6fbc94ea79bebcb1c8fe5b9eeec99105745c))
- **expo-48:** upgrade example to expo 48 ([#13](https://github.com/react-universal/tailwind/issues/13)) ([53221fb](https://github.com/react-universal/tailwind/commit/53221fbd606c6a21df19660c74309b2a19d5e3c8))
- **tailwind UI:** Tailwind UI components for universal react apps ([#12](https://github.com/react-universal/tailwind/issues/12)) ([4c1fe81](https://github.com/react-universal/tailwind/commit/4c1fe8167476ebf09142a0915c08b26628a79764))

## [1.0.3](https://github.com/react-universal/tailwind/compare/v1.0.2...v1.0.3) (2023-02-21)

**Note:** Version bump only for package @react-universal/tailwind

## [1.0.2](https://github.com/react-universal/tailwind/compare/v1.0.1...v1.0.2) (2023-02-21)

**Note:** Version bump only for package @react-universal/tailwind

## [1.0.1](https://github.com/react-universal/tailwind/compare/v0.0.11...v1.0.1) (2023-02-21)

**Note:** Version bump only for package @react-universal/tailwind

## 0.0.3 (2023-02-21)

### Features

- **config:** publish config ([#7](https://github.com/react-universal/tailwind/issues/7)) ([756a053](https://github.com/react-universal/tailwind/commit/756a0537c26bb5599d11546c078fe470a16c996d))
- **tailwind:** Compiler ([#6](https://github.com/react-universal/tailwind/issues/6)) ([635448f](https://github.com/react-universal/tailwind/commit/635448ff6eed8a9110e5fdd7bcebebf301f029fa))

## 0.0.1 (2023-02-21)

### Features

- **config:** publish config ([#7](https://github.com/react-universal/tailwind/issues/7)) ([756a053](https://github.com/react-universal/tailwind/commit/756a0537c26bb5599d11546c078fe470a16c996d))
- **tailwind:** Compiler ([#6](https://github.com/react-universal/tailwind/issues/6)) ([635448f](https://github.com/react-universal/tailwind/commit/635448ff6eed8a9110e5fdd7bcebebf301f029fa))

# @react-universal/tailwind

## 1.0.0

### Major Changes

- [`4177a14`](https://github.com/react-universal/tailwind/commit/4177a147e01bc6eaceae683d83d3c17fdd9e1522) Thanks [@chrisarts](https://github.com/chrisarts)! - fix registry

## 0.1.0

### Minor Changes

- [#7](https://github.com/react-universal/tailwind/pull/7) [`756a053`](https://github.com/react-universal/tailwind/commit/756a0537c26bb5599d11546c078fe470a16c996d) Thanks [@chrisarts](https://github.com/chrisarts)! - first version

### Patch Changes

- [#3](https://github.com/react-universal/tailwind/pull/3) [`2db75cd`](https://github.com/react-universal/tailwind/commit/2db75cdfbdedebc82143aa7862a6a16569fc9204) Thanks [@chrisarts](https://github.com/chrisarts)! - ## Workspace init

  - Adding core package and example projects for `expo` and `nextjs`.
  - Add vite compiler for core package.
  - add primitives styled components for base composites.
