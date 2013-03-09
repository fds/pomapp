Ext.define('pomapp.view.Pic', {
    extend: 'Ext.Carousel',
    xtype: 'pic',
    id: 'piclist',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Img'
    ],
    
    config: {
        // direction: 'vertical',
        directionLock: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '我的照片',
            }
        ]
    },
    
});