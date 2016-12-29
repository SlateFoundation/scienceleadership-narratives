Ext.define('ScienceLeadership.narratives.overrides.SectionTermReport', {
    override: 'Slate.model.progress.SectionTermReport'
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

Ext.define('ScienceLeadership.narratives.overrides.SectionTermReportsEditorForm', {
    override: 'SlateAdmin.view.progress.terms.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Slate.sbg.overrides.TermReportSectionsGrid'
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
            }
        ]);
        me.callParent(arguments);
        me.down('field[name=Notes]').setFieldLabel('Assessments/Comments');
    }
});

Ext.define('ScienceLeadership.narratives.overrides.SectionTermReportsStudentsGrid', {
    override: 'SlateAdmin.view.progress.terms.StudentsGrid',
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

