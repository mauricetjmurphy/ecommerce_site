variable "environment" {
  type        = string
  description = "Must Be Lower Case! (dev, stg, prod and dr)"
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "vpc_id" {
  type = string
}

variable "private_subnets" {
  type = list(string)
}

variable "tags" {
  type = map(string)
}

variable "acm_certificate" {
  type        = string
  description = "Domain Certificate"
}

variable "sfp_api_domain_name" {
  type        = string
  description = "sfp API lookup domain name "
}

variable "cloudfront_description" {
  type        = string
  description = "sfp Lookup API CloudFront description"
}