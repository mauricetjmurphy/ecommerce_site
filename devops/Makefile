format:
	terraform fmt -recursive

deploy-codebuild-dev:
	@echo "************************** codebuild started *****************************"
	cd "development/codebuild" && terraform init && terraform apply
	@echo "**************************codebuild completed*****************************"

deploy-cloudfront-dev:
	@echo "************************** cloudfront started *****************************"
	cd "development/cloudfront" && terraform init && terraform apply
	@echo "************************** cloudfront completed *****************************"

deploy-lambda-dev:
	@echo "************************** lambda started *****************************"
	cd "development/lambda" && terraform init && terraform apply
	@echo "************************** lambda completed *****************************"

deploy-dev: format deploy-codebuild-dev deploy-cloudfront-dev deploy-lambda-dev
# ************************************************************************************

deploy-codebuild-stg:
	@echo "************************** codebuild started *****************************"
	cd "staging/codebuild" && terraform init && terraform apply --auto-approve
	@echo "************************** codebuild completed *****************************"

deploy-cloudfront-stg:
	@echo "************************** cloudfront started *****************************"
	cd "staging/cloudfront" && terraform init && terraform apply --auto-approve
	@echo "************************** cloudfront completed *****************************"

deploy-lambda-stg:
	@echo "************************** lambda started *****************************"
	cd "staging/lambda" && terraform init && terraform apply --auto-approve
	@echo "************************** lambda completed *****************************"


deploy-rds-stg:
	@echo "************************** rds started *****************************"
	cd "staging/rds" && terraform init && terraform apply --auto-approve
	@echo "************************** rds completed *****************************"

deploy-stg: format deploy-codebuild-stg deploy-cloudfront-stg deploy-lambda-stg


# ************************************************************************************

deploy-codebuild-prod:
	@echo "************************** codebuild started *****************************"
	cd "production/codebuild" && terraform init && terraform apply --auto-approve
	@echo "************************** codebuild completed *****************************"

deploy-cloudfront-prod:
	@echo "************************** cloudfront started *****************************"
	cd "production/cloudfront" && terraform init && terraform apply --auto-approve
	@echo "************************** cloudfront completed *****************************"

deploy-lambda-prod:
	@echo "************************** lambda started *****************************"
	cd "production/lambda" && terraform init && terraform apply --auto-approve
	@echo "************************** lambda completed *****************************"

deploy-prod: format deploy-codebuild-prod deploy-cloudfront-prod deploy-lambda-prod


# ************************************************************************************

deploy-codebuild-dr:
	@echo "************************** codebuild started *****************************"
	cd "dr/codebuild" && terraform init && terraform apply --auto-approve
	@echo "************************** codebuild completed *****************************"

deploy-cloudfront-dr:
	@echo "************************** cloudfront started *****************************"
	cd "dr/cloudfront" && terraform init && terraform apply --auto-approve
	@echo "************************** cloudfront completed *****************************"

deploy-lambda-dr:
	@echo "************************** lambda started *****************************"
	cd "dr/lambda" && terraform init && terraform apply --auto-approve
	@echo "************************** lambda completed *****************************"

deploy-dr: format deploy-codebuild-dr deploy-cloudfront-dr deploy-lambda-dr
