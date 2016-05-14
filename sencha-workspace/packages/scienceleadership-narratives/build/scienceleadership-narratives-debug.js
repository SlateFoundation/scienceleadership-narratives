Ext.define('ScienceLeadership.narratives.overrides.TermReport', {
    override: 'Slate.model.TermReport'
}, function(Report) {
    Report.addFields([
        {
            name: 'Assessment',
            type: 'string',
            allowNull: true
        },
        {
            name: 'Grade',
            type: 'string',
            allowNull: true
        }
    ]);
});

Ext.define('ScienceLeadership.narratives.overrides.NarrativesEditorForm', {
    override: 'SlateAdmin.view.progress.narratives.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Slate.sbg.overrides.NarrativesSectionsGrid'
    ],
    initComponent: function() {
        var me = this;
        me.items = Ext.Array.insert(Ext.Array.clone(me.items), 2, [
            {
                xtype: 'combobox',
                name: 'Grade',
                fieldLabel: 'Overall Grade',
                labelAlign: 'left',
                store: [
                    'A',
                    'B',
                    'C',
                    'D',
                    'F',
                    'inc'
                ]
            },
            {
                xtype: 'textarea',
                anchor: '100%',
                grow: true,
                name: 'Assessment',
                fieldLabel: 'Assessment',
                labelAlign: 'top'
            }
        ]);
        me.callParent(arguments);
    }
});

Ext.define('ScienceLeadership.narratives.overrides.NarrativesStudentsGrid', {
    override: 'SlateAdmin.view.progress.narratives.StudentsGrid',
    initComponent: function() {
        var me = this;
        me.columns = Ext.Array.insert(Ext.Array.clone(me.columns), 1, [
            {
                text: 'Grade',
                dataIndex: 'report',
                emptyCellText: '&mdash;',
                width: 70,
                renderer: function(report) {
                    return report && report.get('Grade') || null;
                }
            }
        ]);
        me.callParent(arguments);
    }
});

