data "aws_security_group" "sfp" {
  vpc_id = var.vpc_id
  tags = {
    Name = "GVS Default Security Group"
  }
}

data "aws_ssm_parameter" "github-token" {
  name = "github-token"
}

module "template" {
  source = "../../buildspec"
}

data "template_file" "buildspec_fe" {
  template = module.template.source
  vars = {
    build_env    = var.environment
    pre_make_command = "cd sfp-frontend"
    make_command = "make deploy-${var.environment}"
  }
}


data "template_file" "buildspec_be" {
  template = module.template.source
  vars = {
    build_env    = var.environment
    pre_make_command = "cd sfp-backend"
    make_command = "make push-lambdas-${var.environment}"
  }
}