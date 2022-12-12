<?php

return array(

	'pdf'      => array(
		'enabled' => true,
        'binary'  => '/usr/local/bin/wkhtmltopdf',
		'timeout' => false,
		'env'     => array(),
        'options' => [
            'enable-local-file-access' => true,
            'orientation'   => 'landscape',
            'encoding'      => 'UTF-8'
        ],
	),
	'image'    => array(
		'enabled' => true,
		'binary'  => '/usr/local/bin/wkhtmltoimage',
		'timeout' => false,
        'options' => [
            'enable-local-file-access' => true,
            'orientation'   => 'landscape',
            'encoding'      => 'UTF-8'
        ],
		'env'     => array(),
	),

);
