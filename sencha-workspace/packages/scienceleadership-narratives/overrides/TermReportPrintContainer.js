Ext.define('ScienceLeadership.narratives.overrides.TermReportPrintContainer', {
    override: 'SlateAdmin.view.progress.terms.print.Container',


    initComponent: function() {
        var me = this;

        me.callParent(arguments);

        me.down('fieldset#includeFieldset').add({
            boxLabel: 'Overall Grade',
            name: 'print[grade]',
            checked: true
        });
    }
});