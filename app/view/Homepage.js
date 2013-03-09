Ext.define('pomapp.view.Homepage', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
        scrollable: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '我的第一个ShenCha程序'
            },

            {
                styleHtmlContent: true,
                maxWidth: 750,
               html:[
                    '<imgsrc="http://staging.sencha.com/img/sencha.png" />',
                    '<h1>Welcome to Sencha Touch</h1>',
                    "<p>You're creating the Getting Started app. This demonstrates how ",
                    "to use tabs, lists and forms to create a simple app</p>",
                    '<h2>Sencha Touch (2.0.0)</h2>'
                ].join("")
            }
        ]
    }
});