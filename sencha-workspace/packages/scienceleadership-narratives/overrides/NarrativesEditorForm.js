Ext.define('ScienceLeadership.narratives.overrides.NarrativesEditorForm', {
    override: 'SlateAdmin.view.progress.narratives.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Slate.sbg.overrides.NarrativesSectionsGrid'
    ],

    initComponent: function() {
        var me = this;

        me.items = Ext.Array.insert(Ext.Array.filter(Ext.Array.clone(me.items), function(i) {
            return i.name != 'Notes';
        }), 2, [{
            xtype: 'combobox',
            name: 'Grade',
            fieldLabel: 'Overall Grade',
            labelAlign: 'left',
            store: ['A', 'B', 'C', 'D', 'F', 'inc']
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Assessments / Comments',
            labelAlign: 'top',
            layout: 'fit',
            items: [{
                xtype: 'htmleditor',
                name: 'Notes',
                enableColors: false,
                enableAlignments: false,
                enableFont: false,
                enableFontSize: false
            }]
        }]);

        me.callParent(arguments);
    }
});