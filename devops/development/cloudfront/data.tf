resource "aws_security_group" "public" {
  name = "fr-${var.environment}-public-sg"
  description = "Public internet access"
  vpc_id = var.vpc_id
 
  tags = {
    Name        = "fr-${var.environment}-public-sg"
    Role        = "public"
    Project     = "fabrique rebuild"
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}
 
resource "aws_security_group_rule" "public_out" {
  type        = "egress"
  from_port   = 0
  to_port     = 0
  protocol    = "-1"
  cidr_blocks = ["0.0.0.0/0"]
 
  security_group_id = aws_security_group.public.id
}
 
resource "aws_security_group_rule" "public_in_ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.public.id
}
 
resource "aws_security_group_rule" "public_in_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.public.id
}
 
resource "aws_security_group_rule" "public_in_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.public.id
}

data "aws_acm_certificate" "portal_issued" {
  domain   = var.acm_certificate
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "portal_selected" {
  name         = var.acm_certificate
  private_zone = false
}