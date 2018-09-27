Ext.define('ScienceLeadership.narratives.overrides.SectionTermReport', {override:'Slate.model.progress.SectionTermReport'}, function(Report) {
  Report.addFields([{name:'Assessment', type:'string', allowNull:true}, {name:'Grade', type:'string', allowNull:true}]);
});
Ext.define('ScienceLeadership.narratives.overrides.SectionTermReportsEditorForm', {override:'SlateAdmin.view.progress.terms.EditorForm', requires:['Ext.form.field.ComboBox', 'Ext.form.field.TextArea', 'Slate.sbg.overrides.TermReportSectionsGrid'], initComponent:function() {
  var me = this;
  me.items = Ext.Array.insert(Ext.Array.clone(me.items), 2, [{xtype:'combobox', name:'Grade', fieldLabel:'Overall Grade', labelAlign:'left', store:['A', 'B', 'C', 'D', 'F', 'inc']}]);
  me.callParent(arguments);
  me.down('field[name\x3dNotes]').setFieldLabel('Assessments/Comments');
}});
Ext.define('ScienceLeadership.narratives.overrides.SectionTermReportsStudentsGrid', {override:'SlateAdmin.view.progress.terms.StudentsGrid', initComponent:function() {
  var me = this;
  me.columns = Ext.Array.insert(Ext.Array.clone(me.columns), 1, [{text:'Grade', dataIndex:'report_grade', emptyCellText:'\x26mdash;', width:70}]);
  me.callParent(arguments);
}});
Ext.define('ScienceLeadership.narratives.overrides.TermReportPrintContainer', {override:'SlateAdmin.view.progress.terms.print.Container', initComponent:function() {
  var me = this;
  me.callParent(arguments);
  me.down('fieldset#includeFieldset').add({boxLabel:'Overall Grade', name:'print[grade]', checked:true});
}});
Ext.define('Scienceleadership.narratives.overrides.TermsReportController', {override:'SlateAdmin.controller.progress.terms.Report', syncStudent:function(student) {
  this.callParent(arguments);
  var report = student.get('report');
  student.set('report_grade', report ? report.get('Grade') : null, {dirty:false});
}});
