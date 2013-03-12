Ext.define('pomapp.view.Homepage', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
        // fullscreen: true,
        layout: {
            type: 'vbox'
        },
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '桌面'
            },
            {
            xtype: 'panel',
            margin: '25 0 0 0',
            defaults: {
                xtype: 'panel',
                layout: 'hbox',
                width:320,
                margin: '25 auto 0 auto',
            },
            items: [{
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                    html: '<img src="resources/images/1.jpg" width="85" height="85" />'
                }, {
                    html: '<img src="resources/images/2.jpg" width="85" height="85" />'
                }, {
                    html: '<img src="resources/images/3.jpg" width="85" height="85" />'
                }]
            }, {
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                    html: '<img src="resources/images/4.jpg" width="85" height="85" />'
                }, {
                    html: '<img src="resources/images/5.jpg" width="85" height="85" />'
                }, {
                    html: '<img src="resources/images/6.jpg" width="85" height="85" />'
                }]
            }, {
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                     html: '<img src="resources/images/7.jpg" width="85" height="85" />'
                }, {
                     html: '<img src="resources/images/8.jpg" width="85" height="85" />'
                }, {
                     html: '<img src="resources/images/9.jpg" width="85" height="85" />'
                }]
            }]
        }
        ]
    }
});