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