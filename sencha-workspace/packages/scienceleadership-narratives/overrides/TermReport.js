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