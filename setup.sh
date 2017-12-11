#!/bin/bash
if ![-x "$(command -v node)"]; then
	echo 'Error: nodejs is not installed.' >&2
fi

if ![-x "$(command -v npm)"]; then
	echo 'Error: npm is installed.' >&2
fi

cd /home/vagrant/ui

npm install

npm start

