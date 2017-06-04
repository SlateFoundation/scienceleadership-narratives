{extends "sbg/section-term-reports/_body.email.tpl"}

{block fields}
    {if $Report->Grade}
        <div style="margin: 1em 0;">
            <span style="color: #5e6366; font-size: smaller; font-style: italic;">Overall Grade</span>
            <br />
            <span style="display: block; margin-left: 1.5em;">
                <strong>{$Report->Grade}</strong>
            </span>
        </div>
    {/if}

    {$dwoo.parent}
{/block}

{block comments}
    {if $Report->Assessment}
        <span style="color: #5e6366; font-size: smaller; font-style: italic;">Assessment</span>
        <br />
        <div style="display: block; margin: 0 1.5em;">
            {if $Report->NotesFormat == 'html'}
                {$Report->Assessment}
            {elseif $Report->NotesFormat == 'markdown'}
                {$Report->Assessment|escape|markdown}
            {else}
                {$Report->Assessment|escape}
            {/if}
        </div>
    {/if}

    {$dwoo.parent}
{/block}