# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "softrams/centos7"
  config.ssh.insert_key=false
  config.vm.box_version = "7"
  config.vm.box_check_update = true
  config.vm.provider 'virtualbox' do |vb|
    vb.customize ['modifyvm', :id, '--cableconnected1', 'on']
  end
  config.vm.synced_folder '.', '/vagrant', disabled: true
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 3001, host: 3001
  config.vm.network "forwarded_port", guest: 3002, host: 3002
  config.vm.network "forwarded_port", guest: 3299, host: 3299
  config.vm.network "forwarded_port", guest: 3306, host: 3306

  # Sync App
  config.vm.synced_folder ".", "/home/vagrant/ui"

  config.vm.provision "shell" do |s|
      s.path = "./setup.sh"
  end	  

end
