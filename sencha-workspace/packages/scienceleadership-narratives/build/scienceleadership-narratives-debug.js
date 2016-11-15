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
        me.items = Ext.Array.insert(Ext.Array.filter(Ext.Array.clone(me.items), function(i) {
            return i.name != 'Notes';
        }), 2, [
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
                xtype: 'fieldcontainer',
                fieldLabel: 'Assessments / Comments',
                labelAlign: 'top',
                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        name: 'Notes',
                        enableColors: false,
                        enableAlignments: false,
                        enableFont: false,
                        enableFontSize: false
                    }
                ]
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

