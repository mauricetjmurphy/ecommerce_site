terraform {
  backend "s3" {
    bucket  = "sfp-remotestate-backend-s3-dev"
    key     = "tfstate/environments/development/lambda/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    profile = "awsgvsdev"
  }
}

locals {
  lambda_fn_name = "sfp-api-lfn"
}


data "aws_region" "current" {}
module "sfp-api-lfn" {
  source                   = "git::https://github.com/NBCUniversal/terraform-modules.git//lambda/lambda_for_api"
  # source                   = "../../../../GVS-Dev Backend/terraform-modules/lambda/lambda_for_api"
  environment              = var.environment
  vpc_id                   = var.vpc_id
  private_subnets          = var.private_subnets
  security_group_ids       = [data.aws_security_group.sfp_security_group.id]
  function_name            = local.lambda_fn_name
  api_origin_id            = "sfp API ${title(var.environment)} Origin"
  aliases_api_domain_names = [var.sfp_api_domain_name]
  api_domain_name          = var.sfp_api_domain_name
  cloudfront_description   = var.cloudfront_description
  route53_zone_id          = data.aws_route53_zone.sfp_api_zone.zone_id
  ssl_certification_arn    = data.aws_acm_certificate.sfp_api_certificate.arn
  tags                     = var.tags
  handler_name = "main"
  environment_variables = {
    BUCKET_NAME = "sfp-${var.environment}-policies"
    REGION      = data.aws_region.current.name
    SECRET_NAME = "sfp-api-credentials-${var.environment}"
  }

}
