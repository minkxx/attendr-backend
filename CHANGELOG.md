# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/minkxx/attendr-backend/compare/v0.3.3...v0.4.0) (2026-09-03)


### Features

* add database migration and push scripts for local, dev, and prod environments ([aa8978a](https://github.com/minkxx/attendr-backend/commit/aa8978aeabc52dd080fcb9e4fbfcbdf15a5d2886))
* add dotenv-cli as a dependency ([d037fd6](https://github.com/minkxx/attendr-backend/commit/d037fd6f66f6d8c2f50737ee1f69c8eb71104d76))
* add env_file configuration for PostgreSQL service in docker-compose ([2ff7fcc](https://github.com/minkxx/attendr-backend/commit/2ff7fcc5dca212af41c32907f28a36672b7aed36))
* add GitHub Actions workflow for database migration and deployment ([842ba8b](https://github.com/minkxx/attendr-backend/commit/842ba8b0c9cbf19004b15f1f6badce6d84d467f2))
* consolidate Redis configuration by replacing REDIS_HOST and REDIS_PORT with REDIS_URL ([1a04183](https://github.com/minkxx/attendr-backend/commit/1a04183dc3d67078706d0726ede51d6fe3a23d40))
* enhance database connection with SSL configuration based on NODE_ENV ([4fc9295](https://github.com/minkxx/attendr-backend/commit/4fc92957294c4f9374a03b7f4f9a14a7cf943373))
* refactor Redis configuration to use REDIS_URL instead of host and port ([71b9b76](https://github.com/minkxx/attendr-backend/commit/71b9b767ed87d23432341c33e381209701f45762))
* update ConfigModule to include dynamic envFilePath configuration ([0715eb7](https://github.com/minkxx/attendr-backend/commit/0715eb707101a267015f21c80ae64408ca21b56f))
* update database migration scripts to use 'deploy' for dev and prod environments ([51c49c1](https://github.com/minkxx/attendr-backend/commit/51c49c1dbff54675a6ccd14dc560186217263f7c))


### Bug Fixes

* fix broken pnpm-lock file ([48f1e3d](https://github.com/minkxx/attendr-backend/commit/48f1e3d54be146bc78958675f52248fe636bb3e9))
* update .gitignore to exclude all dotenv files except .env.example ([1b38253](https://github.com/minkxx/attendr-backend/commit/1b3825352460bacdc8991401980a25a181c4bc49))
* update Prisma Client generation command in CI workflow ([ef97b60](https://github.com/minkxx/attendr-backend/commit/ef97b60e4cb9e2cca8a3b812121ddec206be2957))

### [0.3.3](https://github.com/minkxx/attendr-backend/compare/v0.3.2...v0.3.3) (2026-09-03)


### Features

* custom auth guard for web socket gateway ([a6473ce](https://github.com/minkxx/attendr-backend/commit/a6473ce4c1656da8531e669ce617060a48084671))
* use user and password from env directly ([9f0869e](https://github.com/minkxx/attendr-backend/commit/9f0869e01d1fc735a201ad437b553cbceb80e61d))
* web socket gateway is proctected using custom auth guard ([65f7c90](https://github.com/minkxx/attendr-backend/commit/65f7c90d45d43e6ad3b7fcef4136d71cce2dfd4a))


### Bug Fixes

* add assignees field to bug report template ([e7596dc](https://github.com/minkxx/attendr-backend/commit/e7596dcbe2ac6de40a795d7d99182658a5642e14))
* broken lockfile ([f16c558](https://github.com/minkxx/attendr-backend/commit/f16c5583788d44a6faad507e5e114da5e21b4fd7))
* fix broken lockfile ([5a70772](https://github.com/minkxx/attendr-backend/commit/5a70772b715f719836910723ab0ecdd2f8943807))
* remove description and author fields from package.json ([6f3ee21](https://github.com/minkxx/attendr-backend/commit/6f3ee2123ce8f452a8e3a27703f251c42e970ab0))
* remove dlx from prisma commands in README.md ([8ed519f](https://github.com/minkxx/attendr-backend/commit/8ed519ff437d5db77db87a4b2fb7dc0342d6335b))
* removed ^ from package versions ([449c7ab](https://github.com/minkxx/attendr-backend/commit/449c7abf703da39a44ce03a190fd8d50efd1227a))
* simplify type declaration for sendEmail in authExtensions ([0487d92](https://github.com/minkxx/attendr-backend/commit/0487d92652de81c505b4bdb7c2c271e07bec8eac))
* update DATABASE_URL, POSTGRES_USER, and POSTGRES_PASSWORD in .env.example ([0172bbd](https://github.com/minkxx/attendr-backend/commit/0172bbd34a001b7c828437576b5919091d0aac32))
* update example user data in API requests ([8c8e8f3](https://github.com/minkxx/attendr-backend/commit/8c8e8f3e10dc7c53da8c1eb9310ab5119c20f00a))
* update project name from AttendEase to Attendr ([e0b311d](https://github.com/minkxx/attendr-backend/commit/e0b311d9c1702bae4420fc200ea7e71f76a24b10))

### [0.3.2](https://github.com/minkxx/AttendEase-Server/compare/v0.3.1...v0.3.2) (2026-06-30)


### Features

* add admin check before creating a timetable ([5a6fbce](https://github.com/minkxx/AttendEase-Server/commit/5a6fbcee1c54f4ca704ca67c1258eaf3b10d74e0))
* add exmaple env file ([a9685a3](https://github.com/minkxx/AttendEase-Server/commit/a9685a3b299cec3ff393f76a2d794d35df7ea674))
* optimize voting performance ([05ab2e4](https://github.com/minkxx/AttendEase-Server/commit/05ab2e4ad9ecb9192428fd5a8e5a16af74f670be))
* pass user session on create poll service ([d2ddce9](https://github.com/minkxx/AttendEase-Server/commit/d2ddce96d463524903758539555cd74f2d739bc3))
* pass user session on create poll service ([89c6c8d](https://github.com/minkxx/AttendEase-Server/commit/89c6c8d78f6daca66ab7ba95f36c0865288a6763))
* pass user session on create timetable service ([84016c3](https://github.com/minkxx/AttendEase-Server/commit/84016c3f062f4a0d6ebf55f2ede6be744f9f8adc))
* update readme ([a566dd8](https://github.com/minkxx/AttendEase-Server/commit/a566dd874795e9c0d2ab01249fc906e3c51245e1))
* use transaction on find room and room-member also increased random bytes to 8 characters ([c7c4d49](https://github.com/minkxx/AttendEase-Server/commit/c7c4d49cf29cb1a9f6767f61e7d47d5415b0b8c3))


### Bug Fixes

* remove islock field to avoid users set it explicitly ([adc8f6a](https://github.com/minkxx/AttendEase-Server/commit/adc8f6afd8c832eddc9eaa27fd0e99e5cf4a1bdc))
* remove null checks ([037140f](https://github.com/minkxx/AttendEase-Server/commit/037140f75fc1067a30ae3a8224df735d7b31349d))

### [0.3.1](https://github.com/minkxx/AttendEase-Server/compare/v0.3.0...v0.3.1) (2026-06-27)


### Features

* add bullmq ([61c8178](https://github.com/minkxx/AttendEase-Server/commit/61c8178aa505a2301bf10316e88aad2fcf5533a7))
* add consumer processor for pol-sync queue ([899b6cb](https://github.com/minkxx/AttendEase-Server/commit/899b6cbc404d065d80ca88efb2b53b74e0e74a3c))
* add poll_votes to poll-sync queue ([27a7251](https://github.com/minkxx/AttendEase-Server/commit/27a72515569e5fc58bdb316c8f9c4e8cd0f35b22))
* add update and get attendance endpoints ([dcbd881](https://github.com/minkxx/AttendEase-Server/commit/dcbd881826b3337f2bafb05a176a62e092f5fa26))
* approve build from msgpackr-extract ([ffc9894](https://github.com/minkxx/AttendEase-Server/commit/ffc989442c66622d0058be877e18e9fec326bee2))
* init bull-module and poll-sync-consumer processor ([65ebd24](https://github.com/minkxx/AttendEase-Server/commit/65ebd24381e8482ae3b2e4562fa77cbb1e299cbc))
* use prisma transaction to create a room and assign a new member as admin ([a8711a5](https://github.com/minkxx/AttendEase-Server/commit/a8711a56b5a16e78b0d0dd0b07b338b810c22bcf))


### Bug Fixes

* broken lockfile ([8722524](https://github.com/minkxx/AttendEase-Server/commit/8722524ec3d5caa5712cf649872dee45ef424992))
* broken lockfile ([e37bbd9](https://github.com/minkxx/AttendEase-Server/commit/e37bbd99949be39eb97110d5d0010f750f8163b1))
* removed dead null check ([d755b2d](https://github.com/minkxx/AttendEase-Server/commit/d755b2d7792179c9f0c53d7e534b8550c61a6c72))

## [0.3.0](https://github.com/minkxx/AttendEase-Server/compare/v0.2.9...v0.3.0) (2026-06-23)


### Features

* add attendance module ([8d88844](https://github.com/minkxx/AttendEase-Server/commit/8d888446b9c1350ece8a24e5ef7c84b31bbf8f9f))
* add create poll dto ([b6fdb84](https://github.com/minkxx/AttendEase-Server/commit/b6fdb84b3a98ceb029296b8cb144a7623fd1c851))
* add create poll endpoint ([a5ea901](https://github.com/minkxx/AttendEase-Server/commit/a5ea9015c4dcd573f725259655aca2990bdd4f01))
* add poll controller ([ad9122a](https://github.com/minkxx/AttendEase-Server/commit/ad9122a7d670ef65bf1bb99d92bbf0778c77028d))
* add poll gateway ([a8e8668](https://github.com/minkxx/AttendEase-Server/commit/a8e86680945355a81610aff1c6e1f52fd92069a8))
* add poll module ([e55ded2](https://github.com/minkxx/AttendEase-Server/commit/e55ded21cfd17f8c611fe3af27640fd93960e77b))
* add poll module and redis module ([b180e5f](https://github.com/minkxx/AttendEase-Server/commit/b180e5f65b21a0db7e40a660293b3b1d6c718a7e))
* add poll service ([0066b60](https://github.com/minkxx/AttendEase-Server/commit/0066b60c2ed9711267230417f09e94528b6994ef))
* add redis adapter ([90bcb30](https://github.com/minkxx/AttendEase-Server/commit/90bcb30823e05a8339c8276a4ab3b88a23788702))
* add redis adapter to websocket ([0d7321e](https://github.com/minkxx/AttendEase-Server/commit/0d7321e1fddb17e02ee07f0adcb29c9d0272618f))
* add redis client ([6c4d7e7](https://github.com/minkxx/AttendEase-Server/commit/6c4d7e781e4f449d43b8b648f42744b019ca0328))
* add redis host and port ([f1562ef](https://github.com/minkxx/AttendEase-Server/commit/f1562efdb6f4ca823e3cd3d16add199056e3007c))
* add redis module ([23f3015](https://github.com/minkxx/AttendEase-Server/commit/23f3015375697b9fb560c8148a0c1dbfcd4fe858))
* add redis service ([0ecc697](https://github.com/minkxx/AttendEase-Server/commit/0ecc6979a44ba687a0f065762403e7fcac4a38a4))
* add socket and redis package ([62f9e14](https://github.com/minkxx/AttendEase-Server/commit/62f9e14571ab2e866db46c020b1d455bd782d5b7))


### Bug Fixes

* error message ([055b397](https://github.com/minkxx/AttendEase-Server/commit/055b39791d669afc8bfb1a4880dac0fff2582a27))

### [0.2.9](https://github.com/minkxx/AttendEase-Server/compare/v0.2.8...v0.2.9) (2026-06-21)


### Features

* add database module ([28dbf97](https://github.com/minkxx/AttendEase-Server/commit/28dbf97048178cc767726a1de43a0ed352796ff7))
* add database module and removed prisma module ([ccfebb4](https://github.com/minkxx/AttendEase-Server/commit/ccfebb4360f2123951be8822fef8f91413c9b5d1))
* use config service to get env ([e818fa1](https://github.com/minkxx/AttendEase-Server/commit/e818fa187ceb37ecb852b9fd7e4f0fd942629b5f))
* verify smtp connection on module init ([d9a1555](https://github.com/minkxx/AttendEase-Server/commit/d9a15554e97a18c3e8c7a4bd4d91a09a717af38c))

### [0.2.8](https://github.com/minkxx/AttendEase-Server/compare/v0.2.7...v0.2.8) (2026-06-21)


### Features

* add timetable module ([3080e32](https://github.com/minkxx/AttendEase-Server/commit/3080e326977d925817f8d248f2c14b719c4bb4d1))

### [0.2.7](https://github.com/minkxx/AttendEase-Server/compare/v0.2.6...v0.2.7) (2026-06-19)


### Features

* add escape-html ([3604bf8](https://github.com/minkxx/AttendEase-Server/commit/3604bf849c82aedeb821b9e2ef845b3fc8a3f6df))
* env validation on app startup ([2c313e2](https://github.com/minkxx/AttendEase-Server/commit/2c313e274d04c9f4f324b72ce87dbcd3c79a6cd2))
* generate invite code with crypto ([10453d1](https://github.com/minkxx/AttendEase-Server/commit/10453d1403ed1987fd8880e59f82941eea2acc94))
* guard to html injection and unsafe url injection ([479cb4b](https://github.com/minkxx/AttendEase-Server/commit/479cb4ba7ed25d3206d74e1b52b2be2b204cfc27))


### Bug Fixes

* broken lock-file ([be37bb2](https://github.com/minkxx/AttendEase-Server/commit/be37bb23057fcbe0e4f31bcf9e29ca7d1577125e))

### [0.2.6](https://github.com/minkxx/AttendEase-Server/compare/v0.2.5...v0.2.6) (2026-06-18)


### Features

* add better-auth/expo package ([a8602c9](https://github.com/minkxx/AttendEase-Server/commit/a8602c900273688251adf98f8be5edbd8fac4407))
* add workflow permissions ([33db91a](https://github.com/minkxx/AttendEase-Server/commit/33db91ac17b93ef14641c71706414dbb0a1dc9db))
* better routing ([a57718b](https://github.com/minkxx/AttendEase-Server/commit/a57718b463ea0c978a639467572aeea337128da1))
* expo configuration ([242672a](https://github.com/minkxx/AttendEase-Server/commit/242672af43ce263cbf52b826ff7c7745f90b6657))
* lock file update ([dbb04bc](https://github.com/minkxx/AttendEase-Server/commit/dbb04bc122b48d77e2495ac00789f4ecfcd71752))
* remove token based auth ([0a7ed33](https://github.com/minkxx/AttendEase-Server/commit/0a7ed33fe02e73739bc41eaf1098dae0334f1f86))

### [0.2.5](https://github.com/monsurcodes/AttendEase-Server/compare/v0.2.4...v0.2.5) (2026-06-17)


### Features

* add audit report to gitignore ([8e50dcd](https://github.com/monsurcodes/AttendEase-Server/commit/8e50dcd83214dee375649dac0b43dd07213c70c2))
* add prettierignore file ([36f1c81](https://github.com/monsurcodes/AttendEase-Server/commit/36f1c81539c963caa490afbc321211947b8ebdbc))
* approve member endpoint ([68e1c50](https://github.com/monsurcodes/AttendEase-Server/commit/68e1c50ca63e07db5d6f1bcd9f48622bb71b2678))
* custom prisma exception filter ([28dbfad](https://github.com/monsurcodes/AttendEase-Server/commit/28dbfad2373492a8e7f4ec44364e06b8251df8d0))
* removed nestjs-prisma ([d61083f](https://github.com/monsurcodes/AttendEase-Server/commit/d61083f754fd2dedad524b12e8386ed707d5ac2e))

### [0.2.4](https://github.com/monsurcodes/AttendEase-Server/compare/v0.2.3...v0.2.4) (2026-06-16)


### Features

* add frontend url to trusted origins ([a9a4735](https://github.com/monsurcodes/AttendEase-Server/commit/a9a47353c7df8f74df825e08c217d5f6421b02ef))
* add getroom details ([4d06942](https://github.com/monsurcodes/AttendEase-Server/commit/4d06942d1cd200e7809272c6e42424e2c4a6c161))
* add global filter to handle prisma errors ([20ce7d7](https://github.com/monsurcodes/AttendEase-Server/commit/20ce7d701f5bbfe2ab48092f3ea2ed3a19ca5098))
* add indexing to timetable and attendance tables ([7fb7840](https://github.com/monsurcodes/AttendEase-Server/commit/7fb7840bf8c41bc650811b954880c29342fd5210))
* add logger utility ([261de9a](https://github.com/monsurcodes/AttendEase-Server/commit/261de9a85805dcbcab9a6dcd6e3ef01aa59e26b2))
* add nestjs-prisma ([f225a62](https://github.com/monsurcodes/AttendEase-Server/commit/f225a62e86680758cabfb9faa965062cd824d66d))
* add new endpoint ([38a6d32](https://github.com/monsurcodes/AttendEase-Server/commit/38a6d322dcb6ad303fc779af481d6e8b6004a972))
* configure nestjs-prisma to use generated client ([c852d44](https://github.com/monsurcodes/AttendEase-Server/commit/c852d4482d940e4621fef8d831992643889503de))
* enhanced null and any safety ([d01a3f4](https://github.com/monsurcodes/AttendEase-Server/commit/d01a3f4f43dd4f27afd667ece4988170dc23e22b))
* throws error if EmailService not initialized ([663a14a](https://github.com/monsurcodes/AttendEase-Server/commit/663a14a7b5d1e09b80b3c7cdd173ff99e8036654))
* use a single shared db connection pool ([a94b44a](https://github.com/monsurcodes/AttendEase-Server/commit/a94b44a6e3a53597de89431edbe275511e627f2e))


### Bug Fixes

* move the 'dotenv/config' to it's desired file ([e0f2542](https://github.com/monsurcodes/AttendEase-Server/commit/e0f2542db7c226b13f6264c6111697c035bec0df))
* remove dead fields ([830daa4](https://github.com/monsurcodes/AttendEase-Server/commit/830daa4fc4dac7399e3277b65dbd7e3019026595))
* remove dead guards ([baa6c68](https://github.com/monsurcodes/AttendEase-Server/commit/baa6c68f58dbd5ab6179de6f655523e087ce639c))
* remove dead guards ([0097914](https://github.com/monsurcodes/AttendEase-Server/commit/009791427f36faefe5a0684648b3f13d8294418e))
* remove redundant membership check ([541cfa0](https://github.com/monsurcodes/AttendEase-Server/commit/541cfa0a8b493d116c4dd9e1bff64293ed40cb9c))
* remove redundant second copy of the services from app.providers array ([41d7ce2](https://github.com/monsurcodes/AttendEase-Server/commit/41d7ce25bc5b1d11b18421ccd7d2306ac3b56483))
* remove unused packages ([d1b38ac](https://github.com/monsurcodes/AttendEase-Server/commit/d1b38ac0c3e98695accb4b73462cae36c03b129a))
* removed EmailModule as it is neither a global module nor has a controller ([af29730](https://github.com/monsurcodes/AttendEase-Server/commit/af2973044757c92647196676945a2fa19c47880f))
* wrong exception type ([03ce63f](https://github.com/monsurcodes/AttendEase-Server/commit/03ce63f854b6e323338ac4981b006533ea1926c0))
* wrong exception type ([bd7b92a](https://github.com/monsurcodes/AttendEase-Server/commit/bd7b92a7c4721d08b1a85c8f2a962c2cc8d675ef))

### [0.2.3](https://github.com/monsurcodes/AttendEase-Server/compare/v0.2.2...v0.2.3) (2026-06-15)

### Features

- add endpoints like /room/create and /room/join ([6230fb3](https://github.com/monsurcodes/AttendEase-Server/commit/6230fb380630bf255b9cef8d3c4099da40c0d4f0))
- add room module ([c6938b4](https://github.com/monsurcodes/AttendEase-Server/commit/c6938b4e3848bf8a4677f016ce89a38beb83c1e9))
- add room service methods ([1ac61c1](https://github.com/monsurcodes/AttendEase-Server/commit/1ac61c15b3cc7813de99fc37dc000be6aa188351))
- add zod validator ([f6b71af](https://github.com/monsurcodes/AttendEase-Server/commit/f6b71afc1a3d56f985a7ebb53720f5de3dc11326))
- create-room-dto ([fe0cfd2](https://github.com/monsurcodes/AttendEase-Server/commit/fe0cfd278ea6719946ad2b70546fcc69492b6a51))
- init room module ([450c7d7](https://github.com/monsurcodes/AttendEase-Server/commit/450c7d748fd91fc25e23f504133de53b3fc5f7ff))
- join-room-dto ([cd5c32c](https://github.com/monsurcodes/AttendEase-Server/commit/cd5c32cfa590c566fe114bd401d3c3791305af5b))
- new test endpoints ([1201207](https://github.com/monsurcodes/AttendEase-Server/commit/1201207fdcaa893d05161127cd353445922103d2))
- set zod validation pipe globally to app ([4ebb86a](https://github.com/monsurcodes/AttendEase-Server/commit/4ebb86a9167d6ad60c6cb171138107c458c242a0))

### [0.2.2](https://github.com/monsurcodes/AttendEase-Server/compare/v0.2.1...v0.2.2) (2026-06-14)

### Features

- add '/' endpoint ([de624c4](https://github.com/monsurcodes/AttendEase-Server/commit/de624c4fc05b7e96e963df14d48a780ad58e85f8))
- add email service ([576e40f](https://github.com/monsurcodes/AttendEase-Server/commit/576e40f8615a5cfb224fe248a715107f6f6f61c6))
- add nodemailer for email services ([48e3273](https://github.com/monsurcodes/AttendEase-Server/commit/48e327361c49d593ee717cb11c72a2b160b74e9a))
- add other required schema models ([c7aecdc](https://github.com/monsurcodes/AttendEase-Server/commit/c7aecdc8dfb35c347810611a63e8270d42b93774))
- add project-snapshot.md ([9f61950](https://github.com/monsurcodes/AttendEase-Server/commit/9f619505f90d92259400331d776aacbe502d49d6))
- chnage sourceType from commonjs to module ([86e9a37](https://github.com/monsurcodes/AttendEase-Server/commit/86e9a375d1842b0e4fa99840206f3257c5ee576e))
- fix endpoints ([408eb79](https://github.com/monsurcodes/AttendEase-Server/commit/408eb79ef16b36c3b0a9c750de4e4aa1fdb482bd))
- get endpoint to fetch auth user data ([f738cd7](https://github.com/monsurcodes/AttendEase-Server/commit/f738cd79a01c208526c15ec41127ab904044daa5))

### Bug Fixes

- better-auth instance type annotation failure ([3a047c9](https://github.com/monsurcodes/AttendEase-Server/commit/3a047c9341d39347f827671485283cc9e7d0f6d0))

### [0.2.1](https://github.com/monsurcodes/AttendEase-Server/compare/v0.2.0...v0.2.1) (2026-06-13)

### Features

- add better-auth packages ([e9c99aa](https://github.com/monsurcodes/AttendEase-Server/commit/e9c99aa3e3a88ebfff2d853d05b402d34e85c680))
- add better-auth tables ([4211aa0](https://github.com/monsurcodes/AttendEase-Server/commit/4211aa06bcf07fee0eabdcc29394ca4016cad620))
- add clean:info script with rimraf to fix server build error ([e398527](https://github.com/monsurcodes/AttendEase-Server/commit/e3985277af5cb6e43e9384b11160c7178bf8635c))
- better-auth config file ([1dfe4ec](https://github.com/monsurcodes/AttendEase-Server/commit/1dfe4ecd289340355426314a6fd4f3b5d3490d9d))
- disbale bodyParser for better-auth to work ([136d67b](https://github.com/monsurcodes/AttendEase-Server/commit/136d67bfa5ac70c050446b8d76c46e2ef4c2ba30))
- replace jwt config with better-auth config ([616cc11](https://github.com/monsurcodes/AttendEase-Server/commit/616cc11eb091ef9bc1f5e5c541aa0ab5fe0ff420))

## [0.2.0](https://github.com/monsurcodes/AttendEase-Server/compare/v0.1.2...v0.2.0) (2026-06-09)

### Features

- add cerateUser and findByEmail ([840ccba](https://github.com/monsurcodes/AttendEase-Server/commit/840ccba7b39ccd86261a0e3b6b30f46d81abd73b))
- add ConfigModule to read .env ([1c6eb3b](https://github.com/monsurcodes/AttendEase-Server/commit/1c6eb3be1b15e02bf8746e520ba5b2ea65272291))
- add CreateUserDto ([f80fe22](https://github.com/monsurcodes/AttendEase-Server/commit/f80fe2255895667d6cb20b45ca14859055295b44))
- add packages ([bb5969a](https://github.com/monsurcodes/AttendEase-Server/commit/bb5969acf3ad8b6c3daa6885ab8f9d625b0bd55e))
- add register user ([de257b9](https://github.com/monsurcodes/AttendEase-Server/commit/de257b95efa6712809f2322417b6d994d35d47db))
- add RegisterDto ([1e1e6f0](https://github.com/monsurcodes/AttendEase-Server/commit/1e1e6f029e8acab1e482b4e1cb9432f024119270))
- add request body to /auth/register endpoint ([4ea221e](https://github.com/monsurcodes/AttendEase-Server/commit/4ea221ef54c4e8197ec3dc3ad3542030cbb158fd))
- add UserModule ([852494d](https://github.com/monsurcodes/AttendEase-Server/commit/852494d7e54035baa1739e995a2744400193ccc3))
- approve bcrypt build ([49558f6](https://github.com/monsurcodes/AttendEase-Server/commit/49558f65c6eff22f709513ab923bf5c0736c36c9))
- exports itself for other modules to use ([886b9ae](https://github.com/monsurcodes/AttendEase-Server/commit/886b9ae94bcd4871a5ae9d752e2fc9403ca74cee))
- pass registerDto to register method ([88c4a90](https://github.com/monsurcodes/AttendEase-Server/commit/88c4a90a72153c68b7fa1e09ff1784f211487ced))

### Bug Fixes

- sasl prisma client error ([8492f07](https://github.com/monsurcodes/AttendEase-Server/commit/8492f0795d3811e6e26d97792038f4c8f771eaa8))

### [0.1.2](https://github.com/monsurcodes/AttendEase-Server/compare/v0.1.1...v0.1.2) (2026-06-08)

### Bug Fixes

- lint failure due to missing generated prisma client ([9e34045](https://github.com/monsurcodes/AttendEase-Server/commit/9e3404561bf0a16ce72d33190f38cbfa475400aa))

### [0.1.1](https://github.com/monsurcodes/AttendEase-Server/compare/v0.1.0...v0.1.1) (2026-06-08)

### Bug Fixes

- eslint errors related to unsafe calls ([70cbd7b](https://github.com/monsurcodes/AttendEase-Server/commit/70cbd7b8d6944ec7262ab9d63a9b6fa6343a5026))

## 0.1.0 (2026-06-08)

### Features

- add @nestjs/mapped-types to help create reusable DTOs ([68ee91d](https://github.com/monsurcodes/AttendEase-Server/commit/68ee91df3778b6f08c73d69838b2ff701b6d63f3))
- add api prefix globally to all endpoints except /health ([99aaa72](https://github.com/monsurcodes/AttendEase-Server/commit/99aaa727555834a8cda9ba06a14cc57e8297a6c9))
- add auth module ([001e4ff](https://github.com/monsurcodes/AttendEase-Server/commit/001e4ff7479a79364102379f3d3d3dce547cddeb))
- add BUG report template ([0936386](https://github.com/monsurcodes/AttendEase-Server/commit/0936386a597d9bb01cf12702fd64c247a441d897))
- add ci pipeline to lint and format code ([2325a60](https://github.com/monsurcodes/AttendEase-Server/commit/2325a60c5997c692ccb4c71b9db6985f0e12ff81))
- add dependabot to update packages automatically ([328c019](https://github.com/monsurcodes/AttendEase-Server/commit/328c019b9d879d81588ab36de89c0335bb21776b))
- add docker config to spin up local postgres db ([16d7bc7](https://github.com/monsurcodes/AttendEase-Server/commit/16d7bc7ddbdedb878aabb0d7d245a043b537a632))
- add generated prisma dir ([5e7beae](https://github.com/monsurcodes/AttendEase-Server/commit/5e7beae840e4e46a19d50f2d74aa105b9458a557))
- add more descriptive project readme ([9bd669c](https://github.com/monsurcodes/AttendEase-Server/commit/9bd669cffa1663f498e7b251dde6e836834e5386))
- add packages ([e68cf63](https://github.com/monsurcodes/AttendEase-Server/commit/e68cf63daed21c338729c856fa005e829cd4e015))
- add PR template ([d15fc50](https://github.com/monsurcodes/AttendEase-Server/commit/d15fc501aa2a37c40a6a12b901fce073d21b3931))
- add prisma config file ([b7251b6](https://github.com/monsurcodes/AttendEase-Server/commit/b7251b648715998cd93dd3d01b5008ca358ed1f2))
- add prisma module ([1f411c9](https://github.com/monsurcodes/AttendEase-Server/commit/1f411c9c56abe4c608e8d5a29b06352bbbcd5c9d))
- add prisma schema ([3f2b3ee](https://github.com/monsurcodes/AttendEase-Server/commit/3f2b3ee3d80846fc3a65624e0da594214c32540d))
- add user module ([3f15f76](https://github.com/monsurcodes/AttendEase-Server/commit/3f15f76a130ee139a97c9f582026f02901a8df3a))
- add UserModule and Prisma Module ([483a4ca](https://github.com/monsurcodes/AttendEase-Server/commit/483a4cab6ecc904cf2eb451c168a8c549986fb73))
- api endpoints ([6c22e32](https://github.com/monsurcodes/AttendEase-Server/commit/6c22e3269435b4647f44a9fb2a984f4fc4ac4ced))
- approved build for prisma ([f10833c](https://github.com/monsurcodes/AttendEase-Server/commit/f10833ceedb4990788961be2d5011360208d7a51))
- base endpoint sends json res instead of a string ([2909257](https://github.com/monsurcodes/AttendEase-Server/commit/2909257ce837d321eead87ce1cbb1236c386dfbe))
- fix eslint parsing error ([3da09d3](https://github.com/monsurcodes/AttendEase-Server/commit/3da09d3c61e9bf0c6cda77a1a26f9457f5757611))
- ignore dir from lintting ([c469d25](https://github.com/monsurcodes/AttendEase-Server/commit/c469d25772d0285e1666fda0744a2427654fc25f))
- imported AuthModule ([2a31d3f](https://github.com/monsurcodes/AttendEase-Server/commit/2a31d3f40a5b60a6e986c2721d19564380f62d7c))
- initial commit ([88b2d4a](https://github.com/monsurcodes/AttendEase-Server/commit/88b2d4a80c3474476919263db040210ebc90e5bf))
- initial commit ([a5a5e9e](https://github.com/monsurcodes/AttendEase-Server/commit/a5a5e9e58fcecaaf327633caec799ba5ba1b47ee))
- prisma migration files ([638cc7f](https://github.com/monsurcodes/AttendEase-Server/commit/638cc7f33c770a2ad9db899dfcab9a6a3e1deb71))
- returns server health instead of just a hello world message ([30ef732](https://github.com/monsurcodes/AttendEase-Server/commit/30ef7325b1d2de4dbe60520eee4ccaaa1ff53fee))
