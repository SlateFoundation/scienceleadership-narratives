<?php

namespace Slate\Progress\Narratives;

Report::$fields['Assessment'] = [
    'type' => 'clob',
    'default' => null
];

Report::$fields['Grade'] = [
    'type' => 'enum',
    'values' => ['A', 'B', 'C', 'D', 'F', 'inc'],
    'default' => null
];