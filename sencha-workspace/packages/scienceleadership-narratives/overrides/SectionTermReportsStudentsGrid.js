Ext.define('ScienceLeadership.narratives.overrides.SectionTermReportsStudentsGrid', {
    override: 'SlateAdmin.view.progress.terms.StudentsGrid',


    initComponent: function() {
        var me = this;

        me.columns = Ext.Array.insert(Ext.Array.clone(me.columns), 1, [{
            text: 'Grade',
            dataIndex: 'report',
            emptyCellText: '&mdash;',
            width: 70,
            renderer: function(report) {
                return report && report.get('Grade') || null;
            }
        }]);

        me.callParent(arguments);
    }
});