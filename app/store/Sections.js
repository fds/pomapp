Ext.define('pomapp.store.Sections', {
    extend: 'Ext.data.TreeStore',
    
    requires: [
        'pomapp.model.Sections'
    ],
    
    config: {
        autoLoad: true,
        
        model: 'pomapp.model.Sections',
        
        proxy: {
            type: 'ajax',
            url: 'resources/data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});