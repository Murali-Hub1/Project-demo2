terraform {
  backend "azurerm" {
    resource_group_name  = "rg-tf-backend"
    storage_account_name = "tfstate47530"
    container_name       = "tfstate"
    key                  = "functionapp.tfstate"
  }
}
