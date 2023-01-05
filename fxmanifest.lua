fx_version 'cerulean'
game 'gta5'
lua54 'yes'

description 'svelte-template'
version '0.0.1'

shared_scripts {
	'config.lua'
}

client_scripts {
	'client/*.lua',
}

server_scripts {
	'server/*.lua'
}

ui_page 'html/index.html'

files {
	'html/*',
}