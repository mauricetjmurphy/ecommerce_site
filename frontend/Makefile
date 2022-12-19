
.EXPORT_ALL_VARIABLES:
	TEST_ENV = local

install:
	yarn install

build: install
	yarn build

build-dev: install
	yarn build:dev

build-stg: install
	yarn build:stg

build-prod: install
	yarn build:prod

run-tests:
	yarn test

deploy-dev: build-dev
	aws s3 sync --delete build/ s3://fr-dev-web

deploy-stg: build-stg
	aws s3 sync --delete build/ s3://fr-stg-web

deploy-prod: build-prod
	aws s3 sync --delete build/ s3://fr-prod-web
	aws cloudfront create-invalidation --distribution-id "E1CUYQLHXWMCYY" --paths '/*'
