Ext.define('pomapp.view.Sections', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'sectionslist',
    id: 'mainlist',
    
    requires: [
        'pomapp.store.Sections',
        'pomapp.view.Detail'
    ],
    
    config: {
        title: '文章列表',
        useTitleAsBackText: false,
        onItemDisclosure: true,
        store: 'Sections',
        detailCard: {
            xtype: 'detailcard'
        },
        zIndex: 0
    },
    
    getTitleTextTpl: function() {
        return '<div>{name}</div>';
    },
    getItemTextTpl: function(node) {
        return '<div><strong>{name}:</strong> <em>{description}</em></div>';
    }
});