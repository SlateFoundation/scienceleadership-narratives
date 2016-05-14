Ext.define('ScienceLeadership.narratives.overrides.NarrativesEditorForm', {
    override: 'SlateAdmin.view.progress.narratives.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Slate.sbg.overrides.NarrativesSectionsGrid'
    ],

    initComponent: function() {
        var me = this;

        me.items = Ext.Array.insert(Ext.Array.clone(me.items), 2, [{
            xtype: 'combobox',
            name: 'Grade',
            fieldLabel: 'Overall Grade',
            labelAlign: 'left',
            store: ['A', 'B', 'C', 'D', 'F', 'inc']
        },{
            xtype: 'textarea',
            anchor: '100%',
            grow: true,
            name: 'Assessment',
            fieldLabel: 'Assessment',
            labelAlign: 'top'
        }]);

        me.callParent(arguments);
    }
});