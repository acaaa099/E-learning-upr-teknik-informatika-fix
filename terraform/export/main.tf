terraform {
  required_providers {
    azurerm = {
      source  = "azurerm"
      version = "4.58.0"
    }
  }
}
provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "res-0" {
  location   = "southeastasia"
  managed_by = ""
  name       = "rg-elearning-kel6"
  tags       = {}
}
resource "azurerm_ssh_public_key" "res-1" {
  location            = "indonesiacentral"
  name                = "vm1-elearning-kel6_key"
  public_key          = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCkNtnaPDZ5q/x+Af15t1eXolnS6xiXvOCkCBsuf9/WvHvUbsJ/Vq/CEZGmxD7SpkgpO8Jte1xu8r0Mq0ZnUhiqkmkLcyidrxyjyfG94QfMXTB3yOhldpTSLzzHhwua6YzJMpZX4uNK9MuCGFwDdbKFkxY00q2nhqlHmi9p0lp78PGBy0BmGHxo/aPJmsJvurZD8SjsGtIqxefoubcAhfScSMNKblZVcKKluutSjDesv/3hyDiDiHT9Z63Z0bjGzF2L/hJzE8cDacdfhAH2ioywbr6kPeu0g+5qVvRTk9u9vY1hnaHKbf8O8b3jUjp8vUzr1XIraSj+zd70KGsbmYoTUYi3NZbFFjUdw9xvG/Pl/qkLkPPH1qtlh2PvhuUbMn07Tm3HZItzZRPl8/pXBXo8KNKKDSey8iz3vVSeOQIvLCsik1O2PljcegjKDiwux4XW3abKKGXp18wtgDerfzsK1VFNI/kUgRQj5ln5fGNVSait3avHPZYbYV3w5MZemCE= generated-by-azure"
  resource_group_name = azurerm_resource_group.res-0.name
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
}
resource "azurerm_ssh_public_key" "res-2" {
  location            = "indonesiacentral"
  name                = "vm2-elearning-kel6_key"
  public_key          = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDVTwYxcsrHNstIk/AbPrHEbBGs6QJEPT7v3oWY4oejSp7i8fyAMhIaCCLJ8rMtPyaoKOoVO7KUUiJItoDruQKkUABu63tfIuYnI2xV8WggKFFl/rRdMcVIo1roGh9zCMpe8dXrCIW9kadjAjAiBEQGrFiDtPGLhQaRSuVI2vv5xeLaO0wWdgN9GgFDtWsVwARZgZP3d0H00z0Q36ovKdsNKpmsqVukL3+84nzYOF+vMFtAq+7cWiIU/Tu3whfso20KmZq1auK5QCSK11MOeI/AXiqslVj4dHdyFde0wxq5fgM7zxl6eO7HDH+/6hZbODi4zA4ThIuY7BBNHhcCt9D7p1tHO5/K1WbNzTInjagPWG/anuI9ZmcU/U3F/cg6dnzGZHynw90ubxf9FxpyfiIhHOxRh97en1OtxRgQeJCgYa99Dkd2ACBjJL9WlVonv6hLABMgTp6ZLbxKOR9O2X3AFUFZ1do7n0/eSRRE4s9iJQKSORab/f+kxChBWcGKe6k= generated-by-azure"
  resource_group_name = azurerm_resource_group.res-0.name
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
}
resource "azurerm_linux_virtual_machine" "res-3" {
  admin_password                                         = "" # Masked sensitive attribute
  admin_username                                         = "azureuser"
  allow_extension_operations                             = true
  availability_set_id                                    = ""
  bypass_platform_safety_checks_on_user_schedule_enabled = false
  capacity_reservation_group_id                          = ""
  computer_name                                          = "vm1-elearning-kel6"
  custom_data                                            = "" # Masked sensitive attribute
  dedicated_host_group_id                                = ""
  dedicated_host_id                                      = ""
  disable_password_authentication                        = true
  disk_controller_type                                   = "SCSI"
  edge_zone                                              = ""
  encryption_at_host_enabled                             = false
  eviction_policy                                        = ""
  extensions_time_budget                                 = "PT1H30M"
  license_type                                           = ""
  location                                               = "indonesiacentral"
  max_bid_price                                          = -1
  name                                                   = "vm1-elearning-kel6"
  network_interface_ids                                  = [azurerm_network_interface.res-7.id]
  os_managed_disk_id                                     = "/subscriptions/9d03fd7b-e09a-4ccf-a375-9acb6adbf20c/resourceGroups/rg-elearning-kel6/providers/Microsoft.Compute/disks/vm1-elearning-kel6_OsDisk_1_034edf2701d84264bcc86021f85b6a4a"
  patch_assessment_mode                                  = "ImageDefault"
  patch_mode                                             = "ImageDefault"
  platform_fault_domain                                  = -1
  priority                                               = "Regular"
  provision_vm_agent                                     = true
  proximity_placement_group_id                           = ""
  reboot_setting                                         = ""
  resource_group_name                                    = azurerm_resource_group.res-0.name
  secure_boot_enabled                                    = false
  size                                                   = "Standard_B2as_v2"
  source_image_id                                        = ""
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  user_data                         = ""
  virtual_machine_scale_set_id      = ""
  vm_agent_platform_updates_enabled = false
  vtpm_enabled                      = false
  zone                              = ""
  additional_capabilities {
    hibernation_enabled = false
    ultra_ssd_enabled   = false
  }
  admin_ssh_key {
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCkNtnaPDZ5q/x+Af15t1eXolnS6xiXvOCkCBsuf9/WvHvUbsJ/Vq/CEZGmxD7SpkgpO8Jte1xu8r0Mq0ZnUhiqkmkLcyidrxyjyfG94QfMXTB3yOhldpTSLzzHhwua6YzJMpZX4uNK9MuCGFwDdbKFkxY00q2nhqlHmi9p0lp78PGBy0BmGHxo/aPJmsJvurZD8SjsGtIqxefoubcAhfScSMNKblZVcKKluutSjDesv/3hyDiDiHT9Z63Z0bjGzF2L/hJzE8cDacdfhAH2ioywbr6kPeu0g+5qVvRTk9u9vY1hnaHKbf8O8b3jUjp8vUzr1XIraSj+zd70KGsbmYoTUYi3NZbFFjUdw9xvG/Pl/qkLkPPH1qtlh2PvhuUbMn07Tm3HZItzZRPl8/pXBXo8KNKKDSey8iz3vVSeOQIvLCsik1O2PljcegjKDiwux4XW3abKKGXp18wtgDerfzsK1VFNI/kUgRQj5ln5fGNVSait3avHPZYbYV3w5MZemCE= generated-by-azure"
    username   = "azureuser"
  }
  boot_diagnostics {
    storage_account_uri = ""
  }
  os_disk {
    caching                          = "ReadWrite"
    disk_encryption_set_id           = ""
    disk_size_gb                     = 30
    name                             = "vm1-elearning-kel6_OsDisk_1_034edf2701d84264bcc86021f85b6a4a"
    secure_vm_disk_encryption_set_id = ""
    security_encryption_type         = ""
    storage_account_type             = "StandardSSD_LRS"
    write_accelerator_enabled        = false
  }
  source_image_reference {
    offer     = "ubuntu-24_04-lts"
    publisher = "canonical"
    sku       = "server"
    version   = "latest"
  }
}
resource "azurerm_linux_virtual_machine" "res-4" {
  admin_password                                         = "" # Masked sensitive attribute
  admin_username                                         = "azureuser"
  allow_extension_operations                             = true
  availability_set_id                                    = ""
  bypass_platform_safety_checks_on_user_schedule_enabled = false
  capacity_reservation_group_id                          = ""
  computer_name                                          = "vm2-elearning-kel6"
  custom_data                                            = "" # Masked sensitive attribute
  dedicated_host_group_id                                = ""
  dedicated_host_id                                      = ""
  disable_password_authentication                        = true
  disk_controller_type                                   = "SCSI"
  edge_zone                                              = ""
  encryption_at_host_enabled                             = false
  eviction_policy                                        = ""
  extensions_time_budget                                 = "PT1H30M"
  license_type                                           = ""
  location                                               = "indonesiacentral"
  max_bid_price                                          = -1
  name                                                   = "vm2-elearning-kel6"
  network_interface_ids                                  = [azurerm_network_interface.res-9.id]
  os_managed_disk_id                                     = "/subscriptions/9d03fd7b-e09a-4ccf-a375-9acb6adbf20c/resourceGroups/rg-elearning-kel6/providers/Microsoft.Compute/disks/vm2-elearning-kel6_OsDisk_1_a9759b69fe074410a2df9f6235e15293"
  patch_assessment_mode                                  = "ImageDefault"
  patch_mode                                             = "ImageDefault"
  platform_fault_domain                                  = -1
  priority                                               = "Regular"
  provision_vm_agent                                     = true
  proximity_placement_group_id                           = ""
  reboot_setting                                         = ""
  resource_group_name                                    = azurerm_resource_group.res-0.name
  secure_boot_enabled                                    = true
  size                                                   = "Standard_B2as_v2"
  source_image_id                                        = ""
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  user_data                         = ""
  virtual_machine_scale_set_id      = ""
  vm_agent_platform_updates_enabled = false
  vtpm_enabled                      = true
  zone                              = ""
  additional_capabilities {
    hibernation_enabled = false
    ultra_ssd_enabled   = false
  }
  admin_ssh_key {
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDVTwYxcsrHNstIk/AbPrHEbBGs6QJEPT7v3oWY4oejSp7i8fyAMhIaCCLJ8rMtPyaoKOoVO7KUUiJItoDruQKkUABu63tfIuYnI2xV8WggKFFl/rRdMcVIo1roGh9zCMpe8dXrCIW9kadjAjAiBEQGrFiDtPGLhQaRSuVI2vv5xeLaO0wWdgN9GgFDtWsVwARZgZP3d0H00z0Q36ovKdsNKpmsqVukL3+84nzYOF+vMFtAq+7cWiIU/Tu3whfso20KmZq1auK5QCSK11MOeI/AXiqslVj4dHdyFde0wxq5fgM7zxl6eO7HDH+/6hZbODi4zA4ThIuY7BBNHhcCt9D7p1tHO5/K1WbNzTInjagPWG/anuI9ZmcU/U3F/cg6dnzGZHynw90ubxf9FxpyfiIhHOxRh97en1OtxRgQeJCgYa99Dkd2ACBjJL9WlVonv6hLABMgTp6ZLbxKOR9O2X3AFUFZ1do7n0/eSRRE4s9iJQKSORab/f+kxChBWcGKe6k= generated-by-azure"
    username   = "azureuser"
  }
  boot_diagnostics {
    storage_account_uri = ""
  }
  os_disk {
    caching                          = "ReadWrite"
    disk_encryption_set_id           = ""
    disk_size_gb                     = 30
    name                             = "vm2-elearning-kel6_OsDisk_1_a9759b69fe074410a2df9f6235e15293"
    secure_vm_disk_encryption_set_id = ""
    security_encryption_type         = ""
    storage_account_type             = "Premium_LRS"
    write_accelerator_enabled        = false
  }
  source_image_reference {
    offer     = "ubuntu-24_04-lts"
    publisher = "canonical"
    sku       = "server"
    version   = "latest"
  }
}
resource "azurerm_lb" "res-5" {
  edge_zone           = ""
  location            = "indonesiacentral"
  name                = "lb-elearning-kel6"
  resource_group_name = azurerm_resource_group.res-0.name
  sku                 = "Standard"
  sku_tier            = "Regional"
  tags                = {}
  frontend_ip_configuration {
    gateway_load_balancer_frontend_ip_configuration_id = ""
    name                                               = "fe-lb-elearning-kel6"
    private_ip_address                                 = ""
    private_ip_address_allocation                      = "Dynamic"
    private_ip_address_version                         = ""
    public_ip_address_id                               = azurerm_public_ip.res-13.id
    public_ip_prefix_id                                = ""
    subnet_id                                          = ""
    zones                                              = []
  }
}
resource "azurerm_lb_backend_address_pool" "res-6" {
  loadbalancer_id    = azurerm_lb.res-5.id
  name               = "be-lb-elearning-kel6"
  synchronous_mode   = ""
  virtual_network_id = ""
}
resource "azurerm_network_interface" "res-7" {
  accelerated_networking_enabled = true
  auxiliary_mode                 = ""
  auxiliary_sku                  = ""
  dns_servers                    = []
  edge_zone                      = ""
  internal_dns_name_label        = ""
  ip_forwarding_enabled          = false
  location                       = "indonesiacentral"
  name                           = "vm1-elearning-kel6349"
  resource_group_name            = azurerm_resource_group.res-0.name
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  ip_configuration {
    gateway_load_balancer_frontend_ip_configuration_id = ""
    name                                               = "ipconfig1"
    primary                                            = true
    private_ip_address                                 = "10.0.0.4"
    private_ip_address_allocation                      = "Dynamic"
    private_ip_address_version                         = "IPv4"
    public_ip_address_id                               = azurerm_public_ip.res-14.id
    subnet_id                                          = "/subscriptions/9d03fd7b-e09a-4ccf-a375-9acb6adbf20c/resourceGroups/rg-elearning-kel6/providers/Microsoft.Network/virtualNetworks/vnet-elearning-kel6/subnets/default"
  }
  depends_on = [
    # One of azurerm_subnet.res-17,azurerm_subnet_network_security_group_association.res-18 (can't auto-resolve as their ids are identical)
  ]
}
resource "azurerm_network_interface_backend_address_pool_association" "res-8" {
  backend_address_pool_id = azurerm_lb_backend_address_pool.res-6.id
  ip_configuration_name   = "ipconfig1"
  network_interface_id    = azurerm_network_interface.res-7.id
}
resource "azurerm_network_interface" "res-9" {
  accelerated_networking_enabled = true
  auxiliary_mode                 = ""
  auxiliary_sku                  = ""
  dns_servers                    = []
  edge_zone                      = ""
  internal_dns_name_label        = ""
  ip_forwarding_enabled          = false
  location                       = "indonesiacentral"
  name                           = "vm2-elearning-kel6150"
  resource_group_name            = azurerm_resource_group.res-0.name
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  ip_configuration {
    gateway_load_balancer_frontend_ip_configuration_id = ""
    name                                               = "ipconfig1"
    primary                                            = true
    private_ip_address                                 = "10.0.0.5"
    private_ip_address_allocation                      = "Dynamic"
    private_ip_address_version                         = "IPv4"
    public_ip_address_id                               = azurerm_public_ip.res-15.id
    subnet_id                                          = "/subscriptions/9d03fd7b-e09a-4ccf-a375-9acb6adbf20c/resourceGroups/rg-elearning-kel6/providers/Microsoft.Network/virtualNetworks/vnet-elearning-kel6/subnets/default"
  }
  depends_on = [
    # One of azurerm_subnet.res-17,azurerm_subnet_network_security_group_association.res-18 (can't auto-resolve as their ids are identical)
  ]
}
resource "azurerm_network_interface_backend_address_pool_association" "res-10" {
  backend_address_pool_id = azurerm_lb_backend_address_pool.res-6.id
  ip_configuration_name   = "ipconfig1"
  network_interface_id    = azurerm_network_interface.res-9.id
}
resource "azurerm_network_security_group" "res-11" {
  location            = "indonesiacentral"
  name                = "nsg-elearning-kel6"
  resource_group_name = azurerm_resource_group.res-0.name
  security_rule = [{
    access                                     = "Allow"
    description                                = "Allow SSH access for admin management"
    destination_address_prefix                 = "*"
    destination_address_prefixes               = []
    destination_application_security_group_ids = []
    destination_port_range                     = "22"
    destination_port_ranges                    = []
    direction                                  = "Inbound"
    name                                       = "allow-ssh-admin"
    priority                                   = 300
    protocol                                   = "Tcp"
    source_address_prefix                      = "*"
    source_address_prefixes                    = []
    source_application_security_group_ids      = []
    source_port_range                          = "*"
    source_port_ranges                         = []
  }]
  tags = {}
}
resource "azurerm_network_security_rule" "res-12" {
  access                                     = "Allow"
  description                                = "Allow SSH access for admin management"
  destination_address_prefix                 = "*"
  destination_address_prefixes               = []
  destination_application_security_group_ids = []
  destination_port_range                     = "22"
  destination_port_ranges                    = []
  direction                                  = "Inbound"
  name                                       = "allow-ssh-admin"
  network_security_group_name                = "nsg-elearning-kel6"
  priority                                   = 300
  protocol                                   = "Tcp"
  resource_group_name                        = azurerm_resource_group.res-0.name
  source_address_prefix                      = "*"
  source_address_prefixes                    = []
  source_application_security_group_ids      = []
  source_port_range                          = "*"
  source_port_ranges                         = []
  depends_on = [
    azurerm_network_security_group.res-11,
  ]
}
resource "azurerm_public_ip" "res-13" {
  allocation_method       = "Static"
  ddos_protection_mode    = "VirtualNetworkInherited"
  edge_zone               = ""
  idle_timeout_in_minutes = 4
  ip_tags                 = {}
  ip_version              = "IPv4"
  location                = "indonesiacentral"
  name                    = "pip-elearning-kel6"
  resource_group_name     = azurerm_resource_group.res-0.name
  sku                     = "Standard"
  sku_tier                = "Regional"
  tags                    = {}
  zones                   = ["1", "2", "3"]
}
resource "azurerm_public_ip" "res-14" {
  allocation_method       = "Static"
  ddos_protection_mode    = "VirtualNetworkInherited"
  edge_zone               = ""
  idle_timeout_in_minutes = 4
  ip_tags                 = {}
  ip_version              = "IPv4"
  location                = "indonesiacentral"
  name                    = "vm1-elearning-kel6-ip"
  resource_group_name     = azurerm_resource_group.res-0.name
  sku                     = "Standard"
  sku_tier                = "Regional"
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  zones = []
}
resource "azurerm_public_ip" "res-15" {
  allocation_method       = "Static"
  ddos_protection_mode    = "VirtualNetworkInherited"
  edge_zone               = ""
  idle_timeout_in_minutes = 4
  ip_tags                 = {}
  ip_version              = "IPv4"
  location                = "indonesiacentral"
  name                    = "vm2-elearning-kel6-ip"
  resource_group_name     = azurerm_resource_group.res-0.name
  sku                     = "Standard"
  sku_tier                = "Regional"
  tags = {
    Project = "E-Learning-Kel6"
    Week    = "2"
  }
  zones = []
}
resource "azurerm_virtual_network" "res-16" {
  address_space                  = ["10.0.0.0/16"]
  bgp_community                  = ""
  dns_servers                    = []
  edge_zone                      = ""
  flow_timeout_in_minutes        = 0
  location                       = "indonesiacentral"
  name                           = "vnet-elearning-kel6"
  private_endpoint_vnet_policies = "Disabled"
  resource_group_name            = azurerm_resource_group.res-0.name
  subnet = [{
    address_prefixes                              = ["10.0.0.0/24"]
    default_outbound_access_enabled               = true
    delegation                                    = []
    id                                            = azurerm_subnet_network_security_group_association.res-18.id
    name                                          = "default"
    private_endpoint_network_policies             = "Disabled"
    private_link_service_network_policies_enabled = true
    route_table_id                                = ""
    security_group                                = azurerm_network_security_group.res-11.id
    service_endpoint_policy_ids                   = []
    service_endpoints                             = []
    }, {
    address_prefixes                              = ["10.0.1.0/24"]
    default_outbound_access_enabled               = false
    delegation                                    = []
    id                                            = azurerm_subnet_network_security_group_association.res-20.id
    name                                          = "subnet-private-kel6"
    private_endpoint_network_policies             = "Disabled"
    private_link_service_network_policies_enabled = true
    route_table_id                                = ""
    security_group                                = azurerm_network_security_group.res-11.id
    service_endpoint_policy_ids                   = []
    service_endpoints                             = []
  }]
  tags = {}
}
resource "azurerm_subnet" "res-17" {
  address_prefixes                              = ["10.0.0.0/24"]
  default_outbound_access_enabled               = true
  name                                          = "default"
  private_endpoint_network_policies             = "Disabled"
  private_link_service_network_policies_enabled = true
  resource_group_name                           = azurerm_resource_group.res-0.name
  service_endpoint_policy_ids                   = []
  service_endpoints                             = []
  sharing_scope                                 = ""
  virtual_network_name                          = "vnet-elearning-kel6"
  depends_on = [
    azurerm_virtual_network.res-16,
  ]
}
resource "azurerm_subnet_network_security_group_association" "res-18" {
  network_security_group_id = azurerm_network_security_group.res-11.id
  subnet_id                 = azurerm_subnet.res-17.id
}
resource "azurerm_subnet" "res-19" {
  address_prefixes                              = ["10.0.1.0/24"]
  default_outbound_access_enabled               = false
  name                                          = "subnet-private-kel6"
  private_endpoint_network_policies             = "Disabled"
  private_link_service_network_policies_enabled = true
  resource_group_name                           = azurerm_resource_group.res-0.name
  service_endpoint_policy_ids                   = []
  service_endpoints                             = []
  sharing_scope                                 = ""
  virtual_network_name                          = "vnet-elearning-kel6"
  depends_on = [
    azurerm_virtual_network.res-16,
  ]
}
resource "azurerm_subnet_network_security_group_association" "res-20" {
  network_security_group_id = azurerm_network_security_group.res-11.id
  subnet_id                 = azurerm_subnet.res-19.id
}
