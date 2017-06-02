{extends "sbg/section-term-reports/_body.tpl"}

{block fields}
    {if $Report->Grade}
        <div class="dli">
            <dt class="grade">Overall Grade</dt>
            <dd class="grade">{$Report->Grade}</dd>
        </div>
    {/if}
{/block}

{block comments}
    {if $Report->Assessment}
        <div class="dli">
            <dt class="comments">Assessment</dt>
            <dd class="comments">
                {if $Report->NotesFormat == 'html'}
                    {$Report->Assessment}
                {elseif $Report->NotesFormat == 'markdown'}
                    {$Report->Assessment|escape|markdown}
                {else}
                    {$Report->Assessment|escape}
                {/if}
            </dd>
        </div>
    {/if}

    {$dwoo.parent}
{/block}