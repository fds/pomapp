Ext.define('pomapp.view.Homepage', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Img'
    ],
    
    config: {
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
            margin: '20 0 0 0',
            defaults: {
                xtype: 'panel',
                layout: 'hbox',
                width:320,
                margin: '20 auto 0 auto',
            },
            items: [{
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                    xtype: 'image',
                    src: './resources/images/1.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            // control.redirectTo("Main");
                            // Ext.Viewport.animateActiveItem(Ext.getCmp('Pic'), {type: 'pop', direction: 'left'}); 
                            Ext.getCmp('mainview').setActiveItem(1);
                    　　 }
                    }
                    // html: '<img src="resources/images/1.jpg" width="85" height="85"  id="img1"/>'
                }, {
                   xtype: 'image',
                    src: './resources/images/2.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }, {
                    xtype: 'image',
                    src: './resources/images/3.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }]
            }, {
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                    xtype: 'image',
                    src: './resources/images/4.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }, {
                    xtype: 'image',
                    src: './resources/images/5.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }, {
                    xtype: 'image',
                    src: './resources/images/6.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }]
            }, {
                defaults: {
                    xtype: 'panel',
                    margin: 10,
                    style: 'border: 1px solid #cccccc; border-radius: 5px;'
                },
                items: [{
                    xtype: 'image',
                    src: './resources/images/7.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }, {
                    xtype: 'image',
                    src: './resources/images/8.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }, {
                    xtype: 'image',
                    src: './resources/images/9.jpg',
                    width:85,
                    height:85,
                    listeners:{
                    　　 tap:function(){
                            Ext.Msg.alert('dsds ');
                    　　 }
                    }
                }]
            }]
        }
        ]
    }
});