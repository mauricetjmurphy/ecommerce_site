terraform {
  backend "s3" {
    bucket  = "fr-remotestate-backend-s3-development"
    key     = "tfstate/environments/development/cloudfront/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    profile = "default"
  }
}

module "sfp-cloudfront-cdn" {
  source                = "git::https://github.com/mauricetjmurphy/Terraform-Modules.git//cloudfront"
  environment           = var.environment
  domain_name           = var.portal_domain_name
  bucket_name           = var.static_assets_s3_bucket_name
  ssl_certification_arn = data.aws_acm_certificate.portal_issued.arn
  aws_route53_zone_id   = data.aws_route53_zone.portal_selected.zone_id
}
