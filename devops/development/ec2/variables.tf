variable "aws_region" {
      type = string
       default = "us-east-1"
}

variable "vpc_id" {
      type = string
}

variable "sec_group_name" {
      type = string
}

variable "instance_name" {
        type = string
        description = "Name of the instance to be created"
}

variable "instance_type" {
        type = string
        description = "Te instance type to be created"
}

variable "subnet_id" {
        type = string
        description = "The VPC subnet the instance(s) will be created in"
}

variable "ami_id" {
        type = string
        description = "The AMI to use"
}

variable "number_of_instances" {
        description = "number of instances to be created"
        default = 1
}

