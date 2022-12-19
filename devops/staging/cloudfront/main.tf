terraform {
  backend "s3" {
    bucket  = "sfp-remotestate-backend-s3-stg"
    key     = "tfstate/environments/staging/cloudfront/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    profile = "awsgvsdev"
  }
}

module "sfp-cloudfront-cdn" {
  source                = "git::https://github.com/NBCUniversal/terraform-modules.git//cloudfront"
  environment           = var.environment
  domain_name           = var.portal_domain_name
  bucket_name           = var.static_libs_s3_bucket_name
  ssl_certification_arn = data.aws_acm_certificate.portal_issued.arn
  aws_route53_zone_id   = data.aws_route53_zone.portal_selected.zone_id
}
