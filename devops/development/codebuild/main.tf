terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
    }
  }
  backend "s3" {
    bucket  = "sfp-remotestate-backend-s3-dev"
    key     = "tfstate/environments/development/codebuild/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    profile = "awsgvsdev"
  }
}

locals {
  security_groups_ids = data.aws_security_group.sfp.id
  git_token           = data.aws_ssm_parameter.github-token.value
}

module "sfp-backend-lfn" {
  source                    = "git::https://github.com/NBCUniversal/terraform-modules.git//codepipeline"
  environment               = var.environment
  vpc                       = var.vpc_id
  codebuild_private_subnets = var.private_subnets
  security_group            = local.security_groups_ids
  git_organization          = "NBCUniversal"
  git_domain                = "https://github.com"
  git_repository_name       = "sfp"
  git_application_name      = "sfp-backend"
  git_branch                = var.environment
  git_token                 = local.git_token
  git_buildspec_file        = data.template_file.buildspec_be.rendered
  git_include_path          = "sfp-backend/.*"
  tags                      = var.tags

}

module "sfp-frontend" {
  source                    = "git::https://github.com/NBCUniversal/terraform-modules.git//codepipeline"
  environment               = var.environment
  vpc                       = var.vpc_id
  codebuild_private_subnets = var.private_subnets
  security_group            = local.security_groups_ids
  git_organization          = "NBCUniversal"
  git_domain                = "https://github.com"
  git_application_name      = "sfp-frontend"
  git_repository_name       = "sfp"
  git_branch                = var.environment
  git_token                 = local.git_token
  git_buildspec_file        = data.template_file.buildspec_fe.rendered
  git_include_path          = "sfp-frontend/.*"
  tags                      = var.tags
}

# module "sfp-devops" {
#   source                    = "git::https://github.com/NBCUniversal/terraform-modules.git//codepipeline"
#   environment               = var.environment
#   vpc                       = var.vpc_id
#   codebuild_private_subnets = var.private_subnets
#   security_group            = local.security_groups_ids
#   git_organization          = "NBCUniversal"
#   git_domain                = "https://github.com"
#   git_application_name      = "sfp-devops"
#   git_repository_name       = "sfp-devops"
#   git_branch                = var.environment
#   git_token                 = local.git_token
#   git_buildspec_file        = data.template_file.buildspec_devops.rendered
# git_include_path          = "sfp-devops/.*"
#   tags                      = var.tags
# }

