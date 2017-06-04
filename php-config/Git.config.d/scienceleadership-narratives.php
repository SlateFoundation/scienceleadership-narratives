<?php 

Git::$repositories['scienceleadership-narratives'] = [
    'remote' => 'https://github.com/SlateFoundation/scienceleadership-narratives.git',
    'originBranch' => 'builds/v1',
    'workingBranch' => 'builds/v1',
    'trees' => [
        'html-templates/scienceleadership-narratives/_body.tpl',
        'html-templates/scienceleadership-narratives/_body.email.tpl',
        'php-config/Git.config.d/scienceleadership-narratives.php',
        'php-config/Slate/Progress/SectionTermReport.config.d/70_scienceleadership-narratives.php',
        'sencha-workspace/packages/scienceleadership-narratives'
    ]
];