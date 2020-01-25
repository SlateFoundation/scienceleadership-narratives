Ext.define('Scienceleadership.narratives.overrides.TermsReportController', {
    override: 'SlateAdmin.controller.progress.terms.Report',


    syncStudent: function(student) {
        this.callParent(arguments);

        var report = student.get('report');

        student.set('report_grade', report ? report.get('Grade') : null, { dirty: false });
    }
});