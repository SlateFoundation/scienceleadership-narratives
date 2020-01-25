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