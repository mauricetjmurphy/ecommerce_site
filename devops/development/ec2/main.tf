
resource "aws_security_group" "ecomm-sg" {
  name = var.secgroupname
  description = var.secgroupname
  vpc_id = var.vpc_id

  // To Allow SSH Transport
  ingress {
    from_port = 22
    protocol = "tcp"
    to_port = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  // To Allow Port 80 Transport
  ingress {
    from_port = 80
    protocol = "tcp"
    to_port = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}




resource "aws_instance" "ec2_instance" {
    ami = var.ami_id
    count = var.number_of_instances
    instance_type = var.instance_type
    
} 


output "ec2instance" {
  value = aws_instance.ec2_instance[0].public_ip
}