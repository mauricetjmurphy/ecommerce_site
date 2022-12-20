data "aws_security_group" "sfp_security_group" {
  name = "imt-lambda-${var.environment}-sg"
}

data "aws_acm_certificate" "sfp_api_certificate" {
  domain   = var.acm_certificate
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "sfp_api_zone" {
  name         = var.acm_certificate
  private_zone = true
}